//import {useState} from 'react';
import {moneyFormat} from '../helpers';

function Product({product,basket,setBasket, money, total}) {

    const basketItem = basket.find(item => item.id === product.id)

    const addBasket =() => {
        const checkBasket = basket.find(item => item.id === product.id)
        //Ürün daha önce eklenmiş
        if(checkBasket){
            checkBasket.amount +=1
            setBasket([...basket.filter(item => item.id !== product.id), checkBasket])
        } else {
            setBasket([...basket, {
                id:product.id,
                amount:1
            }])
        }
    }
    const removeBasket =() => {
        const currentBasket = basket.find(item => item.id === product.id)
        const basketWithoutCurrent = basket.filter(item => item.id !== product.id)
        currentBasket.amount -=1
        if(currentBasket.amount===0){
            setBasket([...basketWithoutCurrent])
        } else {
            setBasket([...basketWithoutCurrent,currentBasket])
        }
        
    }
    return(
        <>
            <div className="product">
                <div className="image">
                    <img src={product.image} alt={product.title} />
                </div>
                <div className="product-info">
                    <h5>{product.title}</h5>
                    <div className="price">
                        ${moneyFormat(product.price)}
                    </div>
                    <div className="actions">
                        <button className="remove-btn" disabled={!basketItem} onClick={removeBasket}>-</button>
                        <span className="amount" data-amount={!basketItem}  >{(basketItem && basketItem.amount) || 0 }</span>
                        <button className="buy-btn" data-amount={!basketItem} disabled={total+product.price > money} onClick={addBasket}>{(basketItem && '+') || 'Sepete Ekle' }</button>
                    </div>
                </div>
                
            </div>
            
        </>
    )
}

export default Product