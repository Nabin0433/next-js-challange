import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import spotifyApi, { LOGIN_URL } from "../../../lib/spotify";

const refreshAccessToken = async (token) => {
  try {
    spotifyApi.setAccessToken(token.accessToken);
    spotifyApi.setRefreshToken(token.refreshToken);
    const { body: refreshToken } = await spotifyApi.refreshAccessToken();
    return {
      ...token,
      accessToken: refreshToken.access_token,
      accessTokenExpire: Date.now() + refreshToken.expires_in * 1000, // 1h return from spotify
      refreshToken: refreshToken.refresh_token ?? token.refreshToken,
    };
  } catch (error) {
    console.log(error);
    return { ...token, error: "RefressTokenError" };
  }
};

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC_CLIENT,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      authorization: LOGIN_URL,
    }),
    // ...add more providers here
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: "/p-15/login",
  },
  callbacks: {
    async jwt({ token, account, user }) {
      if (account && user) {
        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          username: account.providerAccountId,
          accessTokenExpire: account.expire_at * 1000, // expire time
        };
      }
      //   return old token not expire
      if (Date.now() < token.accessTokenExpire) {
        return token;
      }
      return await refreshAccessToken(token);
    },
    async session({ session, token }) {
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      session.user.username = token.username;
      return session; //return back to session
    },
  },
});
