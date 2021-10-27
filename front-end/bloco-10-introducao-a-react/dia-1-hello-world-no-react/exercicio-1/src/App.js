import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  const duties = ['Lavar a louça', 'Tomar banho', 'Estudar', 'Trabalhar'];
  return (
    <ol>
      {duties.map(duty => Task(duty))}
    </ol>
  );
}

export default App;
