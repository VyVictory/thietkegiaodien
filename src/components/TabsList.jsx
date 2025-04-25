import { useState } from 'react';
import SimpleList from './playlist/SimpleList';

const TabsList = () => {
    const [activeTab, setActiveTab] = useState('next'); // 'next' | 'lyrics' | 'related'

    const tabs = [
        { key: 'next', label: 'Tiếp theo' },
        { key: 'lyrics', label: 'Lời nhạc' },
        { key: 'related', label: 'Liên quan' },
    ];

    return (
        <div className="flex flex-col max-h-full">
            <div className="px-4 flex justify-between text-center flex-shrink-0 items-center w-full">
                {tabs.map((tab) => (
                    <span
                        key={tab.key}
                        className={`py-3 px-10 cursor-pointer border-b-[1px] ${activeTab === tab.key ? 'border-white text-white' : 'border-gray-600 text-gray-400'} text-center'
                            }`}
                        onClick={() => setActiveTab(tab.key)}
                    >
                        {tab.label}
                    </span>
                ))}
            </div>

            <div className="overflow-y-auto flex-1 px-2 max-h-[70%]">
                {activeTab === 'next' && (
                    <div className="pt-5">
                        <div className='px-4 text-sm'>Đang phát từ</div>
                        <div className='px-4 font-semibold text-xl'>Danh sách nhạc yêu thích</div>
                        <div className='grid gap-3 mt-5'>
                            {/* SimpleList lặp nhiều lần ở đây */}
                            <SimpleList />
                            <SimpleList />
                            <SimpleList />
                            <SimpleList />
                            <SimpleList />
                            <SimpleList />
                            <SimpleList />
                            <SimpleList />
                            <SimpleList />
                            <SimpleList />
                            <SimpleList />
                            <SimpleList />
                            <SimpleList />
                            <SimpleList />
                            <SimpleList />
                            <SimpleList />

                        </div>
                    </div>
                )}
                {activeTab === 'lyrics' && (
                    <div className="text-white p-4 whitespace-pre-line ">
                        <pre className="whitespace-pre-wrap max-w-sm">
                            {/* lyrics ở đây */}
                            {`I'm only one call away
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
When you need your boy, pick up the phone and do the math, yeah

I'm only one call away (I'm only one call away)
I'll be there to save the day (Pick up the line, I got you)

Superman got nothing on me-e
I'm only one, I'm only one call away
I'll be there to save the day
Superman got nothing on me-e
I'm only one call away
I'm only one call away`}
                        </pre>
                    </div>
                )}
                {activeTab === 'related' && (
                    <div className="text-white p-4">
                        <p>Danh sách liên quan sẽ hiển thị ở đây.</p>
                    </div>
                )}
            </div>
        </div>

    );
};

export default TabsList;
