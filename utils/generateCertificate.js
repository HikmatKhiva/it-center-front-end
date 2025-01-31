import { PDFDocument, rgb } from "pdf-lib";
import fs from "fs";
import path from "path";
import generateQR_code from "./generateQR_code.js";
import fontKit from "@pdf-lib/fontkit";
const __dirname = path.resolve();
const existingPdfBytes = fs.readFileSync(
  path.join(__dirname, "template", "template.pdf")
);
const date = new Date();
async function createPdf(student, code, uploadPath, url) {
  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  const poppins = fs.readFileSync(
    path.join(__dirname, "assets", "font", "Poppins", "Poppins-Medium.ttf")
  );

  // Register fontkit with the PDF document
  pdfDoc.registerFontkit(fontKit);

  const poppinsFont = await pdfDoc.embedFont(poppins);

  const qrCodeData = await generateQR_code(url);
  const qrCodeImageBytes = await fetch(qrCodeData).then((res) =>
    res.arrayBuffer()
  );
  // Embed the QR code image in the PDF
  const qrCodeImage = await pdfDoc.embedPng(qrCodeImageBytes);

  const { width: qrWidth, height: qrHeight } = qrCodeImage.scale(1); // Scale down the image

  const page = pdfDoc.getPage(0);
  // const page = pdfDoc.addPage()
  const { height, width } = page.getSize();
  const fontSize = 45;
  page.drawText(`${student.first_name} ${student.second_name}`, {
    x: 50,
    y: 300,
    size: fontSize,
    font: poppinsFont,
    color: rgb(0, 0, 0),
  });
  // Draw the QR code image on the PDF
  page.drawImage(qrCodeImage, {
    x: page.getWidth() - qrWidth - 150,
    y: page.getHeight() - qrHeight - 20,
  });

  // write id
  page.drawText(`${student?.id}/${code}`, {
    x: 630,
    y: 130,
    font: poppinsFont,
    size: 16,
    color: rgb(0, 0, 0),
  });

  // date time
  page.drawText(`${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`, {
    x: 620,
    y: 80,
    font: poppinsFont,
    size: 18,
    color: rgb(0, 0, 0),
  });
  const filePath = path.join(uploadPath, `${student.id}.pdf`);
  const pdfByte = await pdfDoc.save();
  fs.writeFileSync(filePath, pdfByte);
  return pdfByte;
}
export default createPdf;