export const formatStatusLabel = (status: string) => {
    return status
        .split('_')
        .map((word) => word.charAt(0) + word.slice(1).toLowerCase())
        .join(' ');
};