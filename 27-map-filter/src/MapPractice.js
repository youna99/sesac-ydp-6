import React, { useState } from 'react'

function MapPractice() {

    const [text, setText] = useState([
        {
            id: 1,
            name: '코디',
            email: 'codi@gmail.com',
        },
        {
            id: 2,
            name: '윤소희',
            email: 'yoonsohee@gmail.com',
        },
    ]);

    const [inputName, setInputName] = useState('');
    const [inputEmail, setInputEmail] = useState('');

    const addText = () => {
        const newText = text.concat({
            id: text.length + 1,
            name: inputName,
            email: inputEmail,
        });
        setText(newText);
        setInputName('');
        setInputEmail('')
    }
  return (
    <div>
        <input type="text" placeholder='이름' value={inputName} onChange={(e) => {
            setInputName(e.target.value);
        }}/>
        <input type="email" placeholder='이메일' value={inputEmail} onChange={(e) => {setInputEmail(e.target.value)}}/>
        <button onClick={addText}>등록</button>
        {text.map((value) => (
            <h2 key={value.id}>{value.name} : {value.email}</h2>
        ))}
    </div>
  )
}

export default MapPractice