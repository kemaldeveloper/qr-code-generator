import { QRCodeSVG } from 'qrcode.react';
import { GENERATE_DATA } from '../../constants';

import s from './GenerateHistory.module.css';

export const GenerateHistory = () => {
  const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

  return (
    <ul className={s.list}>
      {data.map((item, i) => (
        <li key={i} className={s.item}>
          <QRCodeSVG value={item} />
          {item}
        </li>
      ))}
    </ul>
  );
};
