import { useState } from "react";

const Tasks = () => {

    const [tasks, setTasks] = useState(
        [
            {
                id: 1,
                text: "Doctor's Appointment",
                day: "Feb 5th at 2pm",
                reminder: true,
            },
            {
                id: 2,
                text: "Meeting at school",
                day: "Feb 6th at 1pm",
                reminder: true,
            },
            {
                id: 3,
                text: "Food Shopping",
                day: "Feb 5th at 2pm",
                reminder: false,
            },
        ]
    );

    return (
        <>
            {tasks.map((task) => (
                <h3 key={task.id}>{task.text}</h3>
            ))}
        </>
    );
};

export default Tasks;
