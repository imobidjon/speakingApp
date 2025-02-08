import { useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import QuestionPageTab from "./QuestionPageTab";

const QuestionPage = () => {
    const [activeTab, setActiveTab] = useState<"Vocabulary" | "Ideas" | "Answers">("Vocabulary");

    return (
        <div className="mt-4">
            {/* Question Card */}
            <div className="bg-white dark:bg-[#2c2c2e] rounded-lg shadow-md w-full max-w-md p-2">
                <h2 className="text-gray-800 dark:text-white text-[13px] font-semibold">
                    Work and studies, schools and workplaces <br />
                </h2>
                <span className="text-gray-500 dark:text-gray-400 text-[12px]">(September 2024 - April 2025)</span>
                <div className="border-t my-2">
                    <p className="text-[13px] font-semibold">Do you work or are you a student?</p>
                </div>

                {/* Navigation Arrows */}
                <div className="flex justify-end items-center mt-6 gap-8">
                    <button className="text-blue-500 hover:text-blue-700">
                        <IoIosArrowBack />
                    </button>
                    <button className="text-blue-500 hover:text-blue-700">
                        <IoIosArrowForward />
                    </button>
                </div>
            </div>

            {/* Tabs */}
            <QuestionPageTab />
        </div>
    );
};

export default QuestionPage;
