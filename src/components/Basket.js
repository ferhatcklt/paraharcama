//import {useState} from 'react'
import { moneyFormat } from '../helpers';
import BasketItem from './BasketItem';

function Basket({basket, products,total,resetBasket}){
    
    return (
        <>
            <div className="basket-container container">
                <h3>Alışveriş Detayları</h3>
                <ul>
                    {
                        basket.map(item => (
                            <BasketItem item={item} product={products.find(p => p.id === item.id)} />
                        ))
                    }
                </ul>
                <div className="total">
                    Toplam: ${moneyFormat(total)}
                </div>
                <button className="basket-reset" onClick={resetBasket}>Sepeti Temizle</button>
            </div>
        </>
    )
}

 export default Basket