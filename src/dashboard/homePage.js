import styled from "styled-components";
import { fetchDetails } from "../store/locationSlice";
import { useDispatch } from 'react-redux'
import { useState } from "react";
const Input = styled.input`
border: 1px solid #213555;
background-color: rgba(252, 252, 252, 0.2);
width: 250px;
border-radius: 3px;
font-family: "Source Sans Pro", sans-serif;
padding: 10px 15px;
margin: 0 auto 10px auto;
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
    margin: 1rem 0.7rem;
    font-size: 19px;
    background-color: #04364A;
    color: white;
    height: 50px;
    width: 50px;
`;
const HomePage = () => {
    const dispatch = useDispatch();
    const [zipCode, setZipCode] = useState('');

    return (
        <div>
            <Input 
                onChange={(event) => setZipCode(event.target.value)} 
                value={zipCode} 
                />
            <Button onClick={() => dispatch(fetchDetails(zipCode))}>Go</Button>
        </div>
    )
}
export default HomePage;