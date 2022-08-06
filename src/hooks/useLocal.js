import { useNavigate } from "react-router-dom";

function useLocal() {

  const navigate = useNavigate();

  const token = JSON.parse(localStorage.getItem("trackitToken"));;
  const image = localStorage.getItem('trackitImage');

  if (!token){
    navigate('/login');
  }

  return {
    token,
    image
  };
}

export { useLocal };