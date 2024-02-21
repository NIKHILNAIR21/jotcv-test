export const getToken=()=>{
    return localStorage.getItem('token');

}
// export const setFirstLoginFlag = () => {
//     localStorage.setItem('firstLogin', 'true');
// };

// export const isFirstLogin = () => {
//     const firstLogin = localStorage.getItem('firstLogin');
//     return firstLogin === 'true';
// };

export const clearSession=()=>{
    localStorage.removeItem('token');
}

export const setSession=async(accesstoken)=>{
    await localStorage.setItem('token',accesstoken)
};