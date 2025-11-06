import React from 'react';

type BackgroundVideoProps = {
  src: string;
  poster?: string;
  position?: 'fixed' | 'absolute';
};

export function BackgroundVideo({ src, poster, position = 'fixed' }: BackgroundVideoProps) {
  return (
    <div className={`${position} inset-0 -z-10 md:flex md:items-center md:justify-center`}>
      <video
        className="w-full h-full object-fill md:h-auto md:w-full md:max-w-[800px] md:object-contain md:rounded-[10px] md:shadow-[0_4px_12px_rgba(0,0,0,0.3)] md:block md:mx-auto"
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