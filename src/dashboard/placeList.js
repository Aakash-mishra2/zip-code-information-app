import { useSelector, useDispatch } from "react-redux";
import { clearAll } from "../store/locationSlice";

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import React from "react";

const PlaceList = (props) => {
    const state = useSelector((state) => state.places);
    console.log('State', state);
    const dispatch = useDispatch();
    if (state.isLoading && !state.isError) {
        return (
            <div className="ml-auto">
                <CircularProgress />
            </div>
        )
    }
    if (state.isError) {
        return (
            <div className="max-w-fit mx-auto">
                <Alert
                    severity="error"
                    action={
                        <Button color="inherit" size="small" onClick={() => dispatch(clearAll())}>
                            RETRY
                        </Button>
                    }
                >
                    <AlertTitle><h2 className="text-lg font-bold font-pop">Error</h2></AlertTitle>
                    <h4 className="font-bold">Could Not fetch locations. </h4>
                </Alert>
            </div>
        )
    }

    return (
        <React.Fragment>
            {state.data
                && <h4 className="m-0 mb-0 pb-0 font-open text-xl"><em> Your code is from </em> <b>{state.data.country}, {state.data['country abbreviation']}</b></h4>
            }
            <div className="flex flex-wrap flex-row font-open justify-evenly mt-0 m-4 p-4 gap-2">

                {state.data
                    && state.data.places.map((e, index) =>
                    (
                        <div className="tracking-wide flex flex-col bg-white shadow-xl m-2 p-4 rounded-lg max-h-fit max-w-fit">
                            <h1 className="text-lg"><b>{e['place name']}</b></h1>
                            <h5><em>{e.state}</em></h5>
                        </div>
                    ))
                }
            </div>
        </React.Fragment>
    )
};
export default PlaceList;