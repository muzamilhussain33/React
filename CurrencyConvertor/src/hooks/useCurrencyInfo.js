// import { useState, useEffect } from "react";

// function useCurrencyInfo (currency) {
//     const [data, setdata] = useState({});
//     useEffect ( () => {
//         // fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
//         fetch(`https://v6.exchangerate-api.com/v6/a6f21493d74525468c79f0cb/latest/${currency}`)
//         .then((res) => res.json())
//         .then((res) => setdata(res.conversion_rates));
//         console.log(data);
//     }, [currency]);
//     console.log(data);
//     return data;
//     // console.log("Hello")
// }

// export default useCurrencyInfo;


import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://v6.exchangerate-api.com/v6/a6f21493d74525468c79f0cb/latest/${currency}`)
      .then((res) => res.json())
      .then((res) => {
        if (res && res.conversion_rates) {
          setData(res.conversion_rates);
        } else {
          setData({});
        }
      })
      .catch((err) => {
        console.error("Failed to fetch currency info:", err);
        setData({});
      });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
