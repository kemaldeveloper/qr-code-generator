import { QrReader } from 'react-qr-reader';
import { useState } from 'react';
import { SCAN_DATA } from '../../constants';
import s from './QrCodeScanner.module.css';

export const QrCodeScanner = () => {
  const [scanned, setScanned] = useState(false);

  const scanHandler = result => {
    if (!result) return;

    const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

    if (prevData.includes(result.text)) return;

    setScanned(result.text);

    localStorage.setItem(SCAN_DATA, JSON.stringify([...prevData, result.text]));
  };

  return (
    <div className={s.container}>
      <QrReader scanDelay={1000} onResult={scanHandler} containerStyle={{ width: '500px' }} />
      <p>{scanned}</p>
    </div>
  );
};
