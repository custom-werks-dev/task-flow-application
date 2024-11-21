import React from "react";

const YouTubeEmbed = ({ videoId, onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm cursor-pointer"
      onClick={onClose}
    >
      <div className="relative bg-black rounded-lg p-2 shadow-lg max-w-4xl w-full aspect-w-16 h-[60%]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-xl bg-red-500 rounded-[50%] h-8 w-8  hover:bg-red-600 "
        >
          &times;
        </button>
        {/* YouTube Video */}
        <iframe
          className="w-full h-full rounded-md"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default YouTubeEmbed;
