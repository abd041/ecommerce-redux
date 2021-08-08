import { Add_to_Cart } from "../Constants/Constants"

const InitialState = {
    data:[]
}

export default function ReducerFunction(InitialState, action) {
    if (action.type === Add_to_Cart) {
        return {
            ...InitialState,
            data: action.data
        }

    }
    else {
        return InitialState;
    }
}