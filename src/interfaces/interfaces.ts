import { Dispatch, SetStateAction } from "react";

export interface Istate {
    drivers?: Idriver[],
    vehicles?: IVehicles[],
    driverSelected?: Idriver;
    vehiclesDriver?: IVehicles[]
    // setDriverSelected: Dispatch<SetStateAction<Idriver | null>>;
}

export interface Idriver {
    id: string;
    company_id: string;
    city: number;
    first_name: string;
    last_name: string;
    email: string;
    phone: number;
    avatar_url: string;
    status: string;
    creation_date: any;
    company_info?: ICompany;
}

export interface ICompany {
    id: string;
    name: string;
    city: number;
    status: string;
    plan_type: string;
    creation_date: any;
}
export interface IVehicles {
    id?: string;
    driver_id: string;
    plate: string;
    model: string;
    type: string;
    capacity: string;
    creation_date?: any;
}

export interface IContext {
    state: Istate,
    setInitialState: Dispatch<SetStateAction<Istate>>
}
