import React from "react";
import { useParams } from "react-router-dom";


export default function Detail() {
    const { id } = useParams(); // retrive parameters from DOM
    return <div>id: {id}</div>;
}