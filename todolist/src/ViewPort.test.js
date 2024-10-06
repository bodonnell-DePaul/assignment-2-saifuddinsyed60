import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';
import ToDoCreator from './ToDoCreator';
import ViewPort from './ViewPort';

describe('TodoList Component', () => {
  

  test('renders the title', () => {
    render(<ViewPort />);
    const titleElement = screen.getByText(/Assignment 2: Syed's ToDo List/i);
    expect(titleElement).toBeInTheDocument();
  });
  

 

  

 


  



   });

