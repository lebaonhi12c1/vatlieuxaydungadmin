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
const productReducer = {
    create: {
        init: {
            name: '',
            quantity: 1,
            price: 0,
            image: 'https://img.freepik.com/free-vector/colorful-new-product-composition-with-flat-design_23-2147903423.jpg?w=740&t=st=1681799993~exp=1681800593~hmac=7c25ec3ec89cdaac34827ce92b34772d77857af3e585f55a0423871a9f22460d',
            categoryid: '',
            producerid: '',
        },
        reducer: (state, action) => {
            switch (action.type) {
                case 'setName':
                    return {
                        ...state,
                        name: action.payload,
                    }
                case 'setQuantity':
                    return {
                        ...state,
                        quantity: action.payload,
                    }
                case 'setPrice':
                    return {
                        ...state,
                        price: action.payload,
                    }
                case 'setImage':
                    return {
                        ...state,
                        image: action.payload,
                    }
                case 'setCategoryid':
                    return {
                        ...state,
                        categoryid: action.payload,
                    }

                case 'setProducerid':
                    return {
                        ...state,
                        producerid: action.payload,
                    }
                default:
                    break;
            }
        }
    },
    update: {
        init: {
            _id: '',
            name: '',
            quantity: 1,
            price: 0,
            image: 'https://img.freepik.com/free-vector/colorful-new-product-composition-with-flat-design_23-2147903423.jpg?w=740&t=st=1681799993~exp=1681800593~hmac=7c25ec3ec89cdaac34827ce92b34772d77857af3e585f55a0423871a9f22460d',
            categoryid: '',
            producerid: '',
        },
        reducer: (state, action) => {
            switch (action.type) {
                case 'setId': {
                    return {
                        ...state,
                        _id: action.payload
                    }
                }
                case 'setName':
                    return {
                        ...state,
                        name: action.payload,
                    }
                case 'setQuantity':
                    return {
                        ...state,
                        quantity: action.payload,
                    }
                case 'setPrice':
                    return {
                        ...state,
                        price: action.payload,
                    }
                case 'setImage':
                    return {
                        ...state,
                        image: action.payload,
                    }
                case 'setCategoryid':
                    return {
                        ...state,
                        categoryid: action.payload,
                    }

                case 'setProducerid':
                    return {
                        ...state,
                        producerid: action.payload,
                    }
                default:
                    break;
            }
        }
    }
}
export { producerReducer, categoryReducer,productReducer }