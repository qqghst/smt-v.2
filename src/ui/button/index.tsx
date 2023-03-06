import React, { DOMAttributes } from 'react';
import styles from './styles.module.scss'

export interface IButtonProps extends DOMAttributes<HTMLButtonElement> {
    type: 'button' | 'submit' | 'reset',
    onClick?: (event: React.MouseEvent) => void,
    children: React.ReactNode,
    className?: string,
}

const Button: React.FC<IButtonProps> = ({ children, type, onClick, className}) => {
    return (
        <button type={type}>
            <p className={styles.text}>{children}</p>
        </button>
    )
}

export default Button;