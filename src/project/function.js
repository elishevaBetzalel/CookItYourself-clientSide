export const SetUser = (u) =>{
    sessionStorage.setItem('user',JSON.stringify(u))//תשים במשתמש הנוכחי את מי שנכנס
    return u;
}
export const GetUser = () =>{
    return JSON.parse(sessionStorage.getItem('user'))//משתמש נוכחי
}