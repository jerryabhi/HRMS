import { useMutation } from "@tanstack/react-query";
// import axios from "axios";
import { useNavigate } from 'react-router-dom';

type LoginData = {
  email: string;
  password: string;
};

export const useEmployeeLogin = () => {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: async (loginData: LoginData) => {
      if(loginData == null || loginData == undefined || loginData.email === "" || loginData.password === ""){
        navigate('/');
      }else {
        navigate('/user');
      }
      
    },
    
  });

  return mutation;
};
