import { useRecoilState } from "recoil";
import { currentTrackState, isPlayingState } from "../../atoms/songAtom";
import useSpotify from "../../hooks/spotify";
import { millisToMinutesAndSecond } from "../../lib/time";

const Song = ({ track, order }) => {
  const spotifyApi = useSpotify();
  const [currentTrackId, setCurrentTrackId] = useRecoilState(currentTrackState);
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);

  const playSong = () => {
    setCurrentTrackId(track.track.id);
    setIsPlaying(true);
    // spotifyApi
    //   .play({
    //     uris: [track.track.uri],
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  return (
    <div
      className="grid grid-cols-2 text-gray-500 py-4 px-5 hover:bg-gray-900 rounded-lg transition duration-100 cursor-pointer"
      onClick={playSong}
    >
      <div className="flex items-center space-x-4">
        <p>{order + 1}</p>
        <img
          className="h-10 w-10 rounded-lg"
          src={track.track.album.images[0].url}
          alt={track.track.name}
        />
        <div>
          <p className="w-36 lg:w-44 truncate text-whites ">
            {track.track.name}
          </p>
          <p className="w-40">{track.track.artists[0].name}</p>
        </div>
      </div>
      <div className="flex items-center justify-between ml-auto md:ml-0">
        <p className="hidden w-40 md:inline">{track.track.album.name}</p>
        <p>{millisToMinutesAndSecond(track.track.duration_ms)}</p>
      </div>
    </div>
  );
};

export default Song;
