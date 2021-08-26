import { FC, useState } from "react";

import { useDebounce } from "../debounce";

export const Greeter: FC = (): JSX.Element => {
    const [name, setName] = useState<string | null>(null);
    const inputHandler = useDebounce<React.ChangeEvent<HTMLInputElement>>(
        (e) => setName(e.target.value),
        1000
    );
    return (
        <>
            <p>Hello {name ? name : "stranger"}</p>
            <fieldset>
                <legend>Enter your name</legend>
                <input onChange={inputHandler} />
            </fieldset>
        </>
    );
};
