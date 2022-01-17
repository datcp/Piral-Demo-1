import * as React from "react";

export interface InputProps{
    setData: any;
}

const Input: React.FC<InputProps> = ({setData}) => {
    const [value, setValue] = React.useState('');

    const inpChange = (e) => {
        setValue(e.target.value)
    }

    const onClick = () => {
        setData(value);
        setValue('');
    }

    return (
        <div>
            <input type="text" value={value} onChange={inpChange}/>
            <button onClick={onClick}>Ok</button>
        </div>
    )
}

export default Input;