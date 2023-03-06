import React from 'react'
import { ReactComponent as WalletIcon } from '../images/vuesaxwallet.svg'

export default function Figure({ label, value }) {
  return (
    <div className="figure flex column">
      <span className="figure__value">{value}</span>
      <span className="figure__label">{label}</span>
      <WalletIcon style={{ position: 'absolute', right: 22, top: 22, height: 40, width: 40, opacity: 0.5 }} />
    </div>
  )
}
