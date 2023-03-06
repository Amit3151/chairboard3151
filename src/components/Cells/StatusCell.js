const presets = {
  Pending: {
    color: '#F4911A',
    background: '#FFF0DD'
  },
  Approved: {
    color: '#06921D',
    background: '#E1F1EA'
  },
  Declined: {
    color: 'red',
    background: '#FFE7E7'
  }
};

export default function StatusCell({ value }) {
  return (
    <div className="box_span" style={{ justifyContent: 'center' }}>
      <span className="label" style={presets[value]}>
        {value}
      </span>
    </div>
  )
}
