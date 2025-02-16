import { PDFDocument, rgb } from "pdf-lib";
import fs from "fs";
import path from "path";
import generateQR_code from "./generateQR_code.js";
import fontKit from "@pdf-lib/fontkit";
const __dirname = path.resolve();
const existingPdfBytes = fs.readFileSync(
  path.join(__dirname, "template", "template.pdf")
);
const uploadsPath = path.join(__dirname, "public", "certificates");
const date = new Date();

// color
// Original RGB values
const red = 151;
const green = 193;
const blue = 25;

// Normalize RGB values for pdf-lib
const normalizedRed = red / 255;
const normalizedGreen = green / 255;
const normalizedBlue = blue / 255;

async function createPdf(student, group, url) {
  try {
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
    // const { height, width } = page.getSize();
    const fontSize = 40;
    page.drawText(`${student.first_name} ${student.second_name}`, {
      x: 60,
      y: 310,
      size: fontSize,
      font: poppinsFont,
      color: rgb(0, 0, 0),
    });
    // write course name
    page.drawText(`«${group?.course_name} »`, {
      x: 60,
      y: 225,
      font: poppinsFont,
      size: 20,
      color: rgb(normalizedRed, normalizedGreen, normalizedBlue),
    });
    // Draw the QR code image on the PDF
    page.drawImage(qrCodeImage, {
      x: page.getWidth() - qrWidth - 150,
      y: page.getHeight() - qrHeight - 20,
    });

    // write id
    page.drawText(`${student?.id}/${group.code}`, {
      x: 630,
      y: 130,
      font: poppinsFont,
      size: 16,
      color: rgb(0, 0, 0),
    });
    // date time
    const day = String(date.getDate()).padStart(2, "0"); // Get day of the month (1-31) and pad with zero if needed
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Get month (0-11, so add 1) and pad with zero
    const year = date.getFullYear();
    // date time
    page.drawText(`${day}.${month}.${year}`, {
      x: 620,
      y: 80,
      font: poppinsFont,
      size: 18,
      color: rgb(0, 0, 0),
    });
    const newFolder = `${uploadsPath}/${group?.code}`;

    if (!fs.existsSync(newFolder)) {
      fs.mkdirSync(newFolder);
    }
    const filePath = path.join(newFolder, `${student.id}.pdf`);
    const pdfByte = await pdfDoc.save();

    fs.writeFileSync(filePath, pdfByte);
    return pdfByte;
  } catch (error) {
    console.log(error, "pdf");
    throw error;
  }
}
export default createPdf;
