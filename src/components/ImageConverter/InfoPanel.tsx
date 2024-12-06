import React from 'react';
import { Info, CheckCircle } from 'lucide-react';

export const InfoPanel: React.FC = () => {
  return (
    <div className="bg-blue-50 rounded-lg p-6">
      <h3 className="flex items-center text-lg font-semibold text-blue-900 mb-4">
        <Info className="w-5 h-5 mr-2" />
        How to Use
      </h3>
      
      <div className="space-y-4">
        <div className="flex items-start">
          <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5" />
          <p className="text-blue-800">
            <strong>Upload Image:</strong> Click the upload area or drag and drop your image file.
          </p>
        </div>
        
        <div className="flex items-start">
          <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5" />
          <p className="text-blue-800">
            <strong>Choose Format:</strong> Select your desired output format from the dropdown menu.
          </p>
        </div>
        
        <div className="flex items-start">
          <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5" />
          <p className="text-blue-800">
            <strong>Convert:</strong> Click the Convert button to transform your image.
          </p>
        </div>
      </div>

      <div className="mt-6 p-4 bg-white rounded-md">
        <h4 className="text-sm font-semibold text-gray-900 mb-2">Supported Formats:</h4>
        <ul className="grid grid-cols-2 gap-2 text-sm text-gray-600">
          <li>• PNG (Lossless)</li>
          <li>• JPG (Compressed)</li>
          <li>• WebP (Modern)</li>
          <li>• GIF (Animated)</li>
        </ul>
      </div>
    </div>
  );
};