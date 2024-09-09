import React, { useState } from "react";
import { jsPDF } from "jspdf";
import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";
import mockData from "../assets/data/mockData.json";

const ButtonPdf = () => {

    const [arrowStatus, setArrowStatus] = useState(false);
    const [selectedFormat, setSelectedFormat] = useState("PDF");
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
      setArrowStatus(false); // Close the dropdown
    };

    const generatePdf = () => {
        const file = new jsPDF();
        
        file.setFontSize(18);
        file.text("Mock Data", 20, 20);

        file.setFontSize(12);
        file.text("Title", 20, 40);
        file.text("Subtitle", 50, 40);
        file.text("Description", 120, 40);

        let yPosition = 50;
        mockData.forEach((item) => {
            file.text(item.title, 20, yPosition);
            file.text(item.subtitle, 50, yPosition);
            file.text(item.description, 120, yPosition);
            yPosition += 10;
        });

        file.save("mock-data.pdf");
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
          saveAs(blob, "mock-data.docx");
        });
      };




    
    return(
        <div class="btn-group" role="group">
          {selectedFormat === "PDF" && (
            <button 
              type="button" 
              class="button__fs btn btn-outline-primary btn-lg py-3 px-4"
              onClick={generatePdf}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download me-4" viewBox="0 0 16 16">
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
              </svg>
              PDF
            </button>
          )}
            
          {selectedFormat === "DOC" && (
            <button 
              type="button" 
              class="button__fs btn btn-outline-primary btn-lg py-3 px-4"
              onClick={generateDocx}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download me-4" viewBox="0 0 16 16">
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
              </svg>
              DOC
            </button>
          )}
        <button
            onClick={showButtons}
            type="button" 
            class="button__fs btn btn-outline-primary btn-lg py-3 px-4 rounded-end"
            >
              <svg
                style={{
                  transition: '0.3s',
                  transform: arrowStatus ? openedPosition : defaultPosition
                }}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-caret-down"
                viewBox="0 0 16 16"
            >
                <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659" />
            </svg>
        </button>
        {arrowStatus && 
          <div className="list__buttons">
            <ul className="list-group lh-lg">
              <li 
                className="list-group-item button__fs text-primary"
                onClick={() => handleListClick("DOC")}>
                DOC
              </li>
              <li 
                className="list-group-item button__fs text-primary"
                onClick={() => handleListClick("PDF")}>
                PDF
              </li> 
            </ul>  
          </div>}
        </div>
    )
}

export default ButtonPdf;