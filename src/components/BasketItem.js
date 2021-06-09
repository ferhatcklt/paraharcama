

function BasketItem({item, product}){
    return (
        <>
            <li key={item.id}>
                {product.title} <span>x {item.amount}</span>
            </li>
        </>
    )
}

export default BasketItem