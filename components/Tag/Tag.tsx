import React from 'react';
import {TagProps} from "./Tag.props";
import styles from './Tag.module.css';
import cn from "classnames";

export const Tag = ({children, size = 's', className, color = 'ghost', href, ...props}: TagProps): JSX.Element => {
    return (
        <div {...props}
            className={cn(styles.tag, className, {
                [styles.s]: size == 's',
                [styles.m]: size == 'm',
                [styles.ghost]: color == 'ghost',
                [styles.grey]: color == 'grey',
                [styles.red]: color == 'red',
                [styles.primary]: color == 'primary',
                [styles.green]: color == 'green'
            })}
        >{
            href
                ? <a href={href}>{children}</a>
                : <>{children}</>
        }
        </div>
    );
};