import React from 'react';
import styles from './HeadingText.module.scss';
import cn from 'classnames'

const HeadingText = ({className, text1, text2, spanText, pText}) => {
    return (
        <div className={cn(className, styles.headingText)}>
            <h1 className={styles.heading}>{text1} {" "} <span>{spanText}</span> {" "} {text2}</h1>
            <p className={styles.para}>{pText}</p>
        </div>
    );
};

export default HeadingText;