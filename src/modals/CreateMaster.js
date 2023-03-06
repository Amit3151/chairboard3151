import '../css/Modal.css';

export default function CreateMasterModal({ isOpen, onClickOutside }) {
  return (
    <div className={`modal ${isOpen ? 'open' : 'hidden'}`} onClick={onClickOutside}>
      <div className="modal-body" onClick={e => e.stopPropagation()}>
        <div className="flex row space-between">
          <h2>Master Creation</h2>
        </div>
        <div className="flex row space-between">
          <div className="flex column" style={{ flex: '1 0 50%' }}>
            <div className="flex column" style={{ padding: '40px 80px 0 0' }}>
              <label htmlFor="name">Name</label>
              <input className="form-input" id="name" placeholder="Enter Name" />
            </div>
            <div className="flex column" style={{ padding: '40px 80px 0 0' }}>
              <label htmlFor="mobile">Mobile</label>
              <input className="form-input" id="mobile" placeholder="Enter Mobile Number" />
            </div>
            <div className="flex column" style={{ padding: '40px 80px 0 0' }}>
              <label htmlFor="address">Address</label>
              <input className="form-input" id="address" placeholder="Enter Address" />
            </div>
            <div className="flex column" style={{ padding: '40px 80px 0 0' }}>
              <label htmlFor="district">District</label>
              <input className="form-input" id="district" placeholder="Enter District" />
            </div>
          </div>
          <div className="flex column" style={{ flex: '1 0 50%' }}>
            <div className="flex column" style={{ padding: '40px 80px 0 0' }}>
              <label htmlFor="email">Email</label>
              <input className="form-input" id="email" placeholder="Enter Email" />
            </div>
            <div className="flex column" style={{ padding: '40px 80px 0 0' }}>
              <label htmlFor="password">Password</label>
              <input className="form-input" id="password" type="password" placeholder="Enter Password" />
            </div>
            <div className="flex column" style={{ padding: '40px 80px 0 0' }}>
              <label htmlFor="password">Pincode</label>
              <input className="form-input" id="pin" type="password" placeholder="Enter Pincode" />
            </div>
            <div className="flex column" style={{ padding: '40px 80px 0 0' }}>
              <label htmlFor="email">State</label>
              <input className="form-input" id="email" placeholder="Enter State" />
            </div>
          </div>
        </div>
        <div className="flex row" style={{ justifyContent: 'flex-end', paddingRight: 40, marginTop: 30 }}>
          <button className="primary">Submit</button>
        </div>
      </div>
    </div>
  )
}
