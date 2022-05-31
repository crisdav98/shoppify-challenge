import { Dispatch, SetStateAction, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Idriver } from "../interfaces/interfaces";

interface IUsePagination {
    setCurrentPage: Dispatch<SetStateAction<number>>;
    currentPage: number;
    drivers: Idriver[];
}
export const usePagination = ({ currentPage, drivers, setCurrentPage }: IUsePagination) => {
    const { state } = useContext(AppContext);

    const nextPage = () => {
        const { driverSelected, vehiclesDriver } = state;

        const arrayTemp = !driverSelected ? drivers.slice(currentPage + 10, currentPage + 20) : vehiclesDriver?.slice(currentPage + 10, currentPage + 20);
        if (arrayTemp && arrayTemp.length > 0) {
            setCurrentPage((prev) => prev + 10);
        }
    };
    const lastPage = () => {
        if (currentPage > 0) {
            setCurrentPage((prev) => prev - 10);
        }
    };

    return {
        nextPage,
        lastPage
    }
}