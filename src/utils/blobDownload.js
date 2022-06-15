export default function blobDownload(blob, filename) {
  const elem = window.document.createElement("a");
  elem.href = window.URL.createObjectURL(blob);
  elem.style.display = "none";
  elem.download = filename;
  document.body.appendChild(elem);
  elem.click();
  document.body.removeChild(elem);
}
