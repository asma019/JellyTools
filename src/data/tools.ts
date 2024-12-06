import { Tool } from '../types';
import { 
  ImageIcon, 
  Video, 
  Mic, 
  Mail, 
  ShieldCheck 
} from 'lucide-react';

export const tools: Tool[] = [
  {
    id: 'image-converter',
    name: 'Image Converter',
    description: 'Convert images between different formats with ease',
    icon: 'ImageIcon',
    path: '/tools/image-converter'
  },
  {
    id: 'screen-recorder',
    name: 'Screen Recorder',
    description: 'Record your screen directly from your browser',
    icon: 'Video',
    path: '/tools/screen-recorder'
  },
  {
    id: 'text-to-speech',
    name: 'Text to Speech',
    description: 'Convert your text into natural-sounding speech',
    icon: 'Mic',
    path: '/tools/text-to-speech'
  },
  {
    id: 'mailto-generator',
    name: 'Mailto Generator',
    description: 'Create mailto links with custom parameters',
    icon: 'Mail',
    path: '/tools/mailto-generator'
  },
  {
    id: 'password-generator',
    name: 'Password Generator',
    description: 'Generate strong, secure passwords',
    icon: 'ShieldCheck',
    path: '/tools/password-generator'
  }
];