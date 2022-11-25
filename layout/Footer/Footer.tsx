import React from 'react';
import {FooterProps} from "./Footer.props";
import styles from './Footer.module.css';
import cn from "classnames";
import {format} from "date-fns";

export const Footer = ({className,...props}: FooterProps): JSX.Element => {
    return (
        <footer className={cn(className, styles.footer)} {...props}>
            <div>OwlTop © {format(new Date(), 'yyyy')} Все права защищены</div>
            <a className={styles.link} href="#" target="_blank">Пользовательское соглашение</a>
            <a className={styles.link} href="#" target="_blank">Политика конфиденциальности</a>
        </footer>
    );
};