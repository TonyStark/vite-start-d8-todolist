function TodoListUI({addTask,tasks,removeTasks,toggleTask}) {
    return ( 
        <main>
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-6">
                        <div className="todolist-card">
                            <div className="title py-2 text-center" >
                                <span className="fs-3 fw-bold">TODO LIST</span>
                            </div>
                            <div className="list-body mt-4 pt-2 pb-4 position-relative">
                                {
                                tasks.map((task)=>{
                                    return (
                                        <div className="per-task row px-4 py-2" key={task.id}>
                                            <div className="col-auto d-flex justify-content-center align-items-center">
                                                <input className="form-check-input" type="checkbox" checked={task.isCompleted} onChange={()=>toggleTask(task.id)} />
                                            </div>
                                            <div className="col d-flex align-items-center">
                                            <span className={`fs-5 ${task.isCompleted ? 'text-secondary text-decoration-line-through' : 'text-secondary'}`}>
                                                {task.task}
                                            </span>
                                            </div>
                                            <div className="col-auto d-flex align-items-center">
                                                <button key={task.id} onClick={()=>removeTasks(task.id)} className="trash-btn btn text-secondary fs-5">
                                                    <i className='bx bxs-trash'></i>
                                                </button>
                                            </div>
                                        </div>
                                    )
                                })
                                }
                                
                                
                                
                                <div className="floating-button">
                                    <button className="btn fs-5" onClick={addTask}>
                                        <i className='bx bx-plus align-middle'></i> Add Task
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default TodoListUI;