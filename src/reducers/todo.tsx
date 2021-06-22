import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    data: [
        {
            taskName: "Today Task",
            date: "2021-06-25",
            status: "Inactive"
        }
    ],
    isEditTodo: false,
    statusData: ["Inactive", "Active"],
    formError: ""
}

const todoSlice = createSlice({
    name: 'todos',
    initialState: initialState,
    reducers: {
        ADD_TODO(state, { payload }) {
            state.data.push(payload)
            state.isEditTodo = false
        },
        DELETE_TODO(state, { payload }) {
            state.data = payload
        },
        UPDATE_TODO(state, { payload }) {
            state.data = payload
        },
        IS_EDIT_TODO(state) {
            state.isEditTodo = true
        },
        IS_FORM_ERROR(state, { payload }) {
            state.formError = payload
        }
    },
})

export const { ADD_TODO, DELETE_TODO, UPDATE_TODO, IS_EDIT_TODO, IS_FORM_ERROR } = todoSlice.actions
export default todoSlice.reducer
