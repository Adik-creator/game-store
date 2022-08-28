import React from 'react';
import {calcTotalPrice} from "../utils";
import {Button} from "../button";
import './cart-menu.css'
import {GameTitle} from "../GameTitle";

function CartMenu({items, onClick}) {
    return (
        <div className="cart-menu">
            <div className="cart-menu-games-list">
                {items.length > 0 ? items.map(game => <GameTitle key={game.title} game={game}/>) : "Корзина пуста"}
            </div>
            {
                items.length > 0 ?
                    <div className="cart-menu-arrange">
                        <div className="cart-menu-total-price">
                            <span>Итого: </span>
                            <span>{calcTotalPrice(items)} $</span>
                        </div>
                        <Button type="primary" size="m" onClick={onClick}>
                            Оформить заказ
                        </Button>
                    </div> : null
            }
        </div>
    );
}

export {CartMenu};