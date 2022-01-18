import * as React from "react";

export interface outputProps {
    output: any[];
}

const Output: React.FC<outputProps> = ({output}) => {
    return(
        <div >
            {output.length == 0 && <div>Nothing to show</div>}
            {output.length > 0 && output.map((val: any) => <li>{val}</li>)}
        </div>
    )
}

export default Output;