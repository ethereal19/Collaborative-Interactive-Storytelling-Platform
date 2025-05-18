import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Story = () => {
  const { id } = useParams();
  const [story, setStory] = useState(null);

  useEffect(() => {
    axios.get(`/api/stories/${id}`)
      .then(response => setStory(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!story) return <p>Loading...</p>;

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{story.title}</h1>
      <div className="space-y-4">
        {story.content.map((segment, index) => (
          <p key={index} className="text-gray-800">{segment}</p>
        ))}
      </div>
    </main>
  );
};

export default Story;
