export const BgOverLay = () => {
  return (
    <>
      <div
        className="absolute top-0 left-0 w-full h-[100svh] z-[-2] -mt-20"
        style={{
          backgroundImage: `
            radial-gradient(
              circle at 35% 2%,
              rgba(240, 210, 255, 0.405) 3%,   
              rgba(29, 144, 180, 0.40) 14%,        /* xanh đại dương đậm */
              rgba(240, 210, 255, 0.18) 36%, 
              rgba(10, 10, 15, 0.5) 44%,
              rgba(10, 10, 15, 0.3) 64%,
              rgba(10, 10, 15, 0.15) 74%,
              rgba(10, 10, 15, 0.13) 80%,
              rgba(10, 10, 15, 0.1) 100%
            ),
            linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.03),
              rgba(0, 0, 0, 0.5) 60%,
              black 100%
            )
          `,
          backgroundBlendMode: "screen, normal",
        }}
      ></div>
      <div
        className="absolute top-0 left-0 w-full h-[100svh] opacity-0 z-[-3] pointer-events-none"
        style={{
          background: `
            radial-gradient(
              circle at 35% 5%,
              rgba(255, 255, 255, 0.15) 0%,
              rgba(255, 255, 255, 0.05) 10%,
              rgba(255, 255, 255, 0.02) 20%,
              transparent 40%
            )
          `,
          mixBlendMode: "screen", // để ánh sáng hòa quyện tự nhiên
        }}
      ></div>

      {/* Overlay đen mờ giống modal */}
      <div
        className="absolute top-0 left-0 w-full h-[100svh] z-[-1] pointer-events-none backdrop-blur-sm"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.35)", // màu nền mờ nhẹ
          backdropFilter: "blur(12px)", // làm mờ nền phía sau
          WebkitBackdropFilter: "blur(12px)", // Safari hỗ trợ riêng
        }}
      ></div>
    </>
  );
};
