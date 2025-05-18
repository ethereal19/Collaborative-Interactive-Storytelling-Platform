import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    axios.get('/api/stories')
      .then(response => setStories(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Explore Stories</h1>
      <ul className="space-y-2">
        {stories.map(story => (
          <li key={story.id} className="p-4 border rounded">
            <Link to={`/story/${story.id}`} className="text-xl text-blue-600">{story.title}</Link>
            <p className="text-gray-700">{story.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
