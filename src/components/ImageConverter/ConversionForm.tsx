import React, { useState } from 'react';
import { Upload, Image as ImageIcon, Download, Loader2 } from 'lucide-react';
import { convertImage, downloadImage } from '../../utils/imageConverter';

export const ConversionForm: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [targetFormat, setTargetFormat] = useState<string>('png');
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        setError('Please select a valid image file');
        return;
      }
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      setError(null);
    }
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      setError(null);
    } else {
      setError('Please drop a valid image file');
    }
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
  };

  const handleConvert = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) return;

    try {
      setIsConverting(true);
      setError(null);
      const convertedBlob = await convertImage(selectedFile, targetFormat);
      downloadImage(convertedBlob, selectedFile.name, targetFormat);
    } catch (err) {
      setError('Error converting image. Please try again.');
      console.error(err);
    } finally {
      setIsConverting(false);
    }
  };

  return (
    <form onSubmit={handleConvert} className="space-y-6">
      <div 
        className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors duration-200 ${
          error ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50'
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <input
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
          id="file-upload"
        />
        <label
          htmlFor="file-upload"
          className="cursor-pointer flex flex-col items-center space-y-2"
        >
          <Upload className={`w-12 h-12 ${error ? 'text-red-400' : 'text-gray-400'}`} />
          <span className={`text-sm ${error ? 'text-red-600' : 'text-gray-600'}`}>
            {error || (selectedFile ? selectedFile.name : 'Click to upload or drag and drop')}
          </span>
          <span className="text-xs text-gray-500">
            Supports: JPG, PNG, WebP, GIF
          </span>
        </label>
      </div>

      {previewUrl && (
        <div className="mt-4">
          <p className="text-sm font-medium text-gray-700 mb-2">Preview:</p>
          <div className="relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={previewUrl}
              alt="Preview"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}

      <div className="flex items-center space-x-4">
        <select
          value={targetFormat}
          onChange={(e) => setTargetFormat(e.target.value)}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        >
          <option value="png">PNG</option>
          <option value="jpeg">JPG</option>
          <option value="webp">WebP</option>
          <option value="gif">GIF</option>
        </select>

        <button
          type="submit"
          disabled={!selectedFile || isConverting}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
        >
          {isConverting ? (
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          ) : (
            <Download className="w-4 h-4 mr-2" />
          )}
          {isConverting ? 'Converting...' : 'Convert & Download'}
        </button>
      </div>
    </form>
  );
};