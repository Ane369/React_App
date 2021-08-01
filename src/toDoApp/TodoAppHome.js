import { Component } from "react";
import InputForm from "./InputForm";

class TodoAppHome extends Component {
        render() {
            return (
            <>
                <h1>ToDoList App</h1>
                {/*Input form for the todo list App */}
                <InputForm/>
            </>
                )
        }
}
export default TodoAppHome;