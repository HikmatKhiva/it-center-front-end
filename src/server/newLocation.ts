import { Type_IP, Type_Location } from "../types/types"
export function newLocation(location: Type_IP | any): Type_Location {
    return {
        _type: "clientInfo",
        country: location?.country_name,
        city: location?.city,
        ip: location?.ip,
        network: location?.network,
        lat: location?.latitude,
        lng: location?.longitude,
        country_number: location?.country_calling_code,
    }
}