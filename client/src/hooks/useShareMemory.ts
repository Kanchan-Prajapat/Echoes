import { toPng } from "html-to-image";

export default function useShareMemory() {

  async function saveAsImage(title: string) {

    const element =
      document.getElementById("share-card");

    if (!element) return;

    try {

      const dataUrl = await toPng(element, {

        cacheBust: true,

        pixelRatio: 3,

        backgroundColor: "#ffffff",

      });

      const link =
        document.createElement("a");

      const fileName = title
        .trim()
        .replace(/[<>:"/\\|?*]+/g, "")
        .replace(/\s+/g, " ");

      link.download = `${fileName}.png`;

      link.href = dataUrl;

      link.click();

    }

    catch (error) {

      console.error(error);

    }

  }

  return {

    saveAsImage,

  };

}