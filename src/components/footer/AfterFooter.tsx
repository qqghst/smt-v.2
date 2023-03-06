import React from 'react';
import styles from './style.module.scss';

const AfterFooter: React.FC = () => {
    return (
        <>
            <div className='flex flex-row text-white justify-between'>
                <ul className='flex flex-row'>
                    <li>вконтакте</li>
                    <li>инстаграм</li>
                    <li>почта</li>
                </ul>
                <ul className='flex flex-row'>
                    <li>+7 (909) 123-45-67</li>
                    <li>г. Элиста, ул. Клыкова 7</li>
                </ul>
                <ul>
                    <li>&#169; sorry mom tattoo 2023 </li>
                </ul>
            </div>
        </>
    );
};

export default AfterFooter;
