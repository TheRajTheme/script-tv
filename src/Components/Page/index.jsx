import React from 'react';
import Header from '../Header';
import styles from './Page.module.scss'

const Page = ({children}) => {

    return (
        <div className={styles.page}>
            <Header />
            <div className={styles.inner}>
                {children}
            </div>
        </div>
    );
};

export default Page;