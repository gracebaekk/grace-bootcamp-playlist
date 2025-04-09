// Static 
import Card from "@/components/Card"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useState, useContext } from 'react'
import PlaylistContext from "@/context/PlaylistContext"
import AddPlaylistForm from "@/components/AddPlaylistForm"

export default function Playlists() {
    const [showAddForm, setShowAddForm] = useState(false);
    const { playlists } = useContext(PlaylistContext)!;

    return (
        <div className="flex flex-col min-h-screen min-w-screen">
            <Header />
            <main className="flex flex-col flex-grow justify-center items-center p-4">
                <div className="p-4">
                    <h1 className="text-green-500 text-2xl font-bold mb-4">Playlists</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {playlists.map((playlist) => (
                            <Card key={playlist.id} playlist={playlist}></Card>
                        ))}
                        <div onClick={() => setShowAddForm(true)} className="border border-gray-400 rounded-md p-5 h-36 w-70 flex justify-center items-center cursor-pointer hover:background-gray-400 transition">
                            <span className="text-green-500 text-4xl">+</span>
                        </div>
                    </div>
                    
                </div>
                    {showAddForm && (
                        <div className="bg-opacity-5 fixed inset-0 flex justify-center items-center z-50">
                            <div className="border border-black rounded-md">
                                <AddPlaylistForm onClose={() => setShowAddForm(false)} />
                            </div>
                        </div>
                    )}
            </main>
            <Footer />
        </div>
    );
};