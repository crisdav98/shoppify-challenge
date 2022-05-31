import { driverTitltes, vehicleTitles } from "../constants/constants";
import { useVehicleTable } from "../hooks/useVehiclesTable";
import ModalComponent from "./modal/Modal";
import ModalDeleteComponent from "./modal/ModalDelete";
import NoDataTable from "./NoDataTable";
import Pagination from "./Pagination";
import RowDriver from "./RowDriver";
import RowVehicle from "./RowVehicle";
import TableOptions from "./TableOptions";

const VehiclesTable = () => {
  const {
    driverSelected,
    drivers,
    idVehicle,
    modalDeleteIsOpen,
    modalIsOpen,
    vehicleSelected,
    vehiclesDriver,
    currentPage,
    closeModal,
    closeModalDelete,
    openModal,
    openModalDelete,
    setIdVehicle,
    setVehicleSelected,
    filteredDrivers,
    setCurrentPage,
    filteredVehicles,
  } = useVehicleTable();

  return (
    <>
      <div className="cs__vehiclesTable">
        {driverSelected && (
          <TableOptions
            setVehicleSelected={setVehicleSelected}
            openModal={openModal}
            setCurrentPage={setCurrentPage}
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
              ? filteredDrivers().map((e) => (
                  <RowDriver e={e} setCurrentPage={setCurrentPage} key={e.id} />
                ))
              : filteredVehicles().map((vehicle) => (
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
        <Pagination
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          drivers={drivers ?? []}
        />
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
