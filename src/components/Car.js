import React, { useState } from "react";

function Car() {
    const [car, setCar] = useState({
        name: "Honda Civic",
        color: "Red",
        year: 2023,
    });

    const handleYearChange = (event) => {
        setCar({ ...car, year: parseInt(event.target.value) });
    };

    return (
        <>
            Show information of Car:
            <p>Name: {car.name}</p>
            <p>Color: {car.color}</p>
            <p>Year: {car.year}</p>
            Update Year of Car:
            <input type="number" onChange={handleYearChange} />
            <input type="button" value="Update Year" />
        </>
    );
}

export default Car;
