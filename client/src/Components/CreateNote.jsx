import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa";
import axios from 'axios';
import toast from 'react-hot-toast';
import { useAuth } from "../Context/auth";

const CreateNote = ({ triggerRefresh }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [auth] = useAuth();

  const handleAddNote = async () => {
    if (title && description) {
      try {
        const response = await axios.post('http://localhost:8080/api/v1/note/create-note', { title, description }, {
          headers: {
            Authorization: `${auth.token}`,
          }
        });
        if (response.status === 201) {
          toast.success('Note created successfully!');
          setTitle("");
          setDescription("");
          triggerRefresh();
        }
      } catch (error) {
        toast.error('Failed to create note');
        console.error(error);
      }
    } else {
      toast.error('Title and Description are required');
    }
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-4 border-b border-gray-800 pb-3">Create a Note</h2>
      <div className="space-y-4 border border-gray-800 p-8 rounded-lg md:mx-20">
        <input
          type="text"
          className="w-full p-2 bg-[#141414] rounded"
          placeholder="Title"
          maxLength={25}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="w-full p-2 bg-[#141414] rounded"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          onClick={handleAddNote}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded"
        >
         
          <span className='font-bold'>Add Note</span> <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default CreateNote;
