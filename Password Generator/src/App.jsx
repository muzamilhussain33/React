import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [allowedNumbers, setAllowedNumbers] = useState(false);
  const [allowedSymbols, setAllowedSymbols] = useState(false);
  const [password, setPassword] = useState('');

  const passwordref = useRef(null);
  const copyToClipboard = useCallback(() => {
      window.navigator.clipboard.writeText(password);
      passwordref.current?.select(); 
      // passwordref.current?.setSelectionRange(0,8);
  }, [password]);

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (allowedNumbers) {
      str += '0123456789';
    }
    if (allowedSymbols) {
      str += '!@#$%^&*()_+[]{}|;:,.<>?';
    }
    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length));
    }

    setPassword(pass);

  }, [length, allowedNumbers, allowedSymbols, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length,allowedNumbers, allowedSymbols,passwordGenerator])

  return (
    <>
      <div className='w-full max-w-lg mx-auto shadow-md rounded-lg  px-4 py-3 my-8 text-red-400 bg-gray-700'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text" 
          value={password}
          readOnly
          ref={passwordref}
          className='outline-none w-full py-1 px-3 bg-white'
          placeholder='Password'
          />
          <button className='outline-none text-white px-3 py-0.5 shrink-0 bg-red-600 hover:bg-red-700'
          onClick={copyToClipboard}
          >Copy</button>
        </div>
        <div className='flex flex-wrap text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            id='length'
            type="range"
            min={6}
            max={20}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="length">Length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            id="numberInput" 
            defaultChecked={allowedNumbers}
            onChange={() => {
              setAllowedNumbers((prev) => !prev)
            }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            id="symbolInput" 
            defaultChecked={allowedSymbols}
            onChange={() => {
              setAllowedSymbols((prev) => !prev)
            }}
            />
            <label htmlFor="symbolInput">Symbols</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
