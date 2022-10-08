import styles from '../../../styles/Header.module.css'
interface PropsTypes{
    title:string;
}
const HeaderNavLink =({title}:PropsTypes) =>{
    return(
        <div className={styles.headerText}>
         {title}
        </div>
    )
}
export default HeaderNavLink;