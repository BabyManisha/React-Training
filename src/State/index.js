const {createStore} = require("redux")

const initialState = {
    numOfBooks: 10
}

const buyBooks = () => {
    return {
        type: 'BUY_BOOK'
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'BUY_BOOK': 
            return {numOfBooks: state.numOfBooks - 1} 
        default:
            return state
    }
}

const store = createStore(reducer);
console.log(store);

store.subscribe(() => {console.log(store.getState())})
store.dispatch(buyBooks())
store.dispatch(buyBooks())
store.dispatch(buyBooks())
store.dispatch(buyBooks())