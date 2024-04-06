import '../styles/latest.scss'

const Latest = () => {
    const data = [{
        name : "Nike Shoes",
        img : "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_396,c_limit/8d2fe356-f212-4c5b-865a-4e3409effdaf/zoom-vomero-5-mens-shoes-MgsTqZ.png",
        price : 150,
    },{
        name : "Nike Zoom Vomero",
        img : "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_523,c_limit/8d2fe356-f212-4c5b-865a-4e3409effdaf/zoom-vomero-5-mens-shoes-MgsTqZ.png",
        price : 160,
    },{
        name : "Nike Air Jordan 3",
        img : "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_523,c_limit/96cd1b99-06c0-4981-9661-e6465c93725c/air-jordan-3-retro-green-glow-mens-shoes-Xv0sqM.png",
        price : 140,
    },{
        name : "Nike Air Max 1",
        img : "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_523,c_limit/80aedd22-9297-4253-ae6d-f935edbbf654/air-max-1-mens-shoes-2C5sX2.png",
        price : 190,
    },{
        name : "Nike JA 1 Vacation",
        img : "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_523,c_limit/60bfe3b9-097d-4857-aad2-2ecec8850f63/ja-1-vacation-basketball-shoes-bCx2W3.png",
        price : 120,
    },{
        name : "Nike Calm",
        img : "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_523,c_limit/a19bf82f-42c5-4511-8e97-7585040756b7/calm-mens-mules-m5tTKn.png",
        price : 60,
    }]
    return <div className="latest flex col">
        <h1>Latest <span>Arrivals</span></h1>
        <div className="main-wrap flex">
            {
                data.map((item) => {
                    return <div className="card flex" key={item.name} data-after={item.name}>
                        <img src={item.img} alt="" />
                        <div className="price">
                            <p>${item.price}</p>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
}

export default Latest