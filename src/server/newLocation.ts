export function newLocation(location: Type_IP | null): Type_Location {
    if (!location) return {
        _type: "clientInfo",
        country: "",
        city: "",
        ip: "",
        network: "",
        lat: 0,
        lng: 0,
        country_number: ""
    }
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