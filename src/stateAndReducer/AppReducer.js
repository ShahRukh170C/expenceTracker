export default (state,action) =>{

    switch(action.type){
        case "Delete" :
            return {
                ...state,
                transaction:state.transaction.filter(transaction => (transaction.id !== action.payLoad )) 
            }
        case "Add":
            return{
                ...state,
                transaction:[...state.transaction,action.payLoad]
            }

        default:
            return state;
    }
}