import React from 'react'
import Image, { StaticImageData } from 'next/image'
import styles from '../../styles/ServiceCard.module.css'

interface PropsTypes{
    image:StaticImageData;
    name:string;
    description:string;
}
export const ServiceCard = ({image,name,description}:PropsTypes) => {
  return (
    <div className={styles.services_card_main_container}>
       <div className={styles.weatherimage_container}>
        <Image src={image}/>
        </div>
        <h5 className={styles.nametext}>{name}</h5>
        <p className={styles.descriptiontext}>{description}</p> 

    </div>
  )
}
