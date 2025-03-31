"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const docx_1 = require("docx");
const file_saver_1 = require("file-saver");
const generateDocx = (mockedData) => {
    const doc = new docx_1.Document({
        sections: [
            {
                children: mockedData.map((item) => new docx_1.Paragraph({
                    children: [
                        new docx_1.TextRun({
                            text: item.title,
                            bold: true,
                            size: 24,
                        }),
                        new docx_1.TextRun({
                            text: `\n${item.subtitle}`,
                            italics: true,
                            size: 20,
                        }),
                        new docx_1.TextRun({
                            text: `\n${item.description}\n`,
                            size: 16,
                        }),
                    ],
                })),
            },
        ],
    });
    docx_1.Packer.toBlob(doc).then((blob) => {
        (0, file_saver_1.saveAs)(blob, 'mock-data.docx');
    });
};
exports.default = generateDocx;
