import styled from "styled-components";
import { fetchPlaces, clearAll } from "../store/locationSlice";
import { useDispatch } from 'react-redux'
import { useCallback, useState } from "react";
import Input from '../shared/input';
import { VALIDATOR_MAXLENGTH, VALIDATOR_REQUIRE } from '../shared/validators';
// const Input = styled.input`
// border: 1px solid #213555;
// background-color: rgba(252, 252, 252, 0.2);
// width: 180px;
// height: 50px;
// border-radius: 3px;
// font-family: "Source Sans Pro", sans-serif;
// padding: 10px 15px;
// display: block;
// text-align: center;
// font-size: 18px;
// color: #213555;
// font-weight: 300;
// box-shadow: 4px 3px 7px 2px #00000040;
// `;
const Button = styled.button`
  letter-spacing: 2px;
    box-shadow: 4px 3px 7px 2px #00000040;
    border-radius: 25px;
    font-size: 19px;
    background-color: #04364A;
    color: white;
    height: 50px;
    padding: 10px;
    align-items: center;
    width: fit-content;
`;
const HomePage = () => {
    const dispatch = useDispatch();
    const [zipCode, setZipCode] = useState({
        value: '',
        isValid: false
    });
    const zipCodeInputHandler = useCallback((id, value, isValid) => {
        setZipCode((prev) => {
            return {
                value: value,
                isValid: isValid
            }
        });
    }, []);
    console.log(zipCode);
    return (
        <div className="flex flex-col sm:flex-row sm:pb-0 m-4 p-2 gap-4 items-start justify-center">
            <h2 className="text-xl pt-2 font-pop font-medium"> Enter Your Zip Code: </h2>
            <Input
                element="input"
                id="zipcode"
                type="text"
                placeholder="Max 10 digits"
                errorText="Invalid Input. Try Again!"
                validators={[VALIDATOR_MAXLENGTH(10), VALIDATOR_REQUIRE()]}
                onInput={zipCodeInputHandler}
            />
            <Button
                className="hover:bg-[#04364A]/80 hover:scale-110 transform duration-500 font-pop "
                disabled={!zipCode.isValid}
                onClick={() =>
                    dispatch(fetchPlaces(zipCode.value))
                }> Go </Button>
            <Button
                className="hover:bg-[#04364A]/80 hover:scale-110 transform duration-500 font-pop"
                onClick={() => {
                    setZipCode('');
                    dispatch(clearAll());
                }}> Clear </Button>
            <br />
        </div>
    )
}
export default HomePage;