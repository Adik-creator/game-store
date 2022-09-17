import React from 'react';
import './OrderPage.css'
import {useSelector} from "react-redux";
import {OrderItem} from "../../components/OrderItem";
import {calcTotalPrice} from "../../components/utils";

const OrderPage = () => {
    const items = useSelector(state => state.card.itemsInCard)

    if (items.length < 1){
        return <h1>Ваша карзина пуста 😐</h1>
    }

    return (
        <div className="order-page">
            <div className="order-page-left">
                {items.map(game => <OrderItem game={game}/>)}
            </div>
            <div className="order-page-right">
                <span>{items.length} таваров на сумму {calcTotalPrice(items)} $</span>
            </div>
        </div>
    );
};

export { OrderPage };