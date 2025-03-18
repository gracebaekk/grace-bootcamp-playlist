import {Playlist} from "@/types/playlist";
import Song from "@/components/Song";

export default function SongList({playlist}: { playlist: Playlist }) {
    return (
        <div className="flex flex-col gap-5">
            <hr className="border-gray-600"></hr>
            <h2 className="text-white font-bold text-xl">Songs</h2>
            <div className="flex flex-row text-gray-400 font-lg font-bold gap-10">
                <ul>#</ul>
                <ul>TITLE</ul>
                <ul>ALBUM</ul>
                <ul>DURATION</ul>
            </div>
            <hr className="border-gray-600"></hr>
            <div>
                {playlist.songs.map((song, index) => (
                    <Song key={song.id} song={song} index={index} />
                    ))}
            </div>
        </div> 
    );
}