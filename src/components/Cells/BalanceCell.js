export default function BalanceCell({ value: { logo, num} }) {
    return (
      <div className="box_span" style={{ justifyContent: 'center' }}>
        
        <span>
          {logo}
          {num}
        </span>
        
      </div>
    )
  }