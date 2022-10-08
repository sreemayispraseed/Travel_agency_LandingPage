import React from 'react'
import styles from '../../styles/Title.module.css'
interface PropsTypes{
    smalltitle:string;
    bigtitle:string;
}
export const Title = ({smalltitle,bigtitle}:PropsTypes) => {
  return (
    <div className={styles.title_container}>
        <div className={styles.smalltitletext}>{smalltitle}</div>
        <h2 className={styles.bigtitletext}>{bigtitle}</h2>
    </div>
  )
}
