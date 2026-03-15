import React from 'react';

type BackgroundVideoProps = {
  src: string;
  poster?: string;
  position?: 'fixed' | 'absolute';
};

export function BackgroundVideo({ src, poster, position = 'fixed' }: BackgroundVideoProps) {
  return (
    <div className={`${position} inset-0 -z-10 overflow-hidden`}>
      <video
        className="w-full h-full object-cover"
        src={src}
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
      />
      {/* Optional dark overlay to ensure text legibility */}
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}
