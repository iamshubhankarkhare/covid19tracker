import React from 'react'
import styles from './Footer.module.css'
import github from '../../assets/github.png'
import ln from '../../assets/ln.png'
import insta from '../../assets/insta.png'

export default function Footer() {
    return (
        <div className={styles.container}>
            <h1>Created by Shubhankar Khare </h1>
            <div className={styles.icons}>
                <a href="https://github.com/iamshubhankarkhare"><img src={github} alt="github"></img> </a>
                <a href="https://www.linkedin.com/in/shubhankar-khare-6a5856192"><img src={ln} alt="linkdin"></img> </a>
                <a href="https://www.instagram.com/shubhankar_khare/"><img src={insta} alt="insta"></img> </a>
            </div>
        </div>
    )
}
