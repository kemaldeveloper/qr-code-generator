import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

import { GENERATE_DATA } from '../../constants';

import s from './QrCodeGenerator.module.css';

export const QrCodeGenerator = () => {
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  const onClickHandler = event => {
    event.preventDefault();
    const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

    localStorage.setItem(GENERATE_DATA, JSON.stringify([...prevData, value]));

    setResult(value);
    setValue('');
  };

  const onChangeHandler = event => {
    setValue(event.target.value);
    setResult('');
  };

  return (
    <div className={s.container}>
      <form action="#" onSubmit={onClickHandler} style={{ display: 'flex', flexDirection: 'column' }}>
        <input className={s.result} type="text" value={value} placeholder="Введите текст..." onChange={onChangeHandler} />
        <button className={s.btn} type="submit" data-test="test">
          Сгенерировать QR
        </button>
      </form>
      {result && <QRCodeSVG value={result} size={160} />}
    </div>
  );
};
