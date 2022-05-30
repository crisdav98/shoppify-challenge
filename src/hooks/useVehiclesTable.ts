import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { IVehicles } from "../interfaces/interfaces";

export const useVehicleTable = () => {
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
    return {
        driverSelected,
        drivers,
        vehiclesDriver,
        modalIsOpen,
        modalDeleteIsOpen,
        idVehicle,
        vehicleSelected,
        setIdVehicle,
        setVehicleSelected,
        openModalDelete,
        closeModalDelete,
        openModal,
        closeModal

    }
}