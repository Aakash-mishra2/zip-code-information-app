import { useSelector } from "react-redux";
const PlaceList = (props) => {
    const state = useSelector((state) => state.places);
    console.log('State', state);
    
    if(state.isLoading){ return <h1>Loading ...</h1>;   }

    return (
        <div>
        {
            state.data && state.data.places.map((e, index) => 
            (
                <div><p>{e['place name']}</p> <p>{e.state}</p> </div>
            ))
        }
        </div>
    )
};
export default PlaceList;