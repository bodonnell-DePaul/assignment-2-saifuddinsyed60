import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';
import ToDoCreator from './ToDoCreator';
import ViewPort from './ViewPort';

describe('TodoList Component', () => {
 


  

  test('renders form elements', () => {
    render(<ToDoCreator />);
    const todoInput = screen.getByPlaceholderText(/Add todo item/i);
    const dueDateInput = screen.getByLabelText(/Due Date/i);
    const addButton = screen.getByText(/Add Todo/i);

    expect(todoInput).toBeInTheDocument();
    expect(dueDateInput).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
  });
});