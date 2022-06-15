export default async function blobToJson(data) {
  if (data instanceof Blob) {
    try {
      const parsedBlob = await data.text();
      const convertedData = JSON.parse(parsedBlob);
      return convertedData;
    } catch {
      return {};
    }
  } else return data;
}
