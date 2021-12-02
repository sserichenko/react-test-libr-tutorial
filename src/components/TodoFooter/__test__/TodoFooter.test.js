import React from 'react'
import { Router } from 'react-router-dom'
import { render, screen, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history'
import TodoFooter from '../TodoFooter';
import { BrowserRouter } from 'react-router-dom';

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};

describe('TodoFooter', () => {
  it('should render the correct amount of incomplete tasks', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={5} />);
    const pElement = screen.getByText(/5 tasks left/i);
    expect(pElement).toBeInTheDocument();
  });

  it('should render "task" when the number of incomplete tasks is one', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const pElement = screen.getByText(/1 task left/i);
    expect(pElement).toBeInTheDocument();
  });

  it('p element should be truthy when the number of incomplete tasks is one', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const pElement = screen.getByText(/1 task left/i);
    expect(pElement).toBeTruthy();
  });

  it('"task" should be visible when the number of incomplete tasks is one', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const pElement = screen.getByText(/1 task left/i);
    expect(pElement).toBeVisible(); //if it will be opacity: 0 -> test will be broke
  });

  it('should contain p tag with correct text', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const pElement = screen.getByText(/1 task left/i);
    expect(pElement).toContainHTML('p');
  });

  it('should render correct text content', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const pElement = screen.getByText(/1 task left/i);
    expect(pElement).toHaveTextContent('1 task left');
  });

  it('should render correct text content and Be not Falsy', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const pElement = screen.getByText(/1 task left/i);
    expect(pElement).not.toBeFalsy(); // === toBeTruthy
  });

  it('should render correct text content and to exact to textContent', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const pElement = screen.getByText(/1 task left/i);
    expect(pElement.textContent).toBe('1 task left');
  });
  it('should render followers page when click to link', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={3} />);
    
    expect(screen.getByText(/Followers/i)).toBeInTheDocument();
    expect(screen.getByText(/Followers/i).closest('a')).toHaveAttribute('href', '/followers');
    const linkButton = screen.getByText(/Followers/i);
    expect(linkButton.textContent).toBe("Followers");
  });
  // TESTING NAVIGATION WITH LINK

      const renderWithRouter = (component) => {
        const history = createMemoryHistory()
        return { 
        ...render (
        <Router history={history}>
            {component}
        </Router>
        )
      }
    }

    it("should render the Favourites page", () => {
      const { container, getByTestId } = renderWithRouter(<MockTodoFooter />)
      const link = getByTestId('followers-link')
      expect(link).toBeInTheDocument()
    })



});
