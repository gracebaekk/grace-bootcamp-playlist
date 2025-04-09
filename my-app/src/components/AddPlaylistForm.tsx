import { useState, useContext } from 'react';
import PlaylistContext from '../context/PlaylistContext';
import { PlaylistContextType } from '../types/playlist';

const AddPlaylistForm = ({ onClose }: { onClose: () => void }) => {
  const { addPlaylist } = useContext(PlaylistContext) as PlaylistContextType;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addPlaylist(title, description);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 bg-gray-800 p-4 rounded">
      <h2 className="text-green-400 text-xl mb-2 text-bold">Add New Playlist</h2>
      <input
        className="w-full p-2 mb-2 bg-gray-700 text-white rounded"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="w-full p-2 mb-2 bg-gray-700 text-white rounded"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div className="flex gap-2">
        <button type="submit" className="bg-green-500 px-4 py-2 rounded text-white">Create</button>
        <button type="button" onClick={onClose} className="bg-red-500 px-4 py-2 rounded text-white">Cancel</button>
      </div>
    </form>
  );
};

export default AddPlaylistForm;
