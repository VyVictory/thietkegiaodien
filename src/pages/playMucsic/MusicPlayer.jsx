import React, { useEffect, useRef } from 'react';

const MusicPlayer = ({ musicData, paused, setPosition, setDuration }) => {
  const audioRef = useRef(null);

  // Tự động tải và phát nhạc khi musicData thay đổi
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !musicData) return;

    audio.pause(); // Dừng bài cũ
    audio.load();  // Tải bài mới

    if (!paused) {
      audio.play().catch(err => {
        console.warn("Không thể phát nhạc:", err);
      });
    }
  }, [musicData]);

  // Điều khiển phát/tạm dừng khi paused thay đổi
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

  // Cập nhật thời gian phát
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
};

export default MusicPlayer;
