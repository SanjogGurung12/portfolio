"use client";
import Image from "next/image";
import { useState } from "react";

export default function VideoGallery() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const videos = [
    { id: 1, thumb: "/figma.jpg", text:"Figma design to web",  src: "/figma.mp4" },
    { id: 2, thumb: "/game.jpg", text: "Game Hub", src: "/gamehub.mp4" },
    { id: 3, thumb: "/tour.png", text: "Tour and travel site", src: "/tourtravel.mp4" },
  ];

  return (
    <div className="p-16">

       <h1 className="text-4xl font-bold pb-6 underline underline-offset-8 decoration-5 decoration-gray-500">Portfolio</h1>

       <div className="flex flex-wrap flex-col sm:flex-row items-center gap-8 sm:justify-between max-w-full">
        {videos.map((video) => (
          <div
            key={video.id}
            className="mt-4 cursor-pointer bg-[conic-gradient(blue_0deg_40deg,_transparent_90deg_180deg,_red_180deg_220deg,_transparent_270deg_360deg)] "
            onClick={() => setActiveVideo(video.src)}
          >
            <div className="relative w-[90vw] max-w-[300px] h-[225px] ">
              <Image
                src={video.thumb}
                alt="video"
                fill
                className="object-cover p-1"
              />
          
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black rounded-2xl p-4 text-2xl px-6">▶</div>
              </div>
            </div>
          
            <p className="bg-[#0a0a0a] text-center p-2 text-xl font-bold">{video.text}</p>
          </div>
        ))}
       </div>

      {/* Modal */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          
          {/* Close button */}
          <button
            className="absolute top-5 right-5 text-white text-3xl"
            onClick={() => setActiveVideo(null)}
          >
            ✕
          </button>

          {/* Video Player */}
          <video
            src={activeVideo}
            controls
            autoPlay
            className="w-[80%] max-w-[800px] rounded-lg"
          />
        </div>
      )}
    </div>
  );
}