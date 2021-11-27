import { signIn, getProviders } from "next-auth/react";
const Login = ({ providers }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-black min-h-screen w-full">
      <img
        className="w-52 mb-5"
        src="https://links.papareact.com/9xl"
        alt="spotify-clone-nabin"
      />
      {Object.values(providers).map((provider) => (
        <div>
          <button
            className="bg-[#18D860] text-white p-5 rounded-full"
            onClick={() => signIn(provider.id, { callbackUrl: "/p-15/home" })}
          >
            Login with{provider.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
