import React, { useState } from 'react'
import { RiMicAiLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import Link from 'next/link';


const SectionsData = [
    {
        icon: <RiMicAiLine style={{ color: '#007AFF' }} />,
        title: 'Part 1',
        href: '/speaking/1',
        EnterIcon: <IoIosArrowForward style={{ color: '#007AFF' }} />,

    },
    {
        icon: <RiMicAiLine style={{ color: '#FF8800' }} />,
        title: 'Part 2',
        href: '/speaking/2',
        EnterIcon: <IoIosArrowForward style={{ color: '#FF8800' }} />,

    },
    {
        icon: <RiMicAiLine style={{ color: '#41C030' }} />,
        title: 'Part 3',
        href: '/speaking/3',
        EnterIcon: <IoIosArrowForward style={{ color: '#41C030' }} />,

    },
]

const PartSections = () => {

    return (
        <div >
            <h1 className="text-md  font-semibold mb-2 mt-4">Sections</h1>
            <div>
                {SectionsData.map((section, index) => (
                    <Link href={section.href}>

                        <div
                            key={index}
                            className="flex items-center justify-between mb-3 cursor-pointer p-4 min-w-[300px] bg-white dark:bg-[#2c2c2e] rounded-lg shadow-md hover:shadow-lg text-[#2c2c2e]  transition-shadow"
                        >
                            <div className="flex items-center space-x-3">
                                <span className="text-2xl">{section.icon}</span>
                                <span className="font-medium dark:text-white">{section.title}</span>
                            </div>
                            <div>
                                {section.EnterIcon}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default PartSections