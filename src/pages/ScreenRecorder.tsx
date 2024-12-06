import React from 'react';
import { Video } from 'lucide-react';
import { RecorderForm } from '../components/ScreenRecorder/RecorderForm';
import { InfoPanel } from '../components/ScreenRecorder/InfoPanel';

export const ScreenRecorder: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <Video className="w-12 h-12 text-blue-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Screen Recorder
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Record your screen, window, or browser tab directly from your web browser. 
          No installation required.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <RecorderForm />
        </div>
        <div>
          <InfoPanel />
        </div>
      </div>
    </div>
  );
};