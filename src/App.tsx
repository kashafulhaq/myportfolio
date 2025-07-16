import React from 'react';
import { Toaster } from "sonner";
import Portfolio from './components/Portfolio';

export default function App() {
  return (
    <div className="min-h-screen">
      <Portfolio />
      <Toaster />
    </div>
  );
}
