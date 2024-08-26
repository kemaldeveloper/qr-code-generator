import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';
import { SCAN_DATA } from '../../constants';
import s from './QrCodeScanner.module.css';

export const QrCodeScanner = () => {
  const [scanned, setScanned] = useState(false);

  const scanHandler = result => {
    setScanned(result[0].rawValue);

    const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

    localStorage.setItem(SCAN_DATA, JSON.stringify([...prevData, result[0].rawValue]));
  };

  const settings = {
    audio: false,
    finder: true,
  };

  const stylesSettings = {
    container: {
      width: 300,
      height: 300,
      margin: '0 auto',
    },
  };

  return (
    <div className={s.container}>
      <Scanner onScan={scanHandler} allowMultiple components={settings} styles={stylesSettings} />
      <p>{scanned}</p>
    </div>
  );
};
