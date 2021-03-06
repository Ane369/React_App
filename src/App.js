import './App.css';
import Timer from './timerApp/Timer';
import TodoAppHome from './toDoApp/TodoAppHome';

function App() {
  return (
    <div className="App">
      {/* Timer App */}
      <Timer/>

      {/*ToDo List App*/}
      <TodoAppHome/>
    </div>
  );
}

export default App;
