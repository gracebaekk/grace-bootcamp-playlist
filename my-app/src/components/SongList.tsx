import { Playlist, Song, SongListProps } from "@/types/playlist";
import Songs from "@/components/Songs";
import PlaylistContext from "@/context/PlaylistContext";
import { useContext } from "react";


const SongList = ({ playlist, isEditing }: SongListProps) => {
    const { deleteSong, addSong } = useContext(PlaylistContext)!;
    
    const handleDelete = (song: Song) => {
        deleteSong(playlist.id, song.id);
    };

    const handleAddSong = () => {
        const newSong: Song = {
            id: Date.now().toString(),
            title: "New Song",
            artist: "Unknown Artist",
            album: "Unknown Album",
            duration: "00:00",
            isEditing: false
        };
        addSong(playlist.id, newSong);
    };

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
                    <Songs key={index} song={song} index={index + 1} isEditing={isEditing} onDelete={() => handleDelete(song)} />
                ))}
            </div>
            {isEditing && (
                <div onClick={() => console.log("Add song clicked")} className="w-full border border-gray-600 rounded p-2 flex justify-center items-center cursor-pointer hover:border-green-400 transition">
                    <span className="text-green-500 text-2xl">+</span>
                </div>
            )}
            {isEditing && (
                <button onClick={() => console.log("Delete playlist clicked")} className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-4 mt-6 rounded w-full transition focus:outline-none focus:ring-0"> Delete Playlist </button>
            )}
        </div>
    );
};

export default SongList;
