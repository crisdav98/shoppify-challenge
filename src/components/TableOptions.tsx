import { Dispatch, SetStateAction, useContext } from "react";
import { AppContext } from "../context/AppContext";
import backIcon from "../assets/icons/circle-chevron-left-solid.svg";
import { IVehicles } from "../interfaces/interfaces";

interface ITableOptions {
  openModal: () => void;
  setVehicleSelected: Dispatch<SetStateAction<IVehicles | undefined>>;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const TableOptions = ({
  openModal,
  setVehicleSelected,
  setCurrentPage,
}: ITableOptions) => {
  const { setInitialState } = useContext(AppContext);

  const backAction = () => {
    setInitialState((prev) => ({
      driverSelected: undefined,
      drivers: prev.drivers,
      vehicles: prev.vehicles,
    }));
    setCurrentPage(0);
  };
  return (
    <div className="cs__tableOption">
      <div onClick={backAction} className="cs__backdrivers">
        <img src={backIcon} alt="Back" />
        Back to the drivers
      </div>

      {/* Button Create Vehicle */}
      <button
        onClick={() => {
          openModal();
          setVehicleSelected(undefined);
        }}
        className="cs__createvehicle"
      >
        Create Vehicle
      </button>
    </div>
  );
};

export default TableOptions;
