import cn from 'classnames';

import React, { DetailedHTMLProps, FC, TextareaHTMLAttributes } from 'react';

import styles from './textarea.module.scss';

interface TextareaProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {}

const Textarea: FC<TextareaProps> = ({ className, ...props }) => {
	return <textarea className={cn(styles.textarea, className)} {...props} />;
};

export default Textarea;
