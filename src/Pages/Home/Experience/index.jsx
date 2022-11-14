import React from 'react';
import HeadingText from '../../../Components/HeadingText';
import SmallCard from '../../../Components/SmallCard';

const experienceDetails = [
    {
        icon: './icons/earn.png',
        head: 'Earn',
        text: "Multi level reward model – content partners, advertisers, viewers and lightning nodes all can earn rewards daily."
    },
    {
        icon: './icons/trade.png',
        head: 'Trade',
        text: "Trade your SPAY tokens for real world products such as festival, events and cinema tickets through our Script Swap model"
    },
    {
        icon: './icons/multiverse.png',
        head: 'Multiverse',
        text: "Multi accessible network for content based NFTs and projects to build, and distribute through Script Network"
    },
    {
        icon: './icons/community.png',
        head: 'Community',
        text: "Live chat, private message and trade NFTs for that show/film in real time"
    },

]

const Experience = () => {
    return (
        <div className='container py-5'>
            <HeadingText 
            text1="The cord cutting,"
            spanText="Live Tv Experience"
            text2="you have been waiting for."
            pText="Here is just some of the things you can do on Script Network"
            />
            <div className="row mt-6">
                {experienceDetails.map((x, index) => (
                    <div className="col-6" key={index}>
                        <SmallCard 
                        icon={
                            <img src={x.icon} alt='icon' />
                        }
                        head={x.head}
                        text={x.text}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;