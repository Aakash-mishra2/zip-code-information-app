import { useSelector } from "react-redux";
import CircularProgress from '@mui/material/CircularProgress';
import React from "react";

const PlaceList = (props) => {
    const state = useSelector((state) => state.places);
    console.log('State', state);

    if (state.isLoading) {
        return (
            <div className="ml-auto">
                <CircularProgress />
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