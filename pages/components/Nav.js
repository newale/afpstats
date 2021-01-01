import React from 'react'
import styles from './../../styles/Nav.module.css'

export default () => (
  <nav className={styles.nav}>
    <ul>
      <li>Inicio</li>
      <li>Valores cuota</li>
      <li>Rentabilidad</li>
      <li aria-hidden="true">|</li>
      <li>Nosotros</li>
    </ul>
  </nav>
)