import { Song } from "@/types/playlist";

export default function Songs({song, index}: { song: Song, index: number }) {
    return (
        <div className="grid grid-cols-12 hover:bg-gray-700 rounded p-2">
            <ul className="flex items-center text-white col-span-1 ml-4">{index}</ul>
            <div className="flex flex-col col-span-4">
                <ul className="text-white text-lg">{song.title}</ul>
                <ul className="text-gray-300">{song.artist}</ul>
            </div>
            <ul className="text-gray-300 text-lg col-span-5 text-right">{song.album}</ul>
            <ul className="text-gray-300 text-lg col-span-2 text-right">{song.duration}</ul>
        </div>
    );
}