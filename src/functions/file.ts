export async function fileToBase64(file: File): Promise<string> {
  const arrayBuffer = await file.arrayBuffer(); // Converte para ArrayBuffer
  const buffer = Buffer.from(arrayBuffer); // Cria um buffer do Node.js
  const mimeType = file.type || 'application/octet-stream';
  return `data:${mimeType};base64,${buffer.toString('base64')}`;
}




