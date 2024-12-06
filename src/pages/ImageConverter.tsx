import React from 'react';
import { ConversionForm } from '../components/ImageConverter/ConversionForm';
import { InfoPanel } from '../components/ImageConverter/InfoPanel';
import { ImageIcon } from 'lucide-react';

export const ImageConverter: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <ImageIcon className="w-12 h-12 text-blue-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Image Converter
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Convert your images between different formats with just a few clicks. 
          Supports PNG, JPG, WebP, and GIF formats.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ConversionForm />
        </div>
        <div>
          <InfoPanel />
        </div>
      </div>
    </div>
  );
};