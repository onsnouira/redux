import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import {
  addTodo,
  deleteTodo,
  completeTodo,
  updateTodo,
} from "./actions/todoaction";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [editTask, setEditTask] = useState("");
  const [task, setTask] = useState("");
  const [filter, setFilter] = useState("all");
  const todos = useSelector((state) => state.todoReducer);
  const dispatch = useDispatch();

  return (
    <div className="container">
    <center>
      <input
        type="text"
        placeholder="add task ..."
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={() => dispatch(addTodo(task))}>add task</button>
      <button onClick={() => setFilter("all")}>all</button>
      <button onClick={() => setFilter("done")}>done</button>
      <button onClick={() => setFilter("undone")}>undone</button>

      {filter === "all"
        ? todos.map((el) => (
            <div>
              <h2>{el.title}</h2>
              <button onClick={() => dispatch(deleteTodo(el.id))}>
                delete
              </button>
              <Button variant="primary" onClick={handleShow}>
                Edit
              </Button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                  <input
                    type="text"
                    placeholder="edit task ..."
                    value={editTask}
                    onChange={(e) => setEditTask(e.target.value)}
                  />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => {
                      dispatch(updateTodo(editTask, el.id));
                      handleClose();
                    }}
                  >
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
              <button onClick={() => dispatch(completeTodo(el.id))}>
                {" "}
                {el.complete ? "done" : "undone"}{" "}
              </button>
            </div>
          ))
        : filter === "done"
        ? todos
            .filter((el) => el.complete === true)
            .map((el) => (
              <div>
                <h2>{el.title}</h2>
                <button onClick={() => dispatch(deleteTodo(el.id))}>
                  delete
                </button>
                <Button variant="primary" onClick={handleShow}>
                  Edit
                </Button>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Body>
                    <input
                      type="text"
                      placeholder="edit task ..."
                      value={editTask}
                      onChange={(e) => setEditTask(e.target.value)}
                    />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button
                      variant="primary"
                      onClick={() => {
                        dispatch(updateTodo(editTask, el.id));
                        handleClose();
                      }}
                    >
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
                <button onClick={() => dispatch(completeTodo(el.id))}>
                  {" "}
                  {el.complete ? "done" : "undone"}{" "}
                </button>
              </div>
            ))
        : todos
            .filter((el) => el.complete === false)
            .map((el) => (
              <div>
                <h2>{el.title}</h2>
                <button onClick={() => dispatch(deleteTodo(el.id))}>
                  delete
                </button>
                <Button variant="primary" onClick={handleShow}>
                  Edit
                </Button>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Body>
                    <input
                      type="text"
                      placeholder="edit task ..."
                      value={editTask}
                      onChange={(e) => setEditTask(e.target.value)}
                    />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button
                      variant="primary"
                      onClick={() => {
                        dispatch(updateTodo(editTask, el.id));
                        handleClose();
                      }}
                    >
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
                <button onClick={() => dispatch(completeTodo(el.id))}>
                  {" "}
                  {el.complete ? "done" : "undone"}{" "}
                </button>
              </div>
            ))}
            </center>
    </div>
  );
}

export default App;
