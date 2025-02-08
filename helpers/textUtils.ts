export const truncateText = (content: string, maxLength: number = 100): string => {
    return content?.length > maxLength ? `${content?.slice(0, maxLength)}...` : content;
};
