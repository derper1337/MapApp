export const setMarkerCoordinates = (coordinates:object) =>{
    return {type:"SET_NEW_POINT_COORDINATES", newPointCoordinates: coordinates};
}
export const setMarkerText = (title: string, description: string, date : string) =>{
    return {type:"SET_NEW_POINT_TEXTS", title:title, description:description, date:date};
}
export const addMarker = () =>{
    return {type:"ADD_NEW_POINT"};
}
export const deleteMarker = (index:number) =>{
    return {type:"DELETE_POINT", index: index};
}
export const setTheme = (theme:string) =>{
    return {type:"SET_THEME", theme: theme};
}