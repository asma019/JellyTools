import React, { useState, useRef } from 'react';
import { Play, Square, Download, Mic, MicOff, Settings } from 'lucide-react';
import { startRecording, stopRecording } from '../../utils/screenRecorder';

export const RecorderForm: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordedBlob, setRecordedBlob] = useState<Blob | null>(null);
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const previewRef = useRef<HTMLVideoElement>(null);

  const handleStartRecording = async () => {
    try {
      setError(null);
      const mediaRecorder = await startRecording(audioEnabled, previewRef.current!);
      mediaRecorderRef.current = mediaRecorder;
      setIsRecording(true);

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          setRecordedBlob(event.data);
        }
      };
    } catch (err) {
      setError('Failed to start recording. Please make sure you have granted the necessary permissions.');
      console.error(err);
    }
  };

  const handleStopRecording = () => {
    if (mediaRecorderRef.current) {
      stopRecording(mediaRecorderRef.current);
      setIsRecording(false);
    }
  };

  const handleDownload = () => {
    if (recordedBlob) {
      const url = URL.createObjectURL(recordedBlob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `screen-recording-${new Date().toISOString()}.webm`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  return (
    <div className="space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
          {error}
        </div>
      )}

      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <video
          ref={previewRef}
          className="w-full aspect-video bg-gray-900"
          autoPlay
          muted
          playsInline
        />

        <div className="p-4 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {!isRecording ? (
                <button
                  onClick={handleStartRecording}
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Start Recording
                </button>
              ) : (
                <button
                  onClick={handleStopRecording}
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  <Square className="w-4 h-4 mr-2" />
                  Stop Recording
                </button>
              )}

              <button
                onClick={() => setAudioEnabled(!audioEnabled)}
                className={`p-2 rounded-md ${
                  audioEnabled ? 'text-blue-600 bg-blue-50' : 'text-gray-400 bg-gray-50'
                }`}
                title={audioEnabled ? 'Disable microphone' : 'Enable microphone'}
              >
                {audioEnabled ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
              </button>

              <button
                className="p-2 rounded-md text-gray-400 hover:text-gray-500 bg-gray-50"
                title="Recording settings"
              >
                <Settings className="w-5 h-5" />
              </button>
            </div>

            {recordedBlob && !isRecording && (
              <button
                onClick={handleDownload}
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Recording
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};