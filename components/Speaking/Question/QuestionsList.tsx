import { FC } from "react";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { truncateText } from "@/helpers/textUtils";
import { useRouter } from "next/router";

type Topic = {
    id: number;
    title: string;
    dateRange: string;
    part: number;
};

const topics: Topic[] = [
    { id: 1, title: "What work do you do? What subjects are you studying?", dateRange: "September 2024 - April 2025", part: 1 },
    { id: 2, title: "Do you work or are you a student?", dateRange: "September 2024 - April 2025", part: 1 },
    { id: 3, title: "Work and studies, schools and workplaces", dateRange: "September 2024 - April 2025", part: 1 },
    { id: 4, title: "Work and studies, schools and workplaces", dateRange: "September 2024 - April 2025", part: 1 },
];


const QuestionList = () => {
    const router = useRouter()
    const { part, topic } = router.query

    return (
        <div>
            <div className="text-center my-8">
                <h2 className="font-medium text-gray-900 dark:text-white text-[16px]">Work and studies, schools and workplaces</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-[13px]"> (September 2024 - April 2025)</p>
            </div>
            <h1 className="text-md  font-semibold mb-2 mt-4">Questions</h1>
            <div className="space-y-4">
                {topics.map((item, index) => (
                    <Link
                        href={`/speaking/${part}/${topic}/${index + 1}`}
                        key={index + 1}
                        className="flex items-center gap-4 justify-between bg-white dark:bg-[#2c2c2e] p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    >
                        <div className="flex items-center space-x-2 ">
                            <span style={{ fontFamily: '"Kdam Thmor Pro", serif' }} className="text-blue-500  text-2xl">{`00${index + 1}.`}</span>
                            <div>
                                <h2 className="font-medium text-gray-900 dark:text-white text-[12px]">{truncateText(item.title, 80)}</h2>
                            </div>
                        </div>
                        <IoIosArrowForward className="text-blue-500" />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default QuestionList;
