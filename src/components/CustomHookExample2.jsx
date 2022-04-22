import React, {useState} from 'react';
import useLocalStorage from "../hooks/useLocalStorage"

const CustomHookExample2 = () => {
    const [task, setTask] = useLocalStorage('task', '');
    const [tasks, setTasks] = useLocalStorage('tasks', []);
    const onSubmit = (e) => {
        e.preventDefault()
        const taskObject = {
            task: task,
            completed: false,
            date: new Date().toLocaleDateString()
        }
        setTasks([...tasks, taskObject])
    }
    return (
        <>
            <form onSubmit={onSubmit} className="w-48">
                <div className="mb-3">
                    <label htmlFor="" className="label">Task</label>
                    <input
                        type="text"
                        className={"input input-bordered w-full"}
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                    />
                </div>
                <button type={'submit'} className={'btn btn-primary'}>Submit</button>
            </form>
            <hr className={'my-3'}/>
            {tasks.map((task) => (<h3 key={task.date}>{task.task}</h3>))}
        </>
    );
};

export default CustomHookExample2;