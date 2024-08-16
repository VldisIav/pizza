import React from 'react'

import styles from './NotFoundBlock.module.scss'

const NotFoundBlock = () => {
  return (
    <div class={styles.root}>
        <h1 >
            <span> 😟 </span>
            <br/>
            Ничего не найдено 
        </h1>
    </div>
  )
}


export default NotFoundBlock