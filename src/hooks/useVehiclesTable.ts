import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { Idriver, IVehicles } from "../interfaces/interfaces";

export const useVehicleTable = () => {
    const { state } = useContext(AppContext);
    const { driverSelected, drivers, vehiclesDriver } = state;
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalDeleteIsOpen, setIsOpenDelete] = useState(false);
    const [idVehicle, setIdVehicle] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
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
    const filteredDrivers = (): Idriver[] => {
        return drivers ? drivers?.slice(currentPage, currentPage + 10) : [];
    }
    const filteredVehicles = (): IVehicles[] => {
        return vehiclesDriver ? vehiclesDriver?.slice(currentPage, currentPage + 10) : [];
    }


    return {
        driverSelected,
        drivers,
        vehiclesDriver,
        modalIsOpen,
        modalDeleteIsOpen,
        idVehicle,
        vehicleSelected,
        currentPage,
        setCurrentPage,
        setIdVehicle,
        setVehicleSelected,
        openModalDelete,
        closeModalDelete,
        openModal,
        closeModal,
        filteredDrivers,
        filteredVehicles
    }
}