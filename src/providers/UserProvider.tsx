import React, { useState } from "react";
import { createContext, useContext } from "react";

type Context = {
    name?: string,
    changeName: (v: string) => void,
};
const init: Context = {
    name: undefined,
    changeName: (_v) => {},
};

const UserContext = createContext<Context>(init);
export const useUser = () => useContext(UserContext);

export default function UserProvider({ children }) {
    const [name, setName] = useState(undefined);
    const changeName = setName;

    return (
        <UserContext.Provider value={{ name, changeName }}>
            {children}
        </UserContext.Provider>
    );
}