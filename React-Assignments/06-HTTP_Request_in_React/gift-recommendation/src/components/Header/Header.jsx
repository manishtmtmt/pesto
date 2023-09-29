import React from 'react';
import emoji from 'react-easy-emoji'

import Styles from './Header.module.css'

export const Header = () => {
  return (
    <div className={Styles.header}>
      <div className={Styles.emoji}>{emoji("💡")}</div>
      <h1>GiftSmart</h1>
    </div>
  )
}
