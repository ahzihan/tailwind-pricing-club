import React from 'react';
import { CheckIcon} from '@heroicons/react/solid';
import './Benefits.css';

const Benefits = (props) => {
    return (
            <p className='flex items-center '><CheckIcon className='w-6 h-6 text-green-500 mr-2'></CheckIcon>{props.benefit}</p>
    );
};

export default Benefits;