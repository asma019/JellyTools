import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { tools } from './data/tools';
import { ImageConverter } from './pages/ImageConverter';
import { ScreenRecorder } from './pages/ScreenRecorder';
import { ToolCard } from './components/ToolCard';

function HomePage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to JellyTools
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your one-stop destination for essential web tools. Convert images, record your screen,
          generate strong passwords, and more - all in one place.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-gray-600">
          More tools coming soon! Visit{' '}
          <a 
            href="https://jellytools.io" 
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            jellytools.io
          </a>
          {' '}for updates.
        </p>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tools/image-converter" element={<ImageConverter />} />
          <Route path="/tools/screen-recorder" element={<ScreenRecorder />} />
        </Routes>

        <footer className="bg-white border-t border-gray-100 py-8 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
            <p>© {new Date().getFullYear()} JellyTools. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}