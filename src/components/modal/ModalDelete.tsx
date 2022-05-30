import Modal from "react-modal";
import { useModal } from "../../hooks/useModal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
  },
};
Modal.setAppElement("#root");

interface IModalDeleteComponent {
  modalIsOpen: boolean;
  closeModal: () => void;
  id: string;
}

const ModalDeleteComponent = ({
  modalIsOpen,
  id,
  closeModal,
}: IModalDeleteComponent) => {
  const { load, error, deleteVehicleBtn } = useModal({
    closeModal,
  });
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      //   contentLabel="Example Modal"
    >
      <div className="cs__modalContainer">
        {/* <img onClick={closeModal} src={closeIcon} alt="Close" /> */}
        <h3>Permanently delete the vehicle</h3>
        <div className="cs__modalContainer-form">
          {error.length > 0 ? (
            <div className="cs__containererror">{error}</div>
          ) : (
            <></>
          )}
          <div className="cs__modal-containerbtn">
            {load ? (
              "DELETING VEHICLE..."
            ) : (
              <div className="cs__modaldelete-btn">
                <button className="cs__cancel-btn" onClick={closeModal}>
                  Cancelar
                </button>
                <button onClick={() => deleteVehicleBtn(id)}>Delete</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalDeleteComponent;
