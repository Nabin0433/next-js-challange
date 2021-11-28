import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { currentTrackState } from "../atoms/songAtom";
import useSpotify from "./spotify";

const useSongInfo = () => {
  const spotifyApi = useSpotify();
  const [currentTrackId, setCurrentTrackId] = useRecoilState(currentTrackState);
  const [songinfo, setSongInfo] = useState();
  useEffect(() => {
    const fetchSonginfo = async () => {
      if (currentTrackId) {
        const trackInfo = await fetch(
          `https://api.spotify.com/v1/tracks/${currentTrackId}`,
          {
            headers: {
              authorization: `Bearer ${spotifyApi.getAccessToken()}`,
            },
          }
        ).then((response) => response.json());
        setSongInfo(trackInfo);
      }
    };
    fetchSonginfo();
  }, [spotifyApi, currentTrackId]);
  return songinfo;
};

export default useSongInfo;
