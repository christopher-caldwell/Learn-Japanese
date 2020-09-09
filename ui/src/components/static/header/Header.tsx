import React from 'react'
import { Link } from 'react-router-dom'

import styles from './header.module.sass'
import Container from 'components/styled/Container'

const Header = () => {
  return (
    <header className={styles.header}>
      <Container justify='center'>
        <Container justify='space-between' width={75}>
          <Link to='/'>Logo</Link>
          <Link to='/multiple-choice'>Multiple Choice</Link>
          <Link to='/match'>Match</Link>
        </Container>
      </Container>
    </header>
  )
}

export default Header
