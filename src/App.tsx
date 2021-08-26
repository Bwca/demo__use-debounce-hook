import { useState } from "react";

import "./App.css";
import { Greeter } from "./Greeter";

export function App(): JSX.Element {
    const [isGreeterVisible, setIsGreeterVisible] = useState(true);
    const toggleGreeter = () => setIsGreeterVisible((prev) => !prev);

    return (
        <div className="App">
            <header className="App-header">
                <button style={{ position: "absolute", top: '20vh' }} onClick={toggleGreeter}>
                    toggle greeter
                </button>
                <br />
                {isGreeterVisible && <Greeter />}
            </header>
        </div>
    );
}
