import React from 'react';
import { ToolCardProps } from '../types';
import * as LucideIcons from 'lucide-react';

export const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  const Icon = LucideIcons[tool.icon as keyof typeof LucideIcons];

  return (
    <a
      href={tool.path}
      className="block group hover:no-underline"
    >
      <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 hover:border-blue-100">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors duration-200">
            <Icon className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
              {tool.name}
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              {tool.description}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};