import '../styles/latest.scss'
import { BiCartAdd, BiDetail, BiHeart, BiInfoCircle, BiPurchaseTag } from 'react-icons/bi'

const Famous = () => {
    const data = [{
        name : "Nike Shoes",
        img : "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/98be26be-e7d5-4d50-9974-88ac22f2ef76/chicago-white-sox-travel-player-mens-dri-fit-full-zip-hoodie-mx6Jrj.png",
        price : 110,
    }
    ,{
        name : "Nike Air Jordan 3",
        img : "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e7037827-3236-4a9b-9f8a-cc1fc8b37c5b/lebron-james-select-series-mens-nba-t-shirt-2nXXl4.png",
        price : 45,
    },{
        name : "Nike Air Max 1",
        img : "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9f8e5f36-af1f-4d53-9d8c-950e2c809715/baltimore-orioles-city-connect-mens-t-shirt-qKqxpJ.png",
        price : 40,
    },{
        name : "Nike Zoom Vomero",
        img : "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_523,c_limit/8d2fe356-f212-4c5b-865a-4e3409effdaf/zoom-vomero-5-mens-shoes-MgsTqZ.png",
        price : 160,
    },{
        name : "Nike JA 1 Vacation",
        img : "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_396,c_limit/e5cdcc09-f9e1-48b9-82b0-470d8aa36cea/air-jordan-4-retro-womens-shoes-s1LPnh.png",
        price : 210,
    },{
        name : "Nike Calm",
        img : "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_396,c_limit/c62e9699-26cb-47b6-9cf3-035ae80f20b9/sabrina-1-exclamaton-basketball-shoes-f8jr2H.png",
        price : 145,
    }]
    return <div className="latest flex col">
        <h1>Famous <span>items</span></h1>
        <div className="latest-wrap flex">
            {
                data.map((item) => {
                    return <div className="card flex" key={item.name} data-after={item.name}>
                        <img src={item.img} alt="" />
                        <div className="menus flex col">
                            <div className="price">
                                <p>${item.price}</p>
                            </div>
                                <div className="icons flex">
                                <BiCartAdd className='icon' />
                            <BiHeart className='icon' />
                            <BiInfoCircle className='icon' />
                            <BiPurchaseTag className='icon' />
                                </div>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
}

export default Famous