import { Dispatch, SetStateAction } from "react";
import { IVehicles } from "../interfaces/interfaces";
import EditIcon from "./icons/EditIcon";
import TrashIcon from "./icons/TrashIcon";

interface IRowVehicle {
  vehicle: IVehicles;
  openModal: () => void;
  openModalDelete: () => void;
  setVehicleSelected: Dispatch<SetStateAction<IVehicles | undefined>>;
  setIdVehicle: Dispatch<SetStateAction<string>>;
}

const RowVehicle = ({
  vehicle,
  setVehicleSelected,
  openModal,
  setIdVehicle,
  openModalDelete,
}: IRowVehicle) => {
  const clickEdit = () => {
    setVehicleSelected(vehicle);
    openModal();
  };

  const clickDelete = () => {
    openModalDelete();
    setIdVehicle(vehicle.id!);
  };

  return (
    <tr>
      <td>{vehicle.plate}</td>
      <td>{vehicle.model}</td>
      <td>{vehicle.type}</td>
      <td>{vehicle.capacity}</td>
      <td>{vehicle.creation_date}</td>
      <td>
        <div onClick={clickEdit}>
          <EditIcon />
        </div>
      </td>
      <td>
        <div onClick={clickDelete}>
          <TrashIcon />
        </div>
      </td>
    </tr>
  );
};

export default RowVehicle;
