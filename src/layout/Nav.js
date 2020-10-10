import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Nav.module.scss'
import Container from '../components/Container'

const Nav = props => (
  <nav className={styles.nav}>
    <Container>
      <div className={styles.navWrapper}>
        <div>logo slogan</div>
        <ul className={styles.ul}>
          <li>
            <Link to="/">首页</Link>
          </li>
        </ul>
      </div>
    </Container>
  </nav>
)

export default Nav
