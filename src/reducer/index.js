const producerReducer = {
    init :{
        name: ''
    },
    reducer: (state,action)=>{
        switch (action.type) {
            case 'setName':
                return {
                    ...state,
                    name: action.payload
                }
            default:
                break;
        }
    }
}

export {producerReducer}