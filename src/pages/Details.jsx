import { useNavigate, useParams } from "react-router-dom";

import { IoArrowBack } from "react-icons/io5";
import { useEffect, useState } from "react";
import axios from "axios";
import { searchByName } from "../config";
import { Button } from "../components/Button";
import { Info } from "../components/Info";


export const Details = () => {
  const [country, setCountry] = useState(null);
  const { name } = useParams();
  const navigate = useNavigate();

  console.log(country)

  useEffect(() => {
    axios.get(searchByName(name)).then(({ data }) => setCountry(data[0]));
  }, [name])

  const handleOnBack = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate('/', { replace: true }); // the current entry in the history stack will be replaced with the new one with { replace: true }
    }
  }

  return (
    <div>
      <Button onClick={handleOnBack}>
        <IoArrowBack /> Back
      </Button>
      {country && (
        <Info {...country} />
      )}
    </div>
  )
}