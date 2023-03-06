import { useSite } from "../Context/SiteContext"



function MoneyStatus() {

    const { cardMoney, totalMoney, setCardMoney } = useSite()
    const addMoney = () => {
        setCardMoney(cardMoney + 1000)
    }

    const notMoney = () => {
        setCardMoney(cardMoney + 0)
        const money = document.querySelector(".money")
        money.style.display = "none"


    }


    console.log()
    return (
        <div className="w-96 container place-items-center mt-5">

            <div className="border border-gray-400 p-4 rounde-xl">
                <p >Aldıklarımın Toplam Fiyatı {totalMoney}</p>
            </div>
            <div>
                {
                    totalMoney > 0 && (
                        <h6>Harcanabilir tutarınız {cardMoney - totalMoney}  TL Kaldı</h6>


                    )
                }

            </div>
            <div>
                {
                    totalMoney === 0 && (
                        <p>Kredi Limitiniz {cardMoney} TL</p>
                    )
                }

                {
                    cardMoney - totalMoney === 0 && (
                        <p>Kredi Limitinizi Artırmanız Gerekiyor</p>
                    )
                }

            </div>

            {
                cardMoney - totalMoney < 100 ? (
                    <div className="money">
                        <p>Paranız Yetersiz. Kredi Limitinizi Artırmak İstermisiniz 1000 TL Artırmak İstermisiniz</p>
                        <button onClick={addMoney}>Evet</button>
                        <button onClick={notMoney}>Hayır</button>
                    </div>

                ) :
                    (
                        cardMoney >= 12000 && (
                            <div className="money">
                                <p>Kart limitininz {cardMoney} dold</p>
                                <button disabled onClick={addMoney}>Evet</button>
                                <button onClick={notMoney}>Alış Verişe Devam Et</button>

                            </div>
                        )
                    )

            }


        </div>
    )
}

export default MoneyStatus
