import React from 'react';
import styles from './styles.module.scss'

interface ITitle {
    children: React.ReactNode
}

const Title: React.FC<ITitle> = ({children}) => {
  return (
    <>
      <button className={`${styles.title}`}>{children}</button>
    </>
  )
}

export default Title
