import * as req from "./http"

export const PostReq=async(path,body)=>{
    try {
    let res= await req.http.post(path,body)
    return res
    } catch (error) {
        console.log(error)
    }
    // return await req.http
    // .post(path,body).then((res)=>{
    //     return res;
    // })
    // .catch((err)=>{

    // });
};

export const PatchReq=async(path,body)=>{
    try {
    let res= await req.http.patch(path,body)
    return res
    } catch (error) {
        console.log(error)
    }
    // return await req.http
    // .post(path,body).then((res)=>{
    //     return res;
    // })
    // .catch((err)=>{

    // });
};

export const GetReq=async(path)=>{
    try {
        let res= await req.http.get(path)
        return res
        } catch (error) {
            console.log(error)
        }
};

export const putReq=async(path,body)=>{
    try {
        let res= await req.http.put(path,body)
        return res
        } catch (error) {
            console.log(error)
        }
};

export const delReq=async(path)=>{
    try {
        let res= await req.http.delete(path)
        return res
        } catch (error) {
            console.log(error)
        }
};

