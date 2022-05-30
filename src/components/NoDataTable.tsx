interface INoDataTable {
  isDataDriver: boolean;
}

const NoDataTable = ({ isDataDriver }: INoDataTable) => {
  return (
    <div className="cs__nodata">
      <h5>
        {isDataDriver
          ? "Don't exist drivers. Create the first driver."
          : "Don't exist vehicles for this driver. Create the first vehicle."}
      </h5>
    </div>
  );
};

export default NoDataTable;
