import {myAxios} from './helper';

export const signUp = (restaurant)=>{
    return myAxios.post('/auth/restaurants',restaurant).then((response)=>response.data)
}

export const loginUser = (loginDetail)=>{
    return myAxios.post('/auth/login', loginDetail).then((response)=>response.data)
}


//upload safety license doc
export const uploadDoc=(safetyLicenseDoc, restaurantID)=>{
    let formData = new FormData()
    formData.append("safetyLicense", safetyLicenseDoc)
    return  myAxios.post(`/restaurant/doc/upload/${restaurantID}`, formData,{
        headers:{
            'Content-Type':'multipart/form-data'
        }
    }).then((response)=>response.data)
}