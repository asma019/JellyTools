import imageCompression from 'browser-image-compression';

export async function convertImage(
  file: File,
  targetFormat: string,
  quality = 0.8
): Promise<Blob> {
  // Compress the image first
  const compressedFile = await imageCompression(file, {
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
    fileType: `image/${targetFormat}`,
  });

  return compressedFile;
}

export function downloadImage(blob: Blob, originalFileName: string, targetFormat: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const newFileName = originalFileName.split('.')[0] + '.' + targetFormat;
  
  a.href = url;
  a.download = newFileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}