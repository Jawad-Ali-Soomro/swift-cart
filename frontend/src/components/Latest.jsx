import '../styles/latest.scss'

const Latest = () => {
    const data = [{
        name : "Nike Shoes",
        img : "https://pluspng.com/img-png/shoes-png-sneaker-png-transparent-image-2500.png",
        price : 10,
    },{
        name : "Nike Aero Max",
        img : "https://pluspng.com/img-png/shoes-png-nike-shoes-transparent-background-800.png",
        price : 12,
    },{
        name : "Nike Air Jordan",
        img : "https://pluspng.com/img-png/shoes-png-adidas-shoes-png-picture-png-image-1500.png",
        price : 15,
    },{
        name : "Sneakers Skate",
        img : "https://e7.pngegg.com/pngimages/382/622/png-clipart-sneakers-skate-shoe-nike-one-nike-shoe-purple-fashion-thumbnail.png",
        price : 20,
    },{
        name : "Nike Air Force",
        img : "https://e7.pngegg.com/pngimages/723/143/png-clipart-shoe-nike-free-air-force-nike-shoes-image-file-formats-fashion-thumbnail.png",
        price : 20,
    },{
        name : "Shoe Nike Air Max",
        img : "https://e7.pngegg.com/pngimages/820/94/png-clipart-shoe-nike-air-max-sneakers-running-running-shoes-orange-outdoor-shoe-thumbnail.png",
        price : 20,
    }]
    return <div className="latest flex col">
        <h1>Latest <span>Arrivals</span></h1>
        <div className="main-wrap flex">
            {
                data.map((item) => {
                    return <div className="card flex" key={item.name}>
                        <img src={item.img} alt="" />
                    </div>
                })
            }
        </div>
    </div>
}

export default Latest