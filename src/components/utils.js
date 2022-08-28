export const calcTotalPrice = (items) => {
    return items.reduce((total, game) => total + game.price, 0)
}

