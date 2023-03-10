import React from 'react';
import styles from './styles.module.scss';

import ServiceItem from './ServiceItem';
import Title from '@/ui/title';

import {TattoServices, TattoServices2, TattoServices3, TattoServices4} from '../../assets/index';

const Services: React.FC = ({}) => {
    return (
        <section id='serviceId' className='bg-[#0F0F0F]'>
            <div className='container mx-auto'>
                <Title>услуги</Title>
                <div>
                    <ServiceItem title={'ТАТУИРОВКА'} subtitle={'НАДПИСЬ'} imageSrc={TattoServices}/>
                    <ServiceItem title={'УДАЛЕНИЕ ТАТУИРОВКИ'} subtitle={'НАДПИСЬ'} imageSrc={TattoServices2}/>
                    <ServiceItem title={'ПИРСИНГ'} subtitle={'НАДПИСЬ'} imageSrc={TattoServices3}/>
                    <ServiceItem title={'ОБУЧЕНИЕ '} subtitle={'НАДПИСЬ'} imageSrc={TattoServices4}/>
                </div>
            </div>
        </section>
    );
};

export default Services;
