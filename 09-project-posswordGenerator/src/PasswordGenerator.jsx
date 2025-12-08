import { useState, useCallback, useEffect, useRef } from 'react';

export default function PasswordGenerator() {
  let [length, setLength] = useState(8);
  let [numbers, setNumbers] = useState(false);
  let [characters, setCharacters] = useState(false);
  let [password, setPassword] = useState('');

  let passwordGenerater = useCallback(() => {
    let pass = "";
    let letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let nums = '0123456789';
    let chars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    if (numbers) letters += nums;
    if (characters) letters += chars;
    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * letters.length + 1);
      pass += letters[index];
    };
    setPassword(pass);
  }, [length, numbers, characters, setPassword]);

  useEffect(
    () => {
      passwordGenerater();
    },
    [passwordGenerater, length, numbers, characters]
  );

  let passwordRef = useRef(null);

  let copyToClipboard = () => {
    passwordRef.current.select();
    window.navigator.clipboard.writeText(password);
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
<div className='w-full max-w-md mx-auto my-8 rounded-lg bg-gray-700 text-white p-4'>
      <h1 className='text-white text-center mb-2 '>Password Generator</h1>
      <div className='flex shadow rounded-lg bg-gray-800 p-4 mb-4 overflow-hidden'>
        <input
          type="text"
          readOnly
          value={password}
          className='w-full bg-gray-800 text-orange-500 focus:outline-none'
          placeholder='Password'
          ref={passwordRef}
        />
        <button class=" outline-none bg-blue-500 hover:bg-blue-700 text-white w-20 rounded-lg py-2" onClick={copyToClipboard}>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex item-center gap-x-1'>
          <input
            type="range"
            min="4"
            max="20"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            id='range'
            className='accent-blue-500 cursor-pointer'
          />
          <label htmlFor="range">length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1' >
          <input
            type="checkbox"
            id='numbers'
            checked={numbers}
            onChange={() => setNumbers(
              (prev) => !prev
            )}
          />
          <label htmlFor="numbers">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1' >
          <input
            type="checkbox"
            id='chars'
            checked={characters}
            onChange={() => setCharacters(
              (prev) => !prev
            )}
          />
          <label htmlFor="chars">Characters</label>
        </div>
      </div>
    </div>
    </div>
  )
};