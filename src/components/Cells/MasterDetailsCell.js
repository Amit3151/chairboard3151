export default function MasterDetailsCell({ value: { code, phone} }) {
    return (
      <div className="box_span" style={{ justifyContent: 'center' }}>
        <span className="span_b">M</span>
        <span>
          {code}<br />
          {phone}
        </span>
      </div>
    )
  }