import { 
    LOGIN_USER, 
    IS_LOGGED_IN, 
    SIGNOUT_USER, 
    CREATE_DRAFT, 
    UPDATE_DRAFT_LOCATION,
    DELETE_DRAFT,
    GET_PINS,
    CREATE_PIN,
    SET_PIN,
    DELETE_PIN,
    CREATE_COMMENT,
} from './actionTypes';

export default function reducer(state, action) {
    switch(action.type) {
        case LOGIN_USER:
            return { ...state, currentUser: action.payload }
        case IS_LOGGED_IN:
            return { ...state, isAuth: action.payload }
        case SIGNOUT_USER:
            return {
                ...state, 
                currentUser: null,
                isAuth: false
            }
        case CREATE_DRAFT:
            return {
                ...state,
                currentPin: null,
                draft: {
                    latitude: 0,
                    longitude: 0
                }
            }
        case UPDATE_DRAFT_LOCATION:
            return {
                ...state,
                draft: {
                    latitude: action.payload.latitude,
                    longitude: action.payload.longitude
                }
            }
        case DELETE_DRAFT:
            return {
                ...state,
                draft: null
            }
        case GET_PINS:
            return {
                ...state,
                pins: action.payload
            }
        case CREATE_PIN:
            const newPin = action.payload;
            const prevPins = state.pins.filter(pin => pin._id !== newPin._id);
            return {
                ...state,
                pins: [...prevPins, newPin]
            }
        case SET_PIN:
            return {
                ...state,
                currentPin: action.payload,
                draft: null
            }
        case DELETE_PIN:
            const deletedPin = action.payload;
            const filteredPins = state.pins.filter(pin => {
                return pin._id !== deletedPin._id
            })
            if (state.currentPin) {
                const isCurrentPin = deletedPin._id === state.currentPin._id;
                if (isCurrentPin) {
                    return {
                        ...state,
                        pins: filteredPins,
                        currentPin: null
                    };
                }
            }
            return {
                ...state,
                pins: filteredPins
            };
        case CREATE_COMMENT:
            const updatedCurrentPin = action.payload;
            // find and replace
            const updatedPins = state.pins.map(pin => 
                pin._id === updatedCurrentPin._id ? updatedCurrentPin : pin
            )
            return {
                ...state,
                pins: updatedPins,
                currentPin: updatedCurrentPin
            }
        default:
            return state;
    }
};