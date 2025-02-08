import React, { useState } from 'react'
import { RiMicAiLine } from "react-icons/ri";
import { LuNotebook } from "react-icons/lu";
import { MdOutlineTranslate } from "react-icons/md";
import { LuFilePenLine } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";
import WarningModal from '../Modal/WarningModal';
import Link from 'next/link';


const SectionsData = [
    {
        icon: <RiMicAiLine />,
        title: 'Speaking Assistant',
        href: '/speaking'
    },
    {
        icon: <LuNotebook />,
        title: 'Ielts materials',
    },
    {
        icon: <MdOutlineTranslate />,
        title: 'Translator',
    },
    {
        icon: <LuFilePenLine />,
        title: 'Ielts Essay checker',
    }
]

const Sections = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const openModal = () => setIsModalVisible(true);
    const closeModal = () => setIsModalVisible(false);

    return (
        <div >
            <h1 className="text-md  font-semibold mb-2 mt-4">Sections</h1>
            <div className="space-y-3">
                {SectionsData.map((section, index) => (
                    section.href ?
                        <Link href={section.href}>

                            <div
                                key={index}
                                className="flex items-center justify-between cursor-pointer p-4 min-w-[300px] bg-white dark:bg-[#2c2c2e] rounded-lg shadow-md hover:shadow-lg text-[#007AFF]  transition-shadow"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-2xl">{section.icon}</span>
                                    <span className="font-medium dark:text-white">{section.title}</span>
                                </div>
                                <div>
                                    <IoIosArrowForward />
                                </div>
                            </div>
                        </Link> :
                        <div
                            onClick={openModal}
                            key={index}
                            className="flex items-center justify-between cursor-pointer p-4 min-w-[300px] bg-white dark:bg-[#2c2c2e] rounded-lg shadow-md hover:shadow-lg text-[#007AFF]  transition-shadow"
                        >
                            <div className="flex items-center space-x-3">
                                <span className="text-2xl">{section.icon}</span>
                                <span className="font-medium dark:text-white">{section.title}</span>
                            </div>
                            <div>
                                <IoIosArrowForward />
                            </div>
                        </div>
                ))}
            </div>

            <WarningModal isVisible={isModalVisible} onClose={closeModal} />

        </div>
    );
};

export default Sections