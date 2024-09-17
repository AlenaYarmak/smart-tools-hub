import React, { useState } from 'react';
import Button from './Button';
import { jsPDF } from 'jspdf';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import { saveAs } from 'file-saver';
import mockData from '../assets/data/mockData.json';

const ButtonFormat = () => {

    const [arrowStatus, setArrowStatus] = useState(false);
    const [selectedFormat, setSelectedFormat] = useState('PDF');
    const [hovered, setHovered] = useState(null);
    const openedPosition = 'rotate(0)';
    const defaultPosition = 'rotate(-180deg)';

    const showButtons = () => {
      if (arrowStatus) {
        setArrowStatus(false);
      } else {
        setArrowStatus(true);
      }
      console.log(arrowStatus);
    }

    const handleListClick = (format) => {
      setSelectedFormat(format);
      setArrowStatus(false);
    };

    const generatePdf = () => {
        const file = new jsPDF();
        
        file.setFontSize(18);
        file.text('Mock Data', 20, 20);

        file.setFontSize(12);
        file.text('Title', 20, 40);
        file.text('Subtitle', 50, 40);
        file.text('Description', 120, 40);

        let yPosition = 50;
        mockData.forEach((item) => {
          file.text(item.title, 20, yPosition);
          file.text(item.subtitle, 50, yPosition);
          file.text(item.description, 120, yPosition);
          yPosition += 10;
        });

        file.save('mock-data.pdf');
    }

    const generateDocx = () => {
        const doc = new Document({
          sections: [
            {
              children: mockData.map(
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
    
    return(
      <div className='btn-group' role='group'>
        {selectedFormat === 'PDF' && (
          <Button text='PDF' clickFunction={generatePdf} />
        )}
        {selectedFormat === 'DOC' && (
          <Button text='DOC' clickFunction={generateDocx} />
        )} 
      <button
        onClick={showButtons}
        type='button' 
        className='button__fs button__fs--hover btn button-color btn-lg py-3 px-4 rounded-end'
          >
            <svg
              style={{
                transition: '0.3s',
                transform: arrowStatus ? openedPosition : defaultPosition
              }}
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-caret-down'
              viewBox='0 0 16 16'
            >
              <path d='M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659' />
            </svg>
        </button>
        {arrowStatus && 
          <div className='list__buttons'>
            <ul className='list-group lh-lg'>
              <li 
                className={hovered === 'DOC' ? hoveredStyle : basedStyles}
                onClick={() => handleListClick('DOC')}
                onMouseEnter={() => handleMouseEnter('DOC')}
                onMouseLeave={handleMouseLeave}>
                DOC
              </li>
              <li 
                className={hovered === 'PDF' ? hoveredStyle : basedStyles}
                onClick={() => handleListClick('PDF')}
                onMouseEnter={() => handleMouseEnter('PDF')}
                onMouseLeave={handleMouseLeave}>
                PDF
              </li> 
            </ul>  
          </div>}
        </div>
    )
}

export default ButtonFormat;