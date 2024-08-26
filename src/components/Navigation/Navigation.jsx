import { Link } from 'react-router-dom';

import s from './Navigation.module.css';

export const Navigation = () => {
  return (
    <nav className={s.container}>
      <Link className={s.link} to={'/qr-code-generator/generate'}>
        Генерировать QR код
      </Link>
      <Link className={s.link} to={'/qr-code-generator/scan'}>
        Сканировать QR код
      </Link>
      <Link className={s.link} to={'/qr-code-generator/generateHistory'}>
        История генерирования
      </Link>
      <Link className={s.link} to={'/qr-code-generator/scanHistory'}>
        История сканирования
      </Link>
    </nav>
  );
};
