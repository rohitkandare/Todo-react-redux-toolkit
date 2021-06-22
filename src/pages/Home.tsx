import React, { SetStateAction } from 'react';
import { useState } from 'react';
import { ADD_TODO, DELETE_TODO, UPDATE_TODO, IS_EDIT_TODO } from '../reducers/todo'
import { Button, Col, Form } from 'react-bootstrap';
import { connect, useDispatch } from "react-redux";
import { formValidation } from '../services/service'
import './page.css'

function Home({ todo, isEditTodo, statusData, formError }: any) {
  const todoArr: any = []
  const [data, setData] = useState({ taskName: '', date: '',  status: 'Inactive' })
  const dispatch = useDispatch()

  const handleChange = (event: { target: { name: string; value: string; }; }) => {
    const { name, value } = event.target
    setData({
      ...data,
      [name]: value
    })
  }

  const addTodo = (event: { preventDefault: () => void; }) => {
    event.preventDefault()
    if (formValidation(data, dispatch)) {
      dispatch(ADD_TODO(data))
    }
  }

  const deleteTodo = (id: number) => {
    todo.filter((value: string, index: number) => {
      if (index !== id) {
        todoArr.push(value)
      }
    })
    dispatch(DELETE_TODO(todoArr))
  };

  const editeTodo = (id: number) => {
    todo.filter((value: SetStateAction<{ taskName: string; date: string;  status: string }>, index: number) => {
      if (index === id) {
        setData(value)
      }
      if (index !== id) {
        todoArr.push(value)
      }
    })
    dispatch(IS_EDIT_TODO())
    dispatch(UPDATE_TODO(todoArr))
  };

  return (
    <div className="tableSetting">
      { isEditTodo &&
        <Form onSubmit={addTodo}>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridTaskName">
              <Form.Label>Task Name</Form.Label>
              <Form.Control type="text"
                name='taskName'
                value={data.taskName}
                onChange={handleChange}
                placeholder="Enter Name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridDate">
              <Form.Label>date</Form.Label>
              <Form.Control type="text"
                name='date'
                value={data.date}
                onChange={handleChange}
                placeholder="" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Status</Form.Label>
              <Form.Control as="select"
                value={data.status}
                name='status'
                onChange={handleChange}>
                {statusData.map((data: string, index: number) => {
                  return (<option key={index}>{data}</option>)
                })}
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Button variant="primary" type="submit">
            Submit
         </Button>
          <p className="formError">{formError}</p>
        </Form>
      }
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th scope="col">SNO.</th>
            <th scope="col">Task Name</th>
            <th scope="col">Date</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {todo.map((data: { taskName: string; date: string; status: string; }, index: number) => {
            return (<tr key={index}>
              <th scope="row" key={index}>{index + 1}</th>
              <td>{data.taskName}</td>
              <td>{data.date}</td>
              <td>{data.status}</td>
              <td>
                <div className="btn-group">
                  <button className="btn btn-warning mr-2" onClick={() => { editeTodo(index) }}>Edit</button>
                  <button className="btn btn-danger mr-2" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) deleteTodo(index) } }>Delete</button>
                </div>
              </td>
            </tr>)
          })}
        </tbody>
      </table>
    </div>
  );
}

const mapStateToprops = (state: { Todo: { data: string; isEditTodo: boolean; statusData: string; formError: string; }; }) => ({
  todo: state.Todo.data,
  isEditTodo: state.Todo.isEditTodo,
  statusData: state.Todo.statusData,
  formError: state.Todo.formError
})

export default connect(mapStateToprops)(Home);
