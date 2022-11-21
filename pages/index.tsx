import {Htag, Tag} from "../components";
import {Button, P} from "../components";

export default function Home(): JSX.Element {
    return (
        <>
            <Htag tag='h1'>Hello</Htag>
            <Button appearance="primary" arrow="down">Кнопка</Button>
            <Button appearance="ghost" arrow="right">Кнопка</Button>
            <P size='l'>Большой</P>
            <P size='m'>Средний</P>
            <P size='s'>Маленький</P>
            <Tag size='s'>Ghost</Tag>
            <Tag size='m' color='red'>Red</Tag>
            <Tag color='primary'>Primary</Tag>
            <Tag size='m' color='green'>Green</Tag>
        </>
    );
}
