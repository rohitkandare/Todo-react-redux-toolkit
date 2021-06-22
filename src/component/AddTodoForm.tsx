import React, { useState } from 'react'
import { Form, Col, Button } from 'react-bootstrap'
import { connect, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { ADD_TODO } from '../reducers/todo'
import { formValidation } from '../services/service'
import '../pages/page.css'

function AddTodoForm({ formError }: any) {
  const [data, setData] = useState({ taskName: '', date: '', status: 'Inactive' })
  const dispatch = useDispatch()
  const history = useHistory()
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

  return (
    <div className="tableSetting">
      <Form onSubmit={addTodo}>
        <Form.Row>
          <Form.Group as={Col} >
            <Form.Label>TaskName</Form.Label>
            <Form.Control type="text"
              name='taskName'
              id='name'
              value={data.taskName}
              onChange={handleChange}
              placeholder="Enter Task" />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Date</Form.Label>
            <Form.Control type="date"
              id='date'
              name='date'
              value={data.date}
              onChange={handleChange}
              placeholder="Enter Last Name" />
          </Form.Group>
        </Form.Row>
        <Button variant="primary" type="submit">
          Submit
    </Button>
        <Button variant="info" className="ml-2 btn btn-info" onClick={() => { history.push('/') }}>
          Back To Home
    </Button>
        <p className="formError">{formError}</p>
      </Form>
    </div>
  )
}

const mapStateToprops = (state: { Todo: { formError: string } }) => ({
  formError: state.Todo.formError
})

export default connect(mapStateToprops)(AddTodoForm);
