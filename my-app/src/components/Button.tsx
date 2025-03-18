import Link from "next/link";

export default function Button() {
    return (
        <div className="flex flex-1 justify-center items-center">
            <Link href="/playlists" className="bg-green-500 rounded-sm text-white p-2 w-40 text-center font-bold text-lg">Go to playlists</Link>
        </div>
    );
}
    