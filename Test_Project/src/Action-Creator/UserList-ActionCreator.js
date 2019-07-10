import axios from "axios";

const Get_Data =()=>{
    const request = axios.get(" http://demo9197058.mockable.io/users")
    console.log(request);
    return{
        type:"GET_DATA",
        payload:request
    }
}
export{Get_Data}