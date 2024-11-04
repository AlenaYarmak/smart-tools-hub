import { useState } from 'react';
import { jsPDF } from 'jspdf';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import { saveAs } from 'file-saver';

const useButtonFormatController = ({ mockedData }) => {
    const [arrowStatus, setArrowStatus] = useState(false);
    const [selectedFormat, setSelectedFormat] = useState('PDF');
    const [hovered, setHovered] = useState(null);
    const openedPosition = 'rotate(0)';
    const defaultPosition = 'rotate(-180deg)';

    const showButtons = () => {
        setArrowStatus(!arrowStatus);
    }

    const handleListClick = (format) => {
        setSelectedFormat(format);
        setArrowStatus(false);
    };

    const generatePdf = () => {
        const file = new jsPDF();

        file.setFillColor(92, 204, 187);
        file.rect(15, 15, 180, 7, 'F');

        file.setFontSize(14);
        file.setTextColor(0, 0, 0);
        file.text('Title', 20, 20);
        file.text('Subtitle', 50, 20);
        file.text('Description', 120, 20);

        let yPosition = 30;
        mockedData.forEach((item) => {
            file.setFontSize(10);
            const wrappedTitle = file.splitTextToSize(item.title, 30);
            file.text(wrappedTitle, 20, yPosition);

            const wrappedSubtitle = file.splitTextToSize(item.subtitle, 55);
            file.text(wrappedSubtitle, 50, yPosition);

            const wrappedDescription = file.splitTextToSize(item.description, 70);
            file.text(wrappedDescription, 120, yPosition);

            yPosition += 10 * Math.max(wrappedTitle.length, wrappedSubtitle.length, wrappedDescription.length);
        });

        file.save('mock-data.pdf');
    }

    const generateDocx = () => {
        const doc = new Document({
            sections: [
                {
                    children: mockedData.map(
                        (item) =>
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: item.title,
                                        bold: true,
                                        size: 24,
                                    }),
                                    new TextRun({
                                        text: `\n${item.subtitle}`,
                                        italics: true,
                                        size: 20,
                                    }),
                                    new TextRun({
                                        text: `\n${item.description}\n`,
                                        size: 16,
                                    }),
                                ],
                            })
                    ),
                },
            ],
        });

        Packer.toBlob(doc).then((blob) => {
            saveAs(blob, 'mock-data.docx');
        });
    };

    const basedStyles = 'list-group-item button__fs bg-white';
    const hoveredStyle = 'list-group-item button__fs button__fs pointer';

    const handleMouseEnter = (item) => {
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
        generatePdf,
        generateDocx,
        handleMouseEnter,
        handleMouseLeave
    }
}

export default useButtonFormatController;