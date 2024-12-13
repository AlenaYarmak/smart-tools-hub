"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jspdf_1 = require("jspdf");
const generatePdf = (mockedData) => {
    const file = new jspdf_1.jsPDF();
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
};
exports.default = generatePdf;
