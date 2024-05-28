import React from "react";
import Hello from "../components/Hello";


export default function App() {
    return <Hello name="world"/>;
    // equal to...
    // return Hello({ name: "world" });
}