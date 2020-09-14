import React from 'react'
// import { Link } from 'react-router-dom'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './header.module.sass'
import Container from 'components/styled/Container'

interface Props {
  handleDrawerToggle: () => void
}
const Header = ({ handleDrawerToggle }: Props) => {
  return (
    <header className={styles.header}>
      <Container justify='center'>
        <Container justify='space-between' width={75}>
          <Container onClick={handleDrawerToggle} align='center'>
            <FontAwesomeIcon icon={faBars} />
          </Container>
        </Container>
      </Container>
    </header>
  )
}

export default Header

// <Link to='/'>Logo</Link>
// <Link to='/multiple-choice'>Multiple Choice</Link>
// <Link to='/match'>Match</Link>
