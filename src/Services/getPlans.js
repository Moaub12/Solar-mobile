import api from "./axiosInst";
import store from "../redux/store"; 
const accessToken = store.getState().app.token;
const getPlans=async ()=>{
    try{
        const response = await api.get(`api/plans/`);
        
        return response.data;
    }
  catch(error){
    console.log(error)
    
    return undefined
  }
 
}
export default getPlans;