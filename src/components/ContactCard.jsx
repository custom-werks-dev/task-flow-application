import React, { useState } from "react";
import { UpdateContact } from "@/features/UpdateContact";
import { deleteContact } from "@/features/contactSlice";
import { Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import YouTubeEmbed from "./YoutubeEmbed";
import ytlogo from "../../public/youtube.png";

export function ContactCard({ contact }) {
  const dispatch = useDispatch();
  const [showEmbed, setShowEmbed] = useState(false);

  return (
    <div className="flex flex-col md:flex-row justify-between items-center py-4 bg-gray-100 my-3 md:px-8 md:rounded-[80px] gap-3 rounded-lg px-3  shadow-md">
      <a
        className="md:w-[150px] text-left cursor-pointer hover:underline text-blue-600 underline"
        href={contact.hyperLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        {contact.name}
      </a>
      <button className="md:w-[full] px-4">
        {contact.embedLink?.length > 0 ? (
          <img
            src={ytlogo}
            alt="yt-link"
            className="h-6 cursor-pointer "
            onClick={() => setShowEmbed(true)}
          />
        ) : (
          "No YT Link!"
        )}
      </button>
      <div className="flex gap-3 items-center">
        <Trash2
          size={20}
          onClick={() => dispatch(deleteContact(contact.id))}
          className="cursor-pointer text-red-500"
        />
        <UpdateContact contact={contact} />
      </div>

      {/* Render YouTubeEmbed */}
      {showEmbed && (
        <YouTubeEmbed
          videoId={getYouTubeVideoId(contact.embedLink)}
          onClose={() => setShowEmbed(false)}
        />
      )}
    </div>
  );
}

// Helper function to extract the YouTube video ID
function getYouTubeVideoId(url) {
  const match = url.match(
    /(?:https?:\/\/)?(?:www\.)?youtu(?:\.be\/|be\.com\/watch\?v=)([\w-]+)/
  );
  return match ? match[1] : null;
}
