import { FC } from "react";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { truncateText } from "@/helpers/textUtils";

type Topic = {
    id: number;
    title: string;
    dateRange: string;
    part: number;
};

const topics: Topic[] = [
    { id: 1, title: "Work and studies, schools and workplaces", dateRange: "September 2024 - April 2025", part: 1 },
    { id: 2, title: "Work and studies, schools and workplaces", dateRange: "September 2024 - April 2025", part: 1 },
    { id: 2, title: "Work and studies, schools and workplaces", dateRange: "September 2024 - April 2025", part: 1 },
    { id: 2, title: "Work and studies, schools and workplaces", dateRange: "September 2024 - April 2025", part: 1 },
    { id: 2, title: "Work and studies, schools and workplaces", dateRange: "September 2024 - April 2025", part: 1 },
    { id: 2, title: "Work and studies, schools and workplaces", dateRange: "September 2024 - April 2025", part: 1 },
    { id: 2, title: "Work and studies, schools and workplaces", dateRange: "September 2024 - April 2025", part: 1 },
    { id: 2, title: "Work and studies, schools and workplaces", dateRange: "September 2024 - April 2025", part: 1 },
    { id: 2, title: "Work and studies, schools and workplaces", dateRange: "September 2024 - April 2025", part: 1 },
    { id: 2, title: "Work and studies, schools and workplaces", dateRange: "September 2024 - April 2025", part: 1 },
    { id: 3, title: "Work and studies, schools and workplaces", dateRange: "September 2024 - April 2025", part: 2 },
    { id: 4, title: "Work and studies, schools and workplaces", dateRange: "September 2024 - April 2025", part: 2 },
    { id: 4, title: "Work and studies, schools and workplaces", dateRange: "September 2024 - April 2025", part: 2 },
    { id: 4, title: "Work and studies, schools and workplaces", dateRange: "September 2024 - April 2025", part: 2 },
    { id: 4, title: "Work and studies, schools and workplaces", dateRange: "September 2024 - April 2025", part: 2 },
    { id: 4, title: "Work and studies, schools and workplaces", dateRange: "September 2024 - April 2025", part: 2 },
    { id: 5, title: "Work and studies, schools and workplaces", dateRange: "September 2024 - April 2025", part: 3 },
    { id: 5, title: "Work and studies, schools and workplaces", dateRange: "September 2024 - April 2025", part: 3 },
    { id: 5, title: "Work and studies, schools and workplaces", dateRange: "September 2024 - April 2025", part: 3 },
    { id: 5, title: "Work and studies, schools and workplaces", dateRange: "September 2024 - April 2025", part: 3 },
    { id: 5, title: "Work and studies, schools and workplaces", dateRange: "September 2024 - April 2025", part: 3 },
    { id: 5, title: "Work and studies, schools and workplaces", dateRange: "September 2024 - April 2025", part: 3 },
    { id: 5, title: "Work and studies, schools and workplaces", dateRange: "September 2024 - April 2025", part: 3 },
];

interface TopicListProps {
    part: string | string[] | undefined;
}

const TopicList: FC<TopicListProps> = ({ part }) => {
    const filteredTopics = topics.filter((topic) => topic.part === Number(part));

    return (
        <div>
            <h1 className="text-md  font-semibold mb-2 mt-4">Topics</h1>
            <div className="space-y-4">
                {filteredTopics.map((topic, index) => (
                    <Link
                        href={`/speaking/${part}/${index + 1}`}
                        key={index + 1}
                        className="flex items-center justify-between bg-white dark:bg-[#2c2c2e] p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    >
                        <div className="flex items-center space-x-4">
                            <span style={{ fontFamily: '"Kdam Thmor Pro", serif' }} className={`${part === '1' ? "text-blue-500" : part === '2' ? 'text-[#FF8800]' : part === '3' ? 'text-[#41C030]' : ''}  text-2xl`}>{`00${index + 1}.`}</span>
                            <div>
                                <h2 className="font-medium text-gray-900 dark:text-white text-[12px]">{truncateText(topic.title, 40)}</h2>
                                <p className="text-sm text-gray-500 dark:text-gray-400 text-[11px]">{`(${topic.dateRange})`}</p>
                            </div>
                        </div>
                        <IoIosArrowForward className={`${part === '1' ? "text-blue-500" : part === '2' ? 'text-[#FF8800]' : part === '3' ? 'text-[#41C030]' : ''}`} />
                    </Link>
                ))}
            </div>
        </div >
    );
};

export default TopicList;
