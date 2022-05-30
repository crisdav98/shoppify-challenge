import { Istate } from "../interfaces/interfaces";

export const vehicleTitles: string[] = [
    "Plate",
    "Model",
    "Type",
    "Capacity",
    "Creation date",
    "Edit",
    "Delete"
];

export const driverTitltes: string[] = [
    "First Name",
    "Last Name",
    "Email",
    "Phone",
    "Status",
    "Creation Date",
    "View"
]

export const initstate: Istate = {
    drivers: undefined,
    vehicles: undefined,
    driverSelected: undefined,
    vehiclesDriver: undefined
}

export const baseURL = "https://6291466b27f4ba1c65ca5860.mockapi.io/shippify/";