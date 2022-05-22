import React from 'react';
import PricingOption from '../PricingOption/PricingOption';
import './Pricing.css';

const Pricing = () => {
    const pricingOptions = [
        {
            id: 1, name: 'Free', price: 0, benefits: [
                'Lifetime Free',
                'Unlimited Deals',
                'Localized Deals',
                'Fantastic Deals',
                'Crazy Deals'
        ]},
        {id:2,name: 'Regular', price:9.99, benefits: [
            'Everything on Free',
            'Unlimited Deals',
            'Localized Deals',
            'Fantastic Deals',
            'Crazy Deals'
    ]},
        {id:3,name: 'Premium', price:19.99, benefits: [
            'Everything on Regular',
            'Unlimited Deals',
            'Localized Deals',
            'Fantastic Deals',
            'Crazy Deals'
    ]}
    ];
    return (
        <div className='bg-indigo-300 p-4 mt-8'>
            <h1 className='text-6xl font-mono text-white'>Best Deals of The Day</h1>
            <p>Welcome to my new pricing club.Welcome to my new pricing club.Welcome to my new pricing club.Welcome to my new pricing club.</p>
            <div className='grid md:grid-cols-3 gap-3 mt-8'>
                {
                    pricingOptions.map( option => <PricingOption
                        key={ Option.id }
                        option={option}
                    ></PricingOption> )
                }
            </div>
        </div>
    );
};

export default Pricing;