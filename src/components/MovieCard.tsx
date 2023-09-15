import React from "react";

interface MovieCardProps {
  title: string;
  image: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, image }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 transform transition duration-500 ease-in-out hover:scale-105">
      <img
        className="w-full h-auto object-cover"
        src={image}
        alt={title}
        style={{ height: "300px" }}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
      </div>
    </div>
  );
};

export default MovieCard;
