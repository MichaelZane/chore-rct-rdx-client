import {createSlice} from "@redux/toolkit"

const initialState = [
    {
    id: null,
    child_id: null,
    name: "",
    description: "",
    photo_obj: "",
    comments: "",
    completed: false,
    score: null,
    bonus:  null,
    streak: null,
    }
]
const choreSlice = createSlice({
    name: 'chore',
    initialState,
    reducers: {
        getChore: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(id, child_id, name, description) {
                return {
                    payload: {
                        id,
                        child_id,
                        name,
                        description
                    }
                }
            }
            
        }
    }
})

export const {
    getChore,
}

export default choreSlice.reducer