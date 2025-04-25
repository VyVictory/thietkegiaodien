import { Play, Shuffle } from "lucide-react"
import PlayBack from "../components/music/PlayBack"
import { useState } from "react"
export default function DetailSinger() {
    const [subscribe, setSubscribe] = useState(false)
    const handleSubscribe = () => {
        setSubscribe(!subscribe)
    }
    console.log(subscribe)
    return (
        <div className=" bg-[#020202] text-white w-full">
            {/* Hero Section */}
            <div className="relative w-full h-[300px] md:h-[400px]">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#020202] z-10 bg-cover bg-center bg-no-repeat brightness-50"
                    style={{ backgroundImage: "url('https://static.wixstatic.com/media/8796a2_0351b51be6f047d8885d9fba3327f781~mv2.jpg/v1/fill/w_980,h_551,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8796a2_0351b51be6f047d8885d9fba3327f781~mv2.jpg')" }}
                >
                </div>
                <div className="relative z-20 container mx-auto pt-32 px-24 md:pt-48">
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">Datmaniac</h1>
                    <p className="text-sm text-[#d4d4d8] max-w-2xl mb-2">
                        Trần Sơn Đạt, được biết đến với nghệ danh Datmaniac, là một nam rapper người Việt Nam. Anh được mệnh danh là
                        "siêu tốc độ Rap Việt" của Việt Nam với khả năng fast flow của mình, qua ca khúc "C...
                    </p>
                    <button className="text-[#f31260] text-sm hover:underline">xem thêm</button>

                    <div className="flex gap-3 mt-6">
                        <button className="flex items-center gap-2 bg-[#D4D4D8] hover:bg-white/20 text-black px-4 py-2 rounded-full">
                            <Shuffle className="w-4 h-4" />
                            <span className="text-sm">Trộn bài</span>
                        </button>
                        <button className="flex items-center gap-2 bg-[#D4D4D8] hover:bg-white/20 text-black px-4 py-2 rounded-full">
                            <Play className="w-4 h-4 fill-white" />
                            <span className="text-sm">Phát tất cả</span>
                        </button>
                        {subscribe ? (
                            <button onClick={handleSubscribe} className="flex items-center gap-2 border-[1px] border-white opacity-60 bg-gray-950 text-white px-4 py-2 rounded-full">
                                <span className="text-sm">Đã đăng ký</span>
                                <span className="text-xs opacity-80">59,7 N</span>
                            </button>
                        ) : (
                            <button onClick={handleSubscribe} className="flex items-center gap-2 bg-[#f31260] hover:bg-[#f31260]/80 text-white px-4 py-2 rounded-full">
                                <span className="text-sm">Đăng ký</span>
                                <span className="text-xs opacity-80">59,6 N</span>
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Songs Section */}
            <div className="container mx-auto px-24 py-8">
                <h2 className="text-xl font-bold mb-4">Bài hát</h2>
                <div className="space-y-2">
                    {[1, 2, 3, 4].map((index) => (
                        <div key={index} className="flex items-center justify-between hover:bg-white/5 rounded-md pr-3">
                            <div className="flex items-center gap-3">
                                <img
                                    src="https://i.ytimg.com/vi/OIhpb7XFw78/maxresdefault.jpg"
                                    alt="Song cover"
                                    className="object-cover rounded-sm h-16 w-16"
                                />
                                <span className="font-medium">Souls</span>
                            </div>
                            <div className="flex items-center gap-6">
                                <span className="text-sm text-[#aaaaaa]">Datmaniac</span>
                                <span className="text-sm text-[#aaaaaa] hidden sm:block">9,4Tr lượt phát</span>
                                <span className="text-sm text-[#aaaaaa]">Sao dù dễ bao phủ</span>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="mt-4 text-sm border border-[#aaaaaa] text-[#aaaaaa] px-4 py-1.5 rounded-full hover:bg-white/10">
                    Hiển thị tất cả
                </button>
            </div>

            {/* Albums Section */}
            <div className="container mx-auto px-24 py-8">
                <PlayBack title={"Albums"} />
            </div>
        </div>
    )
}
