import React, { useEffect, useState } from 'react'
import UserSection from './UserSection'
import BackSection from './BackSection'

export default function Header({ isBack }: { isBack?: boolean }) {
    const [isScrolled, setIsScrolled] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`flex justify-between items-center py-3 sticky top-0 w-full rounded-b-[20px]  ${isScrolled && 'bg-transparent backdrop-blur-md'}`}>
            <div>
                {
                    isBack && (
                        <BackSection />
                    )
                }
            </div>
            <div>
                <UserSection />
            </div>
        </div>
    )
}
