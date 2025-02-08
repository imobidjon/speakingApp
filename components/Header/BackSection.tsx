import { useRouter } from "next/router";
import { FC } from "react";
import { BiChevronLeft, BiHeart } from "react-icons/bi";
import { MdMic } from "react-icons/md";

const BackSection: FC = () => {
    const router = useRouter();


    return (
        <div className="flex space-x-2 items-center">
            <div
                onClick={() => router.back()}
                className="flex items-center justify-center w-[47px] cursor-pointer h-[47px] bg-white dark:bg-[#2c2c2e] text-blue-500 rounded-full shadow-md hover:shadow-lg transition-shadow"
            >
                <BiChevronLeft size={24} />
            </div>
            <div
                className="flex items-center justify-center w-[47px] h-[47px] bg-white dark:bg-[#2c2c2e] text-blue-500 rounded-full shadow-md hover:shadow-lg transition-shadow"
            >
                <BiHeart size={24} />
            </div>
            <div
                className="flex items-center justify-center w-[47px] h-[47px] bg-white dark:bg-[#2c2c2e] text-blue-500 rounded-full shadow-md hover:shadow-lg transition-shadow"
            >
                <MdMic size={24} />
            </div>
        </div>
    );
};

export default BackSection;
