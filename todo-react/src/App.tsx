import { useEffect, useState } from 'react';

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((data: Todo[]) => {
        setTodos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Ошибка при загрузке данных:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Загрузка задач...</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>Список задач</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            #{todo.id}: {todo.title} —{' '}
            <strong>{todo.completed ? '✅ Выполнено' : '❌ Не выполнено'}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
