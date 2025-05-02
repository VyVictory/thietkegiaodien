import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';

const MusicPlayer = forwardRef(({ musicData, paused, setPosition, setDuration }, ref) => {
  const audioRef = useRef(null);

  // Cho phép cha truy cập vào audioRef
  useImperativeHandle(ref, () => audioRef.current);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !musicData) return;

    audio.pause();
    audio.load();

    if (!paused) {
      audio.play().catch(err => {
        console.warn("Không thể phát nhạc:", err);
      });
    }
  }, [musicData]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (paused) {
      audio.pause();
    } else {
      audio.play().catch(err => {
        console.warn("Không thể phát nhạc:", err);
      });
    }
  }, [paused]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      setPosition(Math.floor(audio.currentTime));
    };

    const handleLoadedMetadata = () => {
      if (setDuration) {
        setDuration(Math.floor(audio.duration));
      }
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, [setPosition, setDuration]);

  return (
    <audio ref={audioRef} controls style={{ display: "none" }}>
      <source src={musicData?.audioUrl || musicData?.previewUrl} type="audio/mpeg" />
      Trình duyệt không hỗ trợ phát âm thanh.
    </audio>
  );
});

export default MusicPlayer;
