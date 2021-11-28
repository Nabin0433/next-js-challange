import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  RssIcon,
  HeartIcon,
} from "@heroicons/react/solid";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { playlistIdState } from "../../atoms/playlistAtom";
import useSpotify from "../../hooks/spotify";
const Sidebar = () => {
  const spotifyApi = useSpotify();
  const { data: session, status } = useSession();
  const [playlists, setPlaylists] = useState([]);
  const [playlistId, setPlaylistId] = useRecoilState(playlistIdState);
  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then((data) => {
        setPlaylists(data.body.items);
      });
    }
  }, [session, spotifyApi]);
  return (
    <div className="text-gray-500 p-5 text-xs md:text-sm lg-text-md border-r border-gray-900 overflow-y-scroll h-screen w-[30rem] sm:max-w-[12rem] lg:max-w-[13rem] hidden md:inline-flex pb-36">
      <div className="space-y-4">
        <button className=" flex items-center space-x-2 hover:text-white transition duration-150">
          <HomeIcon className="w-5 h-5" />
          <p>Home</p>
        </button>
        <button className=" flex items-center space-x-2 hover:text-white transition duration-150">
          <SearchIcon className="w-5 h-5" />
          <p>Search</p>
        </button>
        <button className=" flex items-center space-x-2 hover:text-white transition duration-150">
          <LibraryIcon className="w-5 h-5" />
          <p>Your Library</p>
        </button>
        <hr className="border-t-to-[0.1px] border-gray-900" />
        <button className=" flex items-center space-x-2 hover:text-white transition duration-150">
          <HomeIcon className="w-5 h-5" />
          <p>Create Playlist</p>
        </button>
        <button className=" flex items-center space-x-2 hover:text-white transition duration-150">
          <HeartIcon className="w-5 h-5 text-blue-500" />
          <p>Liked Songs</p>
        </button>
        <button className=" flex items-center space-x-2 hover:text-white transition duration-150">
          <RssIcon className="w-5 h-5 text-green-500" />
          <p>Your episodes</p>
        </button>
        <hr className="border-t-to-[0.1px] border-gray-900" />
        {/* playlist */}
        {playlists.map((playlist) => (
          <p
            key={playlist.id}
            className=" cursor-pointer hover:text-white"
            onClick={() => setPlaylistId(playlist.id)}
          >
            {playlist.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
