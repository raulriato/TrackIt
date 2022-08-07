import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function useLocal() {

  const navigate = useNavigate();

  const token = JSON.parse(localStorage.getItem("trackitToken"));
  const image = localStorage.getItem('trackitImage');

  useEffect(() => {

    if (!token) {
      navigate('/login');
    }
  }, []);


  return {
    token,
    image
  };

}

export default useLocal;