const carListActions = {
    addFavorite: "addFavorite",
    removeFavorite: "removeFavorite",
    emptyFavorite: "emptyFavorite",
    removeAllFavorite: "removeAllFavorite",
    addBulkToFavorite: "addBulkToFavorite",
}

function carReducer (carList=[], {type, car}) {
    switch(type){
        case carListActions.addFavorite:
            return [...carList, car];
        case carListActions.addBulkToFavorite:
            console.log(car)
            return [...carList, ...car];
        case carListActions.removeFavorite:
            let newList= carList.slice()
            for (let favorite of newList){
                if(favorite.year === car.year){
                    newList.splice(newList.indexOf(favorite),1)
                    return newList
                }
            }
            return newList
        case carListActions.removeAllFavorite:
            return carList.filter((favorite)=>car.year!== favorite.year)

        case carListActions.emptyFavorite:
            return []
        default:
            throw new Error('I am not a teapot!')
    }
}

export{
    carReducer,
    carListActions
}