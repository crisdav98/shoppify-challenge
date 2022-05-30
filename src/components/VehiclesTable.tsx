import { useContext, useState } from "react";
import { driverTitltes, vehicleTitles } from "../constants/constants";
import { AppContext } from "../context/AppContext";
import { IVehicles } from "../interfaces/interfaces";
import ModalComponent from "./modal/Modal";
import ModalDeleteComponent from "./modal/ModalDelete";
import NoDataTable from "./NoDataTable";
import RowDriver from "./RowDriver";
import RowVehicle from "./RowVehicle";
import TableOptions from "./TableOptions";

const VehiclesTable = () => {
  const { state } = useContext(AppContext);
  const { driverSelected, drivers, vehiclesDriver } = state;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalDeleteIsOpen, setIsOpenDelete] = useState(false);
  const [idVehicle, setIdVehicle] = useState("");
  const [vehicleSelected, setVehicleSelected] =
    useState<IVehicles | undefined>(undefined);

  const openModalDelete = () => {
    setIsOpenDelete(true);
  };
  const closeModalDelete = () => {
    setIsOpenDelete(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="cs__vehiclesTable">
        {driverSelected && (
          <TableOptions
            setVehicleSelected={setVehicleSelected}
            openModal={openModal}
          />
        )}

        <table>
          <tbody>
            <tr>
              {!driverSelected
                ? driverTitltes.map((e) => <th key={e}>{e}</th>)
                : vehicleTitles.map((e) => <th key={e}>{e}</th>)}
            </tr>
            {!driverSelected
              ? drivers?.map((e) => <RowDriver e={e} key={e.id} />)
              : vehiclesDriver?.map((vehicle) => (
                  <RowVehicle
                    vehicle={vehicle}
                    setVehicleSelected={setVehicleSelected}
                    openModal={openModal}
                    setIdVehicle={setIdVehicle}
                    openModalDelete={openModalDelete}
                    key={vehicle.id}
                  />
                ))}
          </tbody>
        </table>
        {!drivers ||
          (drivers!.length === 0 && <NoDataTable isDataDriver={true} />)}
        {driverSelected && vehiclesDriver!.length === 0 && (
          <NoDataTable isDataDriver={false} />
        )}
      </div>

      {modalIsOpen ? (
        <ModalComponent
          closeModal={closeModal}
          modalIsOpen={modalIsOpen}
          vehicle={vehicleSelected}
        />
      ) : (
        <></>
      )}
      {modalDeleteIsOpen ? (
        <ModalDeleteComponent
          closeModal={closeModalDelete}
          modalIsOpen={modalDeleteIsOpen}
          id={idVehicle}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default VehiclesTable;
