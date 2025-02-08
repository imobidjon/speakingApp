// components/WarningModal.tsx
import React from "react";

type WarningModalProps = {
    isVisible: boolean;
    onClose: () => void;
};

const WarningModal: React.FC<WarningModalProps> = ({ isVisible, onClose }) => {
    if (!isVisible) return null;

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        onClose(); // Close modal when clicking outside
    };

    const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation(); // Prevent closing when clicking inside the modal
    };

    return (
        <div onClick={handleOverlayClick} className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50"     >
            <div onClick={handleModalClick} className="bg-white dark:bg-[#1e1e1e] rounded-2xl w-80 shadow-lg text-center max-w-[267px]">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white pt-3">Warning</h2>
                <p className="text-sm text-gray-600 mb-6 dark:text-white px-3">This section is temporarily out of service.</p>
                <div
                    onClick={onClose}
                    className="w-full cursor-pointer py-2 px-4 border-t dark:border-t-black text-[#007AFF] font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    Cancel
                </div>
            </div>
        </div>
    );
};

export default WarningModal;
