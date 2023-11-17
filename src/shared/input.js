import React, { useEffect, useReducer } from "react";
import { validate } from "./validators";
import './input.css';

function caseReducer(state, action) {
    switch (action.type) {
        case 'ALTER':
            return {
                ...state,
                value: action.val,
                isValid: validate(action.val, action.validators)
            };
        case 'TOUCH':
            return {
                ...state,
                isTouched: true
            };
        default:
            return state;
    }
};

export default function Input(props) {

    const [inputState, dispatch] = useReducer(caseReducer, {
        isValid: props.initialValid || false,
        value: props.initialValue || '',
        isTouched: false
    })

    function changeHandler(event) {
        dispatch({
            type: 'ALTER',
            val: event.target.value,
            validators: props.validators
        });
    };

    function touchHandler(event) {
        dispatch({
            type: 'TOUCH',
        })
    }
    const { id, onInput } = props;
    const { isValid, value } = inputState;

    //useEffect(() = > {trigger this action - function  },[when these things change - dependencies])
    useEffect(() => {
        onInput(id, value, isValid)
    }, [id, isValid, value, onInput])

    const element =
        props.element === "input" ? (
            <input
                type={props.type}
                placeholder={props.placeholder}
                id={props.id}
                onChange={changeHandler}
                onBlur={touchHandler}
                value={inputState.value}
                autoComplete="off"
            />
        ) :
            (
                <textarea
                    type={props.type}
                    placeholder={props.placeholder}
                    id={props.id}
                    rows={props.rows || 3}
                    onChange={changeHandler}
                    onBlur={touchHandler}
                    value={inputState.value}
                    autoComplete="off"
                />
            );
    return (
        <div
            className={`form-control ${!inputState.isValid && inputState.isTouched && 'form-control--invalid'}`}
        >
            {element}
            {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
        </div>
    )
}