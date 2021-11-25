import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import Item from '../Item';

describe('Testando input', () => {
  render(<App />);
  const taskInput = screen.getByLabelText('Tarefa:');
  const taskLabel = screen.getByText('Tarefa:');

  test('Verificando se o label e o input existem no documento', () => {
    expect(taskInput).toBeInTheDocument();
    expect(taskLabel).toBeInTheDocument();
  });

  test('Verificando o tipo do input', () => {
    expect(taskInput.type).toBe('text');
  });
});

describe('Testando botão', () => {
  test('Existe um botão para adicionar a tarefa', () => {
    render(<App />);
    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });

  test('Há o texto "Adicionar" dentro do botão', () => {
    render(<App />);
    const button = screen.getByRole('button');

    expect(button.value).toBe('Adicionar');
  });

  test('Ao clicar no botão, a tarefa digitada é salva', () => {
    render(<App />);
    const taskInput = screen.getByLabelText('Tarefa:');
    const button = screen.getByRole('button');

    const TASK_NAME = 'Lavar o carro';

    userEvent.type(taskInput, TASK_NAME);
    expect(taskInput.value).toBe(TASK_NAME);

    userEvent.click(button);
    expect(taskInput.value).toBe('');

    const task = screen.getByText(TASK_NAME);
    expect(task).toBeInTheDocument();
  });
});

describe('Testando a aplicação', () => {
  test('Adiciona múltiplas tarefas à lista', () => {
    render(<App />);
    const taskInput = screen.getByLabelText('Tarefa:');
    const button = screen.getByRole('button');

    userEvent.type(taskInput, 'Lavar a roupa');
    userEvent.click(button);

    userEvent.type(taskInput, 'Dever de casa');
    userEvent.click(button);

    userEvent.type(taskInput, 'Limpar o quarto');
    userEvent.click(button);

    const task1 = screen.getByText('Lavar a roupa');
    const task2 = screen.getByText('Dever de casa');
    const task3 = screen.getByText('Limpar o quarto');

    expect(task1).toBeInTheDocument();
    expect(task2).toBeInTheDocument();
    expect(task3).toBeInTheDocument();
  });

  test('O componente Item é renderizado se invocado recebendo uma string', () => {
    render(<Item content="Ir no banco" />);
    const task = screen.getByText('Ir no banco');

    expect(task).toBeInTheDocument();
  });
});
