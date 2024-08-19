import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bankPlus, bankMinus } from './store/bankSlice';

export default function App2() {
  const [value, setValue] = useState('');
  const number = useSelector((state) => state.bank.number);
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(bankPlus(value));
    setValue('');
  };

  const onclickMinus = () => {
    dispatch(bankMinus(value));
    setValue('');
  };
  return (
    <div className="App">
      <h1>코딩온 은행</h1>
      <h2>잔액: {number}</h2>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <button onClick={onClickPlus}>입금</button>
      <button onClick={onclickMinus}>출금</button>
    </div>
  );
}
