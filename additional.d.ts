type CSSModuleClasses = { readonly [key: string]: string };

declare module '*.module.css' {
    const classes: CSSModuleClasses;
    export default classes;
}

declare module "*.svg" {
    const content: React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
    export default content;
}