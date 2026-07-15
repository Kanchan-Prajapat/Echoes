import { domToPng } from "modern-screenshot";
export default function useShareMemory() {

 async function saveAsImage(
  title: string
){

    const element = document.getElementById("share-card");

    if (!element) return;

    const dataUrl = await domToPng(element);

    const link = document.createElement("a");

 const fileName = title
  .trim()
  .replace(/[<>:"/\\|?*]+/g, "")
  .replace(/\s+/g, " ");

link.download = `${fileName}.png`;
    link.href = dataUrl;

    link.click();

  }

  return {
    saveAsImage,
  };

}