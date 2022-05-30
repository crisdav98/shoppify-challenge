import Modal from "react-modal";
import { IVehicles } from "../../interfaces/interfaces";
import closeIcon from "../../assets/icons/xmark-solid.svg";
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

interface IModalComponent {
  modalIsOpen: boolean;
  closeModal: () => void;
  vehicle?: IVehicles;
}

const ModalComponent = ({
  modalIsOpen,
  vehicle,
  closeModal,
}: IModalComponent) => {
  const { onChange, createVehicle, editVehicle, data, load, error } = useModal({
    vehicle,
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
        <img onClick={closeModal} src={closeIcon} alt="Close" />
        <h3>{vehicle ? "Vehicle edit" : "Create Vehicle"}</h3>
        <div className="cs__modalContainer-form">
          <div>
            <label htmlFor="plate">Plate</label>
            <input
              type="text"
              name="plate"
              id="plate"
              placeholder="Vehicle plate"
              value={data.plate}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div>
            <label htmlFor="model">Model</label>
            <input
              type="text"
              id="model"
              name="model"
              placeholder="Vehicle model"
              value={data.model}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div>
            <label htmlFor="type">Type</label>
            <input
              type="text"
              id="type"
              name="type"
              placeholder="Vehicle type"
              value={data.type}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div>
            <label htmlFor="capacity">Capacity</label>
            <input
              type="text"
              id="capacity"
              name="capacity"
              placeholder="Vehicle capacity"
              value={data.capacity}
              onChange={(e) => onChange(e)}
            />
          </div>

          {error.length > 0 ? (
            <div className="cs__containererror">{error}</div>
          ) : (
            <></>
          )}
          <div className="cs__modal-containerbtn">
            {load ? (
              vehicle ? (
                "EDITING VEHICLE"
              ) : (
                "CREATING VEHICLE..."
              )
            ) : (
              <button onClick={vehicle ? editVehicle : createVehicle}>
                {vehicle ? "Save changes" : "Create"}
              </button>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalComponent;
