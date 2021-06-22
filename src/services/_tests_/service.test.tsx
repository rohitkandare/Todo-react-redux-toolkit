import { todovalidData, todoMissingValue } from './testData.json'
import { formValidation } from '../service'

describe('Checking valid data', () => {
  it('send invalid data then it return false', () => {
    const dispatch = jest.fn()
    const data = formValidation(todoMissingValue, dispatch)
    expect(data).toBe(false)
  });

  it('send valid data then it return true', () => {
    const dispatch = jest.fn()
    const data = formValidation(todovalidData, dispatch)
    expect(data).toBe(true)
  });
});
