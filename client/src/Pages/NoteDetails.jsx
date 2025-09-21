import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../Context/auth";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaClockRotateLeft } from "react-icons/fa6";
import formatDate from "../hooks/useFormatDate";
import { Helmet } from 'react-helmet';

const NoteDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [auth] = useAuth();
  const [note, setNote] = useState({ title: "", description: "" });

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/v1/note/getNote/${id}`,
          {
            headers: {
              Authorization: `${auth.token}`,
            },
          }
        );
        if (response.status === 200) {
          setNote(response.data.note);
        }
      } catch (error) {
        toast.error("Failed to fetch note");
        console.error(error);
      }
    };
    fetchNote();
  }, [id, auth.token]);

  const updateNote = async () => {
    try {
      const response = await axios.put(
        `http://localhost:8080/api/v1/note/update-note/${id}`,
        note,
        {
          headers: {
            Authorization: `${auth.token}`,
          },
        }
      );
      if (response.status === 200) {
        toast.success("Note updated successfully");
        navigate("/dashboard");
      }
    } catch (error) {
      toast.error("Failed to update note");
      console.error(error);
    }
  };

  const deleteNote = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/v1/note/delete/${id}`,
        {
          headers: {
            Authorization: `${auth.token}`,
          },
        }
      );
      if (response.status === 200) {
        toast.success("Note deleted successfully");
        navigate("/dashboard");
      }
    } catch (error) {
      toast.error("Failed to delete note");
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container mx-auto p-4">
       <Helmet>
       <title>NimbusNotes | Note </title>
      </Helmet>

      <div className="p-4 rounded-lg ">
        <input
          type="text"
          name="title"
          value={note.title}
          maxLength={25}
          onChange={handleChange}
          placeholder="Title"
          className="w-full mb-4 p-2 bg-transparent text-white text-3xl font-bold placeholder:text-gray-600 outline-none border-b border-gray-800"
        />
        <textarea
          name="description"
          value={note.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full p-2 bg-transparent outline-none placeholder:text-gray-600 text-gray-300 scrollbar-none"
          rows="10"
        ></textarea>

        <div className="flex gap-5">
          <button
            onClick={() => deleteNote(note._id)}
            title="Delete"
            className="transition-transform transform hover:scale-125 hover:text-red-600"
          >
            <RiDeleteBin6Line size={21} />
          </button>
          <button
            title="Edit"
            onClick={updateNote}
            className=" transition-transform transform hover:scale-125 hover:text-blue-400 "
          >
            <FiEdit size={21} />
          </button>

          <span className="text-gray-700"> |</span>
          <span className="text-gray-400">{note.description.length}</span>
          <span className=" text-[12px] mt-1  mr-10 text-gray-600 flex items-center gap-1 bottom-2">
            <FaClockRotateLeft />
            {formatDate(note.createdAt)}{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NoteDetails;
