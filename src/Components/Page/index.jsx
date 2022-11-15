import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import styles from './Page.module.scss'

const Page = ({children}) => {

    return (
        <>
        <div className={styles.page}>
            <Header />
            <div className={styles.inner}>
                {children}
            </div>
            <Footer />
        </div>
        </>
    );
};

export default Page;