import { truncateText } from '@/helpers/textUtils';
import useColorMode from '@/hooks/useTheme';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'


interface TelegramUser {
    id: number;
    first_name: string;
    last_name?: string;
}

export default function UserSection() {
    const [colorMode, setColorMode] = useColorMode();
    const [TgUser, setTgUser] = useState<TelegramUser | null>(null);


    const toggleTheme = () => {
        setColorMode(colorMode === "light" ? "dark" : "light");
    };

    useEffect(() => {
        if (typeof window !== "undefined" && window.Telegram?.WebApp?.initDataUnsafe?.user) {
            const { id, first_name, last_name } = window.Telegram.WebApp.initDataUnsafe.user;
            setTgUser({ id, first_name, last_name });
        }
    }, []);

    return (
        <div className='min-w-[150px] bg-white dark:bg-[#2c2c2e] flex rounded-full items-center shadow-md cursor-pointer gap-1' onClick={toggleTheme}>
            <div>
                <Image width={45} height={45} src={'/user.png'} alt='UserProfile' />
            </div>
            <div className='leading-3'>
                <h6 className='text-[12px] font-bold'>{truncateText(`${TgUser?.first_name || "Azizbek"} ${TgUser?.last_name || "Abdurahmonov"}`, 13)}</h6>
                <span className='text-[10px]'>{TgUser?.id || 5033023657}</span>
            </div>
        </div>
    )
}
