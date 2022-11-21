import {Htag, Rating, Tag} from "../components";
import {Button, P} from "../components";
import {useEffect, useState} from "react";

export default function Home(): JSX.Element {
    const [counter, setCounter] = useState<number>(0);

    useEffect(() => {
        console.log("Counter" + counter);
        return function cleanup () {
            console.log('unmount');
        };
    }, []);
    return (
        <>
            <Htag tag='h1'>{counter}</Htag>
            <Button appearance="primary" arrow="down" onClick={()=> setCounter(x => x+1)}>Кнопка</Button>
            <Button appearance="ghost" arrow="right">Кнопка</Button>
            <P size='l'>Большой</P>
            <P size='m'>Средний</P>
            <P size='s'>Маленький</P>
            <Tag size='s'>Ghost</Tag>
            <Tag size='m' color='red'>Red</Tag>
            <Tag color='primary'>Primary</Tag>
            <Tag size='m' color='green'>Green</Tag>
            <Rating rating={4} />
        </>
    );
}
