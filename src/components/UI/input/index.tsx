import cn from 'classnames';

import React, { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';

import styles from './input.module.scss';

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

const Input: FC<InputProps> = ({ className, ...props }) => {
	return <input className={cn(styles.input, className)} {...props} />;
};

export default Input;
