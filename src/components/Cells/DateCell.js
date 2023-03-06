export default function DateCell({ value }) {
  return (
    <div className="box_span" style={{ justifyContent: 'center' }}>
      <span>
        {value.toFormat('dd/MM/yyyy')}<br/>
        {value.toFormat('hh:mm:ss')}
      </span>
    </div>
  )
}

