import { useState } from 'react'

function App() {
  const [color, setColor] = useState('pink')

  return (
    <div className='w-full h-screen duration-200'
    style={{ backgroundColor: color }}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg  bg-white px-3 py-2 rounded-full'>
          <button 
          onClick={() => setColor("red")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
          style={{ backgroundColor: 'red' }}
          >Red
          </button>
          <button 
          onClick={() => setColor("Yellow")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
          style={{ backgroundColor: 'Yellow' }}
          >Yellow
          </button>
          <button 
          onClick={() => setColor("Pink")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
          style={{ backgroundColor: 'Pink' }}
          >Pink
          </button>
          <button 
          onClick={() => setColor("Blue")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
          style={{ backgroundColor: 'Blue' }}
          >Blue
          </button>
          <button 
          onClick={() => setColor("Green")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
          style={{ backgroundColor: 'Green' }}
          >Green
          </button>
          <button 
          onClick={() => setColor("Orange")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
          style={{ backgroundColor: 'Orange' }}
          >Orange
          </button>
          <button 
          onClick={() => setColor("Olive")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
          style={{ backgroundColor: 'Olive' }}
          >Olive
          </button>
          <button 
          onClick={() => setColor("Gray")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
          style={{ backgroundColor: 'Gray' }}
          >Gray
          </button>
          <button 
          onClick={() => setColor("Black")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
          style={{ backgroundColor: 'Black' }}
          >Black
          </button>
          <button 
          onClick={() => setColor("Purple")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
          style={{ backgroundColor: 'Purple' }}
          >Purple
          </button>
          <button 
          onClick={() => setColor("cyan")}
          className='outline-none px-4 py-1 rounded-full bg- text-white shadow-lg '
          style={{ backgroundColor: 'cyan' }}
          >Cyan
          </button>
          <button 
          onClick={() => setColor("Fuchsia")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
          style={{ backgroundColor: 'Fuchsia' }}
          >Fuchsia
          </button>
          <button 
          onClick={() => setColor("lime")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
          style={{ backgroundColor: 'lime' }}
          >Lime
          </button>
          <button 
          onClick={() => setColor("indigo")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
          style={{ backgroundColor: 'indigo' }}
          >Indigo
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
