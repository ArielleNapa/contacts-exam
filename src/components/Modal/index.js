import "./Modal.css";
const Modal = ({ toggle, show, children }) => {
  return (
    <>
      {show ? (
        <div className="modal-container">
          <main className="modal_content">
            <button className="modal-close" onClick={() => toggle()}>
              X
            </button>
            {children}
          </main>
        </div>
      ) : null}
    </>
  );
};
export default Modal;
