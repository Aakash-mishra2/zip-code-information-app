import styled from "styled-components";
import { fetchPlaces, clearAll } from "../store/locationSlice";
import { useDispatch } from 'react-redux'
import { useState } from "react";

const Input = styled.input`
border: 1px solid #213555;
background-color: rgba(252, 252, 252, 0.2);
width: 180px;
height: 50px;
border-radius: 3px;
font-family: "Source Sans Pro", sans-serif;
padding: 10px 15px;
display: block;
text-align: center;
font-size: 18px;
color: #213555;
font-weight: 300;
box-shadow: 4px 3px 7px 2px #00000040;
`;
const Button = styled.button`
  letter-spacing: 2px;
    box-shadow: 4px 3px 7px 2px #00000040;
    border-radius: 25px;
    font-size: 19px;
    background-color: #04364A;
    color: white;
    height: 50px;
    padding: 10px;
    width: fit-content;
`;
const HomePage = () => {
    const dispatch = useDispatch();
    // const [show, setShow] = useState(false);
    const [zipCode, setZipCode] = useState('');
    return (
        <div className="flex flex-row m-4 p-2 gap-4 items-center justify-center">
            <h2 className="text-xl font-pop font-medium"> Enter Your Zip Code: </h2>
            <Input
                type="text"
                name="zipCode"
                onChange={(event) => setZipCode(event.target.value)}
                value={zipCode}
                autoComplete="off"
            />
            <Button onClick={() => dispatch(fetchPlaces(zipCode))}>Go</Button>
            <Button onClick={() => {
                setZipCode('');
                dispatch(clearAll());
            }}> Clear </Button>
            <br />
        </div>
    )
}
export default HomePage;