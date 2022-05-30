import { ChangeEvent, useContext, useEffect, useState } from "react"
import { AppContext } from "../context/AppContext";
import { IVehicles } from "../interfaces/interfaces";
import { createVehicleDB, deleteVehicle, editVehicleDB } from "../functions/functions";

interface IUseModal {
    vehicle?: IVehicles;
    closeModal: () => void;
}
export const useModal = ({ vehicle, closeModal }: IUseModal) => {
    const { state, setInitialState } = useContext(AppContext);
    const [data, setData] = useState<IVehicles>({
        driver_id: "",
        plate: "",
        model: "",
        type: "",
        capacity: ""
    });
    const [load, setLoad] = useState(false);
    const [error, setError] = useState("");


    const onChange = (e: ChangeEvent<HTMLInputElement>) => setData({ ...data, [e.target.name]: e.target.value })

    const createVehicle = async () => {
        setLoad(true);
        const temp = {
            ...data,
            driver_id: state.driverSelected?.id
        }
        const resp: IVehicles = await createVehicleDB(temp);
        if (resp) {
            setInitialState(prev => {
                const arrayVehicles = prev.vehiclesDriver;
                const arrayTotalVehicles = prev.vehicles;
                arrayVehicles?.push(resp);
                arrayTotalVehicles?.push(resp);
                return {
                    driverSelected: prev.driverSelected,
                    drivers: prev.drivers,
                    vehicles: arrayTotalVehicles,
                    vehiclesDriver: arrayVehicles
                }
            })

            closeModal();
            setError("");
        } else {
            setError("There was an error creating the vehicle")
        }

        setLoad(false);
    }

    const editVehicle = async () => {
        setLoad(true);
        const temp = {
            ...data,
            driver_id: state.driverSelected?.id
        }
        const resp: IVehicles = await editVehicleDB(temp, vehicle?.id!);
        if (resp) {
            setInitialState(prev => (
                {
                    driverSelected: prev.driverSelected,
                    drivers: prev.drivers,
                    vehicles: prev.vehicles?.map((e) => {
                        if (e.id === vehicle?.id) {
                            return resp
                        }
                        return e;
                    }),
                    vehiclesDriver: prev.vehiclesDriver?.map((e) => {
                        if (e.id === vehicle?.id) {
                            return resp
                        }
                        return e;
                    })
                }
            ))
            closeModal();
            setError("");
        } else {
            setError("There was an error editing the vehicle")
        }

        setLoad(false);
    }

    const deleteVehicleBtn = async (id: string) => {
        setLoad(true);
        const resp = await deleteVehicle(id!);
        if (resp) {
            setInitialState(prev => (
                {
                    driverSelected: prev.driverSelected,
                    drivers: prev.drivers,
                    vehicles: prev.vehicles?.filter((e) => e.id !== id),
                    vehiclesDriver: prev.vehiclesDriver?.filter((e) => e.id !== id)
                }))
            closeModal();
            setError("");
        } else {
            setError("Failed to remove vehicle")
        }
        setLoad(false);
    }


    useEffect(() => {
        if (vehicle) {
            setData(vehicle)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return {
        onChange,
        createVehicle,
        editVehicle,
        deleteVehicleBtn,
        data,
        load,
        error
    }
}