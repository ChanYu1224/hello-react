import React from "react";
import { useUser } from "../providers/UserProvider";

export default function Hello() {
    const { name } = useUser();
    return (
        <div>
            Hello, {name}
            {name && "."}
        </div>
    );
};