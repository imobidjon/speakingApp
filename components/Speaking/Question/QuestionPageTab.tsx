import { useState } from "react"
import type React from "react" // Added import for React
import { BiMicrophone } from "react-icons/bi"

interface Tab {
    id: string
    label: string
    content: React.ReactNode
}

const tabs: Tab[] = [
    {
        id: "vocabulary",
        label: "Vocabulary",
        content: <div className="p-4">Vocabulary content goes here</div>,
    },
    {
        id: "ideas",
        label: "Ideas",
        content: <div className="p-4">Ideas content goes here</div>,
    },
    {
        id: "answers",
        label: "Answers",
        content: <div className="p-4">Answers content goes here</div>,
    },
]

export default function QuestionPageTab() {
    const [activeTab, setActiveTab] = useState<string>("vocabulary")

    return (
        <div className="mt-4">
            <div className="relative bg-white dark:bg-[#2c2c2e] rounded-lg shadow-sm min-h-[600px]">
                {/* Tab Headers */}
                <div className="flex border-b">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-6 py-2 text-sm font-medium transition-colors
                ${activeTab === tab.id
                                    ? "text-blue-600 border-b-2 border-blue-600"
                                    : "text-gray-500 hover:text-gray-700"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="p-4 min-h-[500px]">{tabs.find((tab) => tab.id === activeTab)?.content}</div>

                {/* Microphone Button */}
                <button
                    className="absolute bottom-4 right-4 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors"
                    aria-label="Activate microphone"
                >
                    <BiMicrophone className="w-5 h-5" />
                </button>
            </div>
        </div>
    )
}

