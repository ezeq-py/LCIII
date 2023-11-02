import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import TasksList from '../tasksList/TasksList';
import AddTask from '../addTask/AddTask';

const toDoList = [
    {
        id: 1,
        title: "Hacer una app de listas",
        description: "Gabi se pone exigente con los ejercicios y nos pidio hacer una app de to do list, maldito gabi",
        completed: false
    }
]


const Dashboard = ({isLoggedInHandler}) => {
    const [tasks, setTasks] = useState(toDoList)



    const onClickButtonHandler = () => {
        isLoggedInHandler(false);
    }

    const setTasksHandler = (value) => {
        setTasks(value);
        console.log(tasks);
    }

    return (
        <div>
            <Row>
                <Col className='d-flex justify-content-end'><Button onClick={onClickButtonHandler} className="m-3" variant="primary">Cerrar sesión</Button></Col>
            </Row>
            <AddTask setTasksHandler = {setTasksHandler}
            tasks = {tasks}/>

            <TasksList toDoList={tasks} setTasksHandler = {setTasksHandler}/>
            
        </div>
    )
}

export default Dashboard