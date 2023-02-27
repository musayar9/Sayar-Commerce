import {createContext, useContext, useState} from 'react'
const Context = createContext()


const ProvideSite =({children})=>{
   
    const [cardMoney, setCardMoney] = useState(100000000);
    const [totalMoney, setTotalMoney] = useState(0);
    const [starMoney, setStarMoney] = useState(0);
    const [basket, setBasket] = useState([]);
    const [search, setIsSearch ] = useState("")
    const [searchValue,setSearchValue] = useState("")
    const [favourite, setFavourite] = useState([]);
    const[starBasket, setStarBasket] = useState([])
    const[starFavourite, setStarFavourite] = useState([])
   const [like, setLike] = useState(false)
   const [emptyFavourite, setEmptyFavourite] = useState(false)
   const [category, setCategory] = useState(false)
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
        setFavourite,
        like, 
        setLike,
        searchValue,setSearchValue,
        starBasket,setStarBasket,
        starFavourite,setStarFavourite,
        starMoney, 
        setStarMoney,
        emptyFavourite, setEmptyFavourite,
        category, setCategory
    
    }

    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )

}

export const useSite = () => useContext(Context)

export default ProvideSite;