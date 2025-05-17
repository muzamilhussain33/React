import { useState } from 'react'
import { useCurrencyInfo } from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("eur");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const currencyOptions = Object.keys(currencyInfo.rates);
  const options = Object.keys(currencyInfo);


  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  }

  return (
    <>
      <h1 className='bg-red-500 text-orange-600'>Hello world</h1>
    </>
  )
}

export default App
