import Image, { StaticImageData } from 'next/image'
import styles from '../../styles/Destination.module.css'

interface PropsTypes{
    place:StaticImageData;
    placename:string;
    likes:string;
    icon:StaticImageData;
    days:string;
}
export const DestinationCard = ({place,placename,likes,icon,days}:PropsTypes) => {
  return (
    <div className={styles.DestinationImageCard}>
        <div className={styles.place_image_container}>
          <Image className={styles.placeimage} src={place} />
        </div>
        <div className={styles.countryname_likes_container}>
            <label className={styles.countryname}>{placename}</label>
            <label className={styles.likescount}>{likes}</label>
        </div>
        <div className={styles.icon_days_container}>
            <div className={styles.icon_container}>
                <Image src={icon}/>
            </div>
            <label className={styles.daystext}>{days}</label>
        </div>
    </div>
  )
}
