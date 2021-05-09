import {
    MOSTRAR_ALERTA,
    OCULTAR_ALERTA
} from '../types';

// cada reducer tiene su state
const initialstate = {
    alerta: null
}

export default function(state = initialstate, action) {
    switch(action.type) {
        case MOSTRAR_ALERTA:
            return {
            ...state,
            alerta: action.payload
         }
    case OCULTAR_ALERTA:
        return {
            ...state,
            alerta: null
        }
        default:
            return state;
    }
}