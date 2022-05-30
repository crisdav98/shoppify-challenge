import { axiosClient } from "../config/axios"

export const searchDrivers = async () => {
    try {
        const resp = await axiosClient.get('driver');
        return resp.data;

    } catch (error) {
        console.log("==> Error in search drivers");
        console.log(error);
        return null;
    }
}
export const searchVehicles = async () => {
    try {
        const resp = await axiosClient.get('vehicle');
        return resp.data;

    } catch (error) {
        return null;
    }
}

export const createVehicleDB = async (data: any) => {
    try {
        const resp = await axiosClient.post('vehicle', {
            ...data,
        });
        return resp.data;

    } catch (error) {
        console.log("==> Error in create vehicle");
        console.log(error);
        return null;
    }
}
export const editVehicleDB = async (data: any, id: string) => {
    try {
        const resp = await axiosClient.put(`vehicle/${id}`, {
            ...data,
        });
        return resp.data;

    } catch (error) {
        console.log("==> Error in Edit vehicle");
        console.log(error);
        return null;
    }
}
export const deleteVehicle = async (id: string) => {
    try {
        await axiosClient.delete(`vehicle/${id}`);
        return true;

    } catch (error) {
        console.log("==> Error in delete vehicle");
        console.log(error);
        return false;
    }
}

