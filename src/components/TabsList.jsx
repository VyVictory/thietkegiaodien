import { useEffect, useRef, useState } from "react";

import SimpleList from "./playlist/SimpleList";
import { useLayout } from "../context/LayoutProvider";
const TabsList = () => {
  const [activeTab, setActiveTab] = useState("lyrics");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const currentWordRef = useRef(null);
  const { isPlay, musicData, musicDetail, position, duration } = useLayout(); 
  const lyrics = musicData?.lyrics || lyricsDefault;
  const lines = lyrics.split("\n"); // giữ xuống dòng
  const wordsPerLine = lines.map((line) => line.split(/\s+/));
  const totalWords = wordsPerLine.flat().length;
  const durationd = duration || 300; // Giả sử bài hát dài 300 giây

  useEffect(() => {
    if (activeTab !== "lyrics" || !isPlay || !position || durationd === 0)
      return;
    if (musicDetail?.artworkUrl100 !== musicData?.artworkUrl100) return;
    const index = Math.floor((position / durationd) * totalWords);
    setCurrentWordIndex(index < totalWords ? index : totalWords - 1);
  }, [position, activeTab, isPlay, totalWords]);

  const tabs = [
    { key: "next", label: "Tiếp theo" },
    { key: "lyrics", label: "Lời nhạc" },
    { key: "related", label: "Liên quan" },
  ];
  //   useEffect(() => {
  //     if (currentWordRef.current) {
  //       currentWordRef.current.scrollIntoView({
  //         behavior: "smooth",
  //         block: "center",
  //       });
  //     }
  //   }, [currentWordIndex]);

  return (
    <div className="flex flex-col h-full md:max-h-full">
      <div className="px-2 md:px-4 flex justify-between text-center flex-shrink-0 items-center w-full">
        {tabs.map((tab) => (
          <span
            key={tab.key}
            className={`py-3 px-3 md:px-10 cursor-pointer border-b-[1px] ${
              activeTab === tab.key
                ? "border-white text-white"
                : "border-gray-600 text-gray-400"
            }`}
            onClick={() => {
              setActiveTab(tab.key);
              setCurrentWordIndex(0); // reset nếu đổi tab
            }}
          >
            {tab.label}
          </span>
        ))}
      </div>

      <div className="overflow-y-auto flex-1 px-2 max-h-[400px] md:max-h-[70%]">
        {activeTab === "next" && (
          <div className="pt-5">
            <div className="px-4 text-sm">Đang phát từ</div>
            <div className="px-4 font-semibold text-xl">Danh sách nhạc</div>
            <div className="grid gap-3 mt-5">
              {Array(7)
                .fill(0)
                .map((_, i) => (
                  <SimpleList key={i} />
                ))}
            </div>
          </div>
        )}

        {activeTab === "lyrics" && (
          <div className="text-white p-4 leading-loose text-lg">
            {wordsPerLine.map((line, lineIndex) => {
              return (
                <div key={lineIndex}>
                  {line.map((word, wordIndex) => {
                    const flatIndex =
                      wordsPerLine
                        .slice(0, lineIndex)
                        .reduce((acc, l) => acc + l.length, 0) + wordIndex;
                    // là vậy nè : chuyển bài nhạc thành mảng 2 chiều thành 1 chiều:["I'm", "only", "one", "call", "away", "I'll", "be", "there", ...]
                    // rồi map ra có index, nếu index <hơn thì màu xám , bằng vị trí hiện tại thì màu xanh là từ đang bôi
                    const isCurrent = flatIndex === currentWordIndex;
                    const isPast = flatIndex < currentWordIndex;

                    return (
                      <span
                        key={wordIndex}
                        ref={isCurrent ? currentWordRef : null} // gán ref cho từ đang được  để nó cuộn tới ,,đâ
                        className={`mr-1 ${
                          isCurrent
                            ? "text-green-400 font-bold"
                            : isPast
                              ? "text-gray-400"
                              : ""
                        }`}
                      >
                        {word}
                      </span>
                    );
                  })}
                </div>
              );
            })}
          </div>
        )}

        {activeTab === "related" && (
          <div className="text-white p-4">
            <p>Danh sách liên quan sẽ hiển thị ở đây.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabsList;

const lyricsDefault = `I'm only one call away
I'll be there to save the day
Superman got nothing on me-e
I'm only one call away

Call me, baby, if you need a friend
I just wanna give you love
C'mon, c'mon, c'mon
Reaching out to you, so take a chance
No matter where you go
You know you're not alone

I'm only one call away
I'll be there to save the day
Superman got nothing on me-e
I'm only one call away

Come along with me and don't be scared
I just wanna set you free
C'mon, c'mon, c'mon
You and me can make it anywhere
For now, we can stay here for a while
Aye 'cause you know, I just wanna see you smile
No matter where you go
You know you're not alone

I'm only one call away
I'll be there to save the day
Superman got nothing on me-e
I'm only one call away

Uh, bling my hotline, I'm only one call away
You wanna ball, we only one mall away
Aye, there, I see you again like Charlie say
Again and again, that's always bae
Back when I was poor, I only had a heart to break
We was splittin' meals, two straws and a chocolate shake
You had my back and that's true to facts
When you need your boy, 
pick up the phone and do the math, yeah

I'm only one call away (I'm only one call away)
I'll be there to save the day (Pick up the line, I got you)

Superman got nothing on me-e
I'm only one, I'm only one call away
I'll be there to save the day
Superman got nothing on me-e
I'm only one call away
I'm only one call away

I'm only one call away
I'll be there to save the day
Superman got nothing on me-e
I'm only one call away

Call me, baby, if you need a friend
I just wanna give you love
C'mon, c'mon, c'mon
Reaching out to you, so take a chance 
`;
