export async function imageUrlToBase64(url: string) {
  const response = await fetch(url);

  const blob = await response.blob();

  return new Promise<{
    mimeType: string;
    data: string;
  }>((resolve) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      const result = reader.result as string;

      const [header, base64] = result.split(",");

      resolve({
        mimeType:
          blob.type,
        data: base64,
      });
    };

    reader.readAsDataURL(blob);
  });
}