import { Document, Packer, Paragraph, TextRun } from 'docx';
import { saveAs } from 'file-saver';

const generateDocx = (mockedData) => {
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

export default generateDocx;