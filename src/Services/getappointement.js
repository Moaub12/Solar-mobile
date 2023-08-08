import api from "./axiosInst";

const getappointements=async (id)=>{
  
    try{
    const response = await api.get(`api/appointments/${id}/`);
    return response.data;
    }catch(error){
        console.log(error)
    
        return undefined
    }
}
export default getappointements;