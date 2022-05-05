import { useEffect } from "react";

function Modal({ state, dispatch, ACTIONS, modalContent }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(ACTIONS.closeModalPayload());
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [state, dispatch, ACTIONS]);

  return <div>{modalContent}</div>;
}

export default Modal;
