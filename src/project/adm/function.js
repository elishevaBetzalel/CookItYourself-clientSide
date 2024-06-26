import { useSelector } from "react-redux";

export const IsAdm = (u) => {
    let adm = useSelector(u => { return u.state.admin });
    //jsx ולא בקובץ js כיוון שמדובר בקובץ stateלכאורה צריך לגשת ל

    if (u)
        return u.email == adm.email && u.password == adm.password
    return false
}