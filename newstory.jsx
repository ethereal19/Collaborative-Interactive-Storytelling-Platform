import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NewStory = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const createStory = () => {
    axios.post('/api/stories', { title, description })
      .then(response => navigate(`/story/${response.data.id}`))
      .catch(error => console.error(error));
  };

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Start a New Story</h1>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Story Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <textarea
          placeholder="Story Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button onClick={createStory} className="bg-blue-600 text-white px-4 py-2 rounded">Create Story</button>
      </div>
    </main>
  );
};

export default NewStory;
