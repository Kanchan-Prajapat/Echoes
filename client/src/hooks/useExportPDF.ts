import { domToPng } from "modern-screenshot";
import jsPDF from "jspdf";

export default function useExportPdf() {

  async function addPage(

    pdf: jsPDF,

    elementId: string

  ) {

    const element =

      document.getElementById(

        elementId

      );

    if (!element) return;

    const image =

      await domToPng(element);

    const img = new Image();

    img.src = image;

    await new Promise(

      (resolve) => {

        img.onload =

          () => resolve(true);

      }

    );

    const pageWidth =

      pdf.internal.pageSize.getWidth();

    const pageHeight =

      pdf.internal.pageSize.getHeight();

    const ratio =

      img.height / img.width;

    const height =

      pageWidth * ratio;

    pdf.addImage(

      image,

      "PNG",

      0,

      0,

      pageWidth,

      Math.min(

        height,

        pageHeight

      )

    );

  }

async function exportPdf(
  title: string
) {

    const pdf = new jsPDF(

      "p",

      "px",

      "a4"

    );

    await addPage(

      pdf,

      "pdf-cover"

    );

    pdf.addPage();

    await addPage(

      pdf,

      "pdf-gallery"

    );

    pdf.addPage();

    await addPage(

      pdf,

      "pdf-details"

    );

  const fileName = title
  .trim()
  .replace(/[<>:"/\\|?*]+/g, "")
  .replace(/\s+/g, " ");

pdf.save(`${fileName}.pdf`);
  }

  return {

    exportPdf,

  };

}