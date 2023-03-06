export default function AddressCell({ value: { city, state } }) {
  return (
    <div className="box_span" style={{ justifyContent: 'center' }}>
      <span>
        {city}<br/>
        {state}
      </span>
    </div>
  )
}

