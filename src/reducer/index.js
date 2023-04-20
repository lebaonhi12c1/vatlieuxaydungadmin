const producerReducer = {
    init: {
        name: '',
        address: '',
        phone: '',
        fax: '',
    },
    reducer: (state, action) => {
        switch (action.type) {
            case 'setName':
                return {
                    ...state,
                    name: action.payload
                }
            case 'setAddress':
                return {
                    ...state,
                    address: action.payload
                }
            case 'setPhone':
                return {
                    ...state,
                    phone: action.payload
                }
            case 'setFax':
                return {
                    ...state,
                    fax: action.payload
                }
            default:
                break;
        }
    }
}

const categoryReducer = {
    create: {
        init: {
            name: ''
        },
        reducer: (state, action) => {
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
    ,
    update: {
        init: {
            _id: '',
            name: ''
        },
        reducer: (state, action) => {
            switch (action.type) {
                case 'setName':

                    return {
                        ...state,
                        name: action.payload
                    }
                case 'setId':

                    return {
                        ...state,
                        _id: action.payload
                    }
                default:
                    break;
            }
        }
    }
}

export { producerReducer, categoryReducer }