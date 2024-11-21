import { useState } from 'react';
import generateDocx from '../utils/generateDocx';
import generatePdf from '../utils/generatePdf';
import mockedData from '../assets/data/mockData.json';

const useButtonFormatController = () => {
    const [arrowStatus, setArrowStatus] = useState(false);
    const [selectedFormat, setSelectedFormat] = useState('PDF');
    const [hovered, setHovered] = useState<string | null>(null);
    const openedPosition = 'rotate(0)';
    const defaultPosition = 'rotate(-180deg)';

    const showButtons = () => {
        setArrowStatus(!arrowStatus);
    }

    const handleListClick = (format: string) => {
        setSelectedFormat(format);
        setArrowStatus(false);
    };

    const basedStyles = 'list-group-item button__fs bg-white';
    const hoveredStyle = 'list-group-item button__fs button__fs pointer';

    const handleMouseEnter = (item: string) => {
        setHovered(item);
    };

    const handleMouseLeave = () => {
        setHovered(null);
    };

    return {
        arrowStatus,
        selectedFormat,
        hovered,
        basedStyles,
        hoveredStyle,
        openedPosition,
        defaultPosition,
        showButtons,
        handleListClick,
        generatePdf: () => generatePdf(mockedData),
        generateDocx: () => generateDocx(mockedData),
        handleMouseEnter,
        handleMouseLeave
    }
}

export default useButtonFormatController;