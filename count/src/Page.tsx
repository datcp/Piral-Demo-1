import { PiletApi } from "Piral-Demo";
import * as React from "react";

export interface PageProps {
    data: any;
    value?: any;
    Foo: React.ComponentType
}

const Page: React.FC<PageProps> = ({data, value, Foo}) => {
    console.log(data, value)
    return (
        <div>
            <h1>My Page</h1>
            <p>This is just sample....</p>
            <Foo />
            <ul>
                {
                    data.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))
                }
            </ul>
            <div>{value}</div>
        </div>
    )
}

export default Page;