import React from 'react'

import "../tasksList/taskList.css"

import Toast from 'react-bootstrap/Toast';
import Button from 'react-bootstrap/Button';

const TasksList = ({ toDoList, setTasksHandler }) => {


    return (
        <div>
            {toDoList.length === 1 ? "no tenes tareas papito, agrega alguna" : toDoList.map((task) => {
                return <Toast className={task.completed ? 'completed-task' : ''} key={task.id} onClose={() => setTasksHandler(toDoList.filter(t => t.id !== task.id))}> {/*asi se eliminan las cosas papa*/}
                    <Toast.Header className='d-flex justify-content-between' >
                        <strong className="me-auto">{task.title}</strong>
                    </Toast.Header>
                    <Toast.Body>{task.description}</Toast.Body>
                    <Button variant="secondary" onClick={() => setTasksHandler(toDoList.map(t => t.id === task.id ? {...t, completed: !t.completed } : t))}>{task.completed ? 'Desmarcar' : 'Marcar como Completada'}</Button> {/*we made it, we make it wooork */}
                </Toast>
            })}
        </div>
    )
}

export default TasksList