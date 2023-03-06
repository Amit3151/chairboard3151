export default function AgentCell({ value: { name, phone, image } }) {
  return (
    <div className="box_span" style={{ justifyContent: 'center' }}>
      <span className="span_a">A</span>
      <span>
        {name},<br />
        {phone}
      </span>
    </div>
  )
}

