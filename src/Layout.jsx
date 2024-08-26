import { Navigation } from './components/Navigation/Navigation';
import { QrCodeGenerator } from './components/Generate/QrCodeGenerator';
import { QrCodeScanner } from './components/Scan/QrCodeScanner';
import { Routes, Route } from 'react-router-dom';
import { GenerateHistory } from './components/GenerateHistory/GenerateHistory';
import { ScanHistory } from './components/ScanHistory/ScanHistory';

export function Layout() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/qr-code-generator/generate" element={<QrCodeGenerator />} />
        <Route path="/qr-code-generator/scan" element={<QrCodeScanner />} />
        <Route path="/qr-code-generator/generateHistory" element={<GenerateHistory />} />
        <Route path="/qr-code-generator/scanHistory" element={<ScanHistory />} />
      </Routes>
    </div>
  );
}
