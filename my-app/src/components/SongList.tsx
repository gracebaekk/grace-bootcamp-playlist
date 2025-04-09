import {Playlist} from "@/types/playlist";
import Songs from "@/components/Songs";

export default function SongList({playlist}: { playlist: Playlist }) {
    return (
        <div className="flex flex-col gap-5">
            <hr className="border-gray-600"></hr>
            <h2 className="text-white font-bold text-xl">Songs</h2>
            <div className="grid grid-cols-12 text-gray-400 font-bold">
                <ul className="col-span-1 ml-4">#</ul>
                <ul className="col-span-4">TITLE</ul>
                <ul className="col-span-5 text-right">ALBUM</ul>
                <ul className="col-span-2 text-right">DURATION</ul>
            </div>
            <hr className="border-gray-600"></hr>
            <div className="flex flex-col gap-5">
                {playlist.songs.map((song, index) => (
                    <Songs key={index} song={song} index={index + 1} />
                    ))}
            </div>
        </div> 
    );
}