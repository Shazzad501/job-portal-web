import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const axiosInstance = axios.create({
  baseURL: 'https://job-server-nu.vercel.app',
  withCredentials: true
})

const useAxiosHook = () => {
  const {logoutUser, setLoading} = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(()=>{
    axiosInstance.interceptors.response.use(
    (response)=>{
      return response;
    },
    (err)=>{
      if(err.status === 401 || err.status === 403){
        logoutUser()
          .then(()=>{
            navigate('/login')
            setLoading(false);
          })
          .catch(err=> toast.error(`${err.message}`))
      }
      return Promise.reject(err)
    }
  )
  }, [])
  return axiosInstance;
};

export default useAxiosHook;