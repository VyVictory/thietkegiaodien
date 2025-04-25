export const Play = ({ open }) => {
  if (!open) return;
  return (
    <>
      <div className="w-screen h-16 bottom-0 left-0 fixed z-[90] text-white bg-stone-900">
        isPlay, setIsPlay{" "}
      </div>
    </>
  );
};
