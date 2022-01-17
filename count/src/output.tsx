import * as React from "react";

export interface outputProps {
    output: any;
}

const Output: React.FC<outputProps> = ({output}) => {
    return(
        <div>
            {output}
        </div>
    )
}

export default Output;