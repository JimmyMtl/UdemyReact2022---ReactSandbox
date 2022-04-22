import React, {useCallback, useState} from 'react';

const Button = React.memo(({addTask}) => {
        return <div>
            <button className={'btn btn-primary btn-md'} onClick={() => addTask()}>Add Task</button>
        </div>
    }
)

const UseCallbackExample = () => {

    const [tasks, setTasks] = useState([])

    const addTask = useCallback(() => {
        setTasks((prevState => [...prevState, 'Some Task']))
    },[setTasks])

    return (
        <div>
            <Button addTask={addTask}/>
            {tasks.map((task, key) => (
                <p key={key}>{task}</p>
            ))}
        </div>
    );
};

export default UseCallbackExample;