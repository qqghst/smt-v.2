import React from 'react';
import styles from './styles.module.scss';

import ServiceItem from './ServiceItem';
import Title from '@/ui/title';

const Services: React.FC = () => {
    return (
        <section className='bg-black'>
            <div className='container mx-auto py-[100px]'>
                <Title>услуги</Title>
                <div>
                    <ServiceItem title={'ТАТУИРОВКА'} subtitle={'НАДПИСЬ'}/>
                    <ServiceItem title={'УДАЛЕНИЕ ТАТУИРОВКИ'} subtitle={'НАДПИСЬ'}/>
                    <ServiceItem title={'ПИРСИНГ'} subtitle={'НАДПИСЬ'}/>
                    <ServiceItem title={'ОБУЧЕНИЕ '} subtitle={'НАДПИСЬ'}/>
                </div>
            </div>
        </section>
    );
};

export default Services;
