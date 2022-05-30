import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Idriver, IVehicles } from "../interfaces/interfaces";
import EyeIcon from "./icons/EyeIcon";

interface IRowDriver {
  e: Idriver;
}

const RowDriver = ({ e }: IRowDriver) => {
  const { setInitialState } = useContext(AppContext);

  const selectDriver = async () => {
    setInitialState((prev) => ({
      driverSelected: e,
      drivers: prev.drivers,
      vehicles: prev.vehicles,
      vehiclesDriver: prev.vehicles?.filter((v) => v.driver_id === e.id),
    }));
  };

  return (
    <tr>
      <td>{e.first_name}</td>
      <td>{e.last_name}</td>
      <td>{e.email}</td>
      <td>{e.phone}</td>
      <td>{e.status}</td>
      <td>{e.creation_date}</td>
      <td>
        <div onClick={selectDriver}>
          <EyeIcon />
        </div>
      </td>
    </tr>
  );
};

export default RowDriver;
