import { useReducer, useState } from "react";
import Modal from "./components/Modal";
import { data } from "./store/data";

const modalContent = {
  Add: "Add new student",
  "Close modal": "",
  "Add empty": "Please enter student's name",
};

const initState = {
  students: data,
  modalOpen: false,
  modalContent: "Hello World",
};

const ACTIONS = {
  add: "Add",
  closeModal: "Close modal",
  addEmpty: "Add empty",
  addPayload(payload) {
    return {
      type: this.add,
      payload,
    };
  },
  closeModalPayload() {
    return {
      type: this.closeModal,
    };
  },
  addEmptyPayload() {
    return {
      type: this.addEmpty,
    };
  },
};

const reducer = function (state, action) {
  if (action.type === ACTIONS.add)
    return {
      ...state,
      students: [...state.students, action.payload],
      modalOpen: true,
      modalContent: modalContent[ACTIONS.add],
    };

  if (action.type === ACTIONS.addEmpty)
    return {
      ...state,
      modalOpen: true,
      modalContent: modalContent[ACTIONS.addEmpty],
    };

  if (action.type === ACTIONS.closeModal)
    return {
      ...state,
      modalOpen: false,
      modalContent: modalContent[ACTIONS.closeModal],
    };
};

function App() {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, initState);

  function handleSubmit(event) {
    event.preventDefault();

    if (name) {
      const student = {
        id: new Date().getTime().toString(),
        name,
      };
      dispatch(ACTIONS.addPayload(student));
      setName("");
      return;
    }

    dispatch(ACTIONS.addEmptyPayload());
  }

  return (
    <div className="App" style={{ padding: "50px" }}>
      {state.modalOpen && (
        <Modal
          state={state}
          dispatch={dispatch}
          ACTIONS={ACTIONS}
          modalContent={state.modalContent}
        />
      )}
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <br />
      <div>
        {state.students.map((student) => (
          <article key={student.id}>
            Student {student.id}: {student.name}
          </article>
        ))}
      </div>
    </div>
  );
}

export default App;
