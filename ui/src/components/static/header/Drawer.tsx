import React, { useState, useEffect, useRef, MutableRefObject, Dispatch, SetStateAction } from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

import styles from './header.module.sass'
import Header from './Header'

interface Props {
  isDrawerOpen: boolean
  children: JSX.Element | JSX.Element[]
  setIsDrawerOpen: Dispatch<SetStateAction<boolean>>
}
const Drawer = ({ isDrawerOpen, children, setIsDrawerOpen }: Props) => {
  const ref = (useRef(null) as unknown) as MutableRefObject<HTMLDivElement>
  useEffect(() => {
    function handleClickOutside(event: globalThis.MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsDrawerOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])
  const drawerClasses = classNames([styles.drawerRoot, isDrawerOpen && styles.openDrawer])
  return (
    <div ref={ref} className={drawerClasses}>
      {children}
    </div>
  )
}

const CategoryDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <>
      <Header handleDrawerToggle={() => setIsDrawerOpen(!isDrawerOpen)} />
      <Drawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen}>
        <h1>Hey</h1>
      </Drawer>
    </>
  )
}

export default CategoryDrawer
