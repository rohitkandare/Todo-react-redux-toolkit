import { Dispatch } from '@reduxjs/toolkit'
import { IS_FORM_ERROR } from '../reducers/todo'

export function formValidation(data: { taskName: string; date: string;  status: string; }, dispatch: Dispatch<any>) {
  if (!data.taskName) {
    dispatch(IS_FORM_ERROR("Please Enter Task"))
    return false
  }
  if(!data.date){
    dispatch(IS_FORM_ERROR("Please Enter Date"))
    return false
  }
  dispatch(IS_FORM_ERROR(""))
  return true
}
