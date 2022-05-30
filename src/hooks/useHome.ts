import { useContext } from "react"
import { searchDrivers, searchVehicles } from "../functions/functions";
import { Idriver, IVehicles } from "../interfaces/interfaces"
import { AppContext } from "../context/AppContext";

export const useHome = () => {
    // const [driverSelected, setDriverSelected] = useState<Idriver | null>(null);
    const { setInitialState } = useContext(AppContext);

    const loadDrivers = async () => {
        const drivers: Idriver[] | null = await searchDrivers();
        if (drivers) {
            setInitialState((prev) => {
                return {
                    drivers: drivers,
                    vehicles: prev.vehicles,
                    driverSelected: prev.driverSelected,
                }
            })
        }
    }
    const loadVehicles = async () => {
        const vehicles: IVehicles[] | null = await searchVehicles();
        if (vehicles) {
            setInitialState((prev) => {
                return {
                    drivers: prev.drivers,
                    vehicles,
                    driverSelected: prev.driverSelected,
                }
            })
        }
    }

    return {
        loadDrivers,
        loadVehicles
    }

}