import React from 'react';
import styles from './SmallCard.module.scss';

const SmallCard = ({icon, head, text}) => {
    return (
        <div className={styles.cardWrap}>
            <div className={styles.icon}>
                {icon}
            </div>
            <div className={styles.txt}>
                <h2>{head}</h2>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default SmallCard;