import React from 'react';
import styles from './Betting.module.scss'
import HeadingText from '../../../Components/HeadingText'
import cn from 'classnames'

const Betting = () => {
    return (
        <div className={cn(styles.betting, 'container py-5')}>
            <HeadingText 
            text1="Betting"
            spanText="Re"
            text2="Imagined"
            pText="Script tv adresses key points associated with centralizedbetting and blockchain prediction 
            market alike. Getting the best of both worlds is finally possible."
            />
            <div className="row mt-5">
                <div className="col-6 mt-5">
                    <div className={styles.bettingCard}>
                        <div className={styles.top}>
                            <img src="./logo/logo-light.png" alt="logo" />
                            <h2>Full Transparency</h2>
                            <h2>Instant Payouts</h2>
                            <h2>No Limits</h2>
                        </div>
                        <div className={styles.bottom}>
                            <img src="./home/betting.svg" alt="betting" />
                            <span>VS</span>
                            <h2>Classic Betting</h2>
                        </div>
                    </div>
                </div>
                <div className="col-6 mt-5">
                    <div className={styles.bettingCard}>
                        <div className={cn(styles.top, styles.top2)}>
                            <img src="./logo/logo-light.png" alt="logo" />
                            <h2>Plentful Events</h2>
                            <h2>Liquid Markets</h2>
                            <h2>Competitive Odds</h2>
                        </div>
                        <div className={styles.bottom}>
                            <img src="./home/betting.svg" alt="betting" />
                            <span>VS</span>
                            <h2>Prediction Markets</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Betting;