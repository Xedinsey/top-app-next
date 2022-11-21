import Document, {DocumentContext, DocumentInitialProps, Html, Main, NextScript} from "next/document";
import {Head} from "next/document";


class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx);
        return {...initialProps};
    }

    render():JSX.Element {
        return (
            <Html lang="ru">
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,300;0,400;0,500;0,700;0,900;1,800&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;