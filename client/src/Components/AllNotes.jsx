import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../Context/auth";
import { FaClockRotateLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import formatDate from "../hooks/useFormatDate";

const AllNotes = ({ refresh }) => {
  const [notes, setNotes] = useState([]);
  const [auth] = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/note/get-all-notes",
          {
            headers: {
              Authorization: `${auth.token}`,
            },
          }
        );
        if (response.status === 201) {
          setNotes(response.data.notes);
        }
      } catch (error) {
        toast.error("Failed to fetch notes");
        console.error(error);
      }
    };
    fetchNotes();
  }, [refresh]);



  const handleNoteClick = (id) => {
    navigate(`/note/${id}`);
  };

  return (
    <>
      {notes.length === 0 ? (
        <>
          <div className="text-center text-3xl font-bold text-gray-400">
            Oops!!No notes found
          </div>
        </>
      ) : (
        <>
          <div>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-5 md:mx-6">
              {notes.map((note) => (
                <div
                  key={note._id}
                  className="border border-gray-800 p-4 rounded-lg bg-[#141414] relative transition-transform transform hover:scale-105 pb-6"
                  onClick={() => handleNoteClick(note._id)}
                >
                  <h3 className="text-lg font-bold ">{note.title}</h3>
                  <p className="text-gray-400 mb-2">
                    {note.description.length >= 15
                      ? note.description.split(" ").slice(0, 12).join(" ") +
                        ". . ."
                      : note.description}
                  </p>
                  <div className="absolute right-5 bottom-2">
                  </div>
                  <div className="absolute text-[12px] mt-1 border-t border-gray-800 mr-10 text-gray-600 flex items-center gap-1 bottom-2">
                    <FaClockRotateLeft />
                    {formatDate(note.createdAt)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AllNotes;
