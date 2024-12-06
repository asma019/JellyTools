import React from 'react';
import { Info, CheckCircle, AlertCircle } from 'lucide-react';

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
            <strong>Select Source:</strong> Choose which screen, window, or tab you want to record.
          </p>
        </div>
        
        <div className="flex items-start">
          <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5" />
          <p className="text-blue-800">
            <strong>Audio Options:</strong> Toggle microphone recording on/off as needed.
          </p>
        </div>
        
        <div className="flex items-start">
          <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5" />
          <p className="text-blue-800">
            <strong>Record:</strong> Click Start Recording and grant permissions when prompted.
          </p>
        </div>
      </div>

      <div className="mt-6 p-4 bg-white rounded-md">
        <div className="flex items-start">
          <AlertCircle className="w-5 h-5 text-amber-500 mr-2 mt-0.5" />
          <div className="text-sm text-gray-600">
            <p className="font-semibold text-gray-900 mb-1">Important Notes:</p>
            <ul className="space-y-1">
              <li>• Browser permissions required</li>
              <li>• Recordings saved in WebM format</li>
              <li>• Maximum recording time: 2 hours</li>
              <li>• System audio recording may vary by browser</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};