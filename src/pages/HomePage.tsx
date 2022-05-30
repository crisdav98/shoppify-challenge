import { useEffect } from "react";
import Header from "../components/Header";
import VehiclesTable from "../components/VehiclesTable";
import { useHome } from "../hooks/useHome";

const HomePage = () => {
  const { loadDrivers, loadVehicles } = useHome();

  useEffect(() => {
    loadDrivers();
    loadVehicles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="cs__container">
      <Header />
      <VehiclesTable
      // driverSelected={driverSelected}
      // setDriverSelected={setDriverSelected}
      />
    </div>
  );
};

export default HomePage;
