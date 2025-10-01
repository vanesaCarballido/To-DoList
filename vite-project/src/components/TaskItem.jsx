import React, { useMemo } from "react";

function TaskItem ({ task, onComplete, onDelete}){ 
    return( <div className="taskTextButton">
        {task.text}
        <span>
            <button onClick={()=> onComplete(task.id)}>Completada</button>
            <button onClick={()=> onDelete(task.id)}>Borrar</button>
         </span>
    </div>
)};

export default React.memo(TaskItem);
