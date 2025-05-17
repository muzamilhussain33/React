import { useState, useEffect } from "react";

function useCurrencyInfo (currency) {
    const [data, setdata] = useState({});
    useEffect ( () => {
        // fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        fetch(`https://v6.exchangerate-api.com/v6/a6f21493d74525468c79f0cb/latest/${currency}`)
        .then((res) => res.json())
        .then((res) => setdata(res[currency]));
        console.log(data);
    }, [currency]);
    console.log(data);
    return data;
}

export default useCurrencyInfo;