import React, { useState, useEffect, useRef } from "react";
import { loadScript } from '../loadScript'
import TextField from '@mui/material/TextField';
import { useDispatch } from "react-redux";
import { saveSearch } from "../redux/actions";

function SearchLocationInput () {

  const api_key = 'AIzaSyB-OtBp0kL1WYWo88xx7Xr161U4JKZV-7I';
  const [query, setQuery] = useState("");
  const autoCompleteRef = useRef(null);
  const dispatch = useDispatch();
  let autoComplete;

  function handleScriptLoad(updateQuery, autoCompleteRef) {
    autoComplete = new window.google.maps.places.Autocomplete(
      autoCompleteRef.current,
      { types: ["(cities)"], componentRestrictions: { country: "us" } }
    );
    autoComplete.setFields(["address_components", "formatted_address"]);
    autoComplete.addListener("place_changed", () =>
      handlePlaceSelect(updateQuery)
    );
  } 

  async function handlePlaceSelect(updateQuery) {
    const addressObject = autoComplete.getPlace();
    const query = addressObject.formatted_address;
    updateQuery(query);
    dispatch(saveSearch(query));
    console.log(addressObject);
  };
  
  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${api_key}&callback=Function.prototype&libraries=places`,
      () => handleScriptLoad(setQuery, autoCompleteRef)
    );
  });

  return (
    <div>
      <TextField
        id="outlined-basic"
        label="User Input"
        variant="outlined"
        ref={autoCompleteRef}
        onChange={event => setQuery(event.target.value)}
        placeholder="Enter a city"
        value={query}
        InputProps={{
            style: {
                color:"white",
                width: 1000
            }
        }}
        InputLabelProps={{
            style: {
                color:"white"
            }
        }}
      />
    </div>
  );
}

export default SearchLocationInput;