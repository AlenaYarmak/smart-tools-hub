import { jsPDF } from 'jspdf';

const generatePdf = (mockedData: any) => {
    const file = new jsPDF();

    file.setFillColor(92, 204, 187);
    file.rect(15, 15, 180, 7, 'F');

    file.setFontSize(14);
    file.setTextColor(0, 0, 0);
    file.text('Title', 20, 20);
    file.text('Subtitle', 50, 20);
    file.text('Description', 120, 20);

    let yPosition = 30;
    mockedData.forEach((item: any) => {
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

export default generatePdf;