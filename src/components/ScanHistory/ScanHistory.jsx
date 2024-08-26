import { QRCodeSVG } from 'qrcode.react';
import { SCAN_DATA } from '../../constants';

export const ScanHistory = () => {
  const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

  return (
    <ul>
      {data.map((item, index) => (
        <li key={index}>
          <QRCodeSVG value={item} size={30} /> {item}
        </li>
      ))}
    </ul>
  );
};
