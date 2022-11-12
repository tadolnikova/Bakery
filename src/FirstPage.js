function FirstPage ({itemsForSale}){
    return (<div className="products">
            {itemsForSale.map((element => {
                const {id, image} = element;
                return (
                    <div className="product-card" key={id} >
                        <img src={image} width="300px" height="300px" alt="bakery"/>
                    </div>
                )
            }))}
        </div>
    )
}
export default FirstPage;


