import React from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import styles from '../../../styles/Dropdown.module.css'
export const Dropdown = () => {
  return (
    <div className={styles.dropdown_container}>
        <DropdownMenu.Root>
            <DropdownMenu.Trigger className={styles.dropdown_main_text}>
               Language
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
                <DropdownMenu.Item className={styles.langTitle}>English</DropdownMenu.Item>
                <DropdownMenu.Item className={styles.langTitle}>French</DropdownMenu.Item>
                <DropdownMenu.Item className={styles.langTitle}>Chinese</DropdownMenu.Item>
            </DropdownMenu.Content>
            </DropdownMenu.Root>       
     </div>
  )
}
