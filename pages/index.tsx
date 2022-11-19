import {Htag} from "../components";
import {Button} from "../components";

export default function Home(): JSX.Element {
    return (
        <>
            <Htag tag='h1'>Hello</Htag>
            <Button appearance="primary" arrow="down">Кнопка</Button>
            <Button appearance="ghost" arrow="right">Кнопка</Button>
        </>
    );
}
