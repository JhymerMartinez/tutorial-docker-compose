import React, { useEffect, useState } from 'react';
import { Typography } from 'antd';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

import axios from 'axios';

const { Title } = Typography;

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:7000';

const Todo = () => {

  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/api/todos`).then((resp) => {
      setTodos(resp.data);
    });
  }, []);

  const onFinish = (values, form) => {
    setLoading(true);
    axios.post(`${API_URL}/api/todos`, values).then((resp) => {
      form.resetFields();
      const newTodo = resp.data;
      setTodos([
        ...todos,
        newTodo
      ]);
      setLoading(false);
    });
  };

  const onSelectClose = (item) => {
    axios.delete(`${API_URL}/api/todos/${item._id}`).then((resp) => {
      const status = resp.data;
      if (status.ok === 1) {
        const index = todos.indexOf(item);
        todos.splice(index, 1);
        setTodos([
          ...todos,
        ]);
      }
    });
  }

  return (
    <div style={{ padding: '1rem' }}>
      <Title>Todo App</Title>
      <section>
        <TodoForm onFinish={onFinish} loading={loading}></TodoForm>
      </section>
      <section>
        <TodoList todos={todos} onSelectClose={onSelectClose}></TodoList>
      </section>
    </div>
  );
}

export default Todo;
