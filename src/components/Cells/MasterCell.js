export default function MasterCell({ value: { masterCodevalue1, masterCodevalue2 } }) {
    return (
      <div className="box_span" style={{ justifyContent: 'center' }}>
        <span className="span_b">M</span>
        <span>
          {masterCodevalue1}<br/>
          {masterCodevalue2}
        </span>
      </div>
    )
  }