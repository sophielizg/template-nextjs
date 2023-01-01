import React, { useState } from 'react';
import { Col, Row, TextInput } from 'src/components';

export type AddTodoFn = (todo: string) => void;

export const TodoForm: React.FC<{ addTodo: AddTodoFn }> = ({ addTodo }) => {
  const [todo, setTodo] = useState('');

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key == 'Enter') {
      addTodo(todo);
      setTodo('');
    }
  };

  return (
    <Row>
      <Col>
        <TextInput
          placeholder="Add a TODO"
          type="text"
          value={todo}
          onKeyDown={handleKeyDown}
          onChange={(e) => setTodo(e.target.value)}
        />
      </Col>
    </Row>
  );
};
