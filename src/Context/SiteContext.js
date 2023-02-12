import {createContext, useContext, useState} from 'react'
const Context = createContext()


const ProvideSite =({children})=>{
   
    const [cardMoney, setCardMoney] = useState(10000);
    const [totalMoney, setTotalMoney] = useState(0);
    const [basket, setBasket] = useState([]);
    const [search, setIsSearch ] = useState("")
    const [favourite, setFavourite] = useState([])
    const data = {
        cardMoney,
        setCardMoney,
        totalMoney,
        setTotalMoney,
        basket,
        setBasket,
        search,
        setIsSearch,
        favourite,
        setFavourite
    }

    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )

}

export const useSite = () => useContext(Context)

export default ProvideSite;