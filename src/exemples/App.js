import React, { useState } from "react";
import { Modal } from "../lib/components/Modal";

const App = () => {
  //modal
  const [open, setOpen] = useState(false);

  const close = () => {
    setOpen(!open);
  };

  return (
    <div>
      {open ? <div onClick={close} className="back-drop"></div> : null}
      <button onClick={() => setOpen(true)} className="btn-openModal">
        Open Modal
      </button>
      <Modal open={open} close={close} content="Employee Created !" />
    </div>
  );
};
export default App;
