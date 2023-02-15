import Admin from '@/layout/admin/Admin'

const CargoDetails = () => {
  return (
    <Admin>
      {/* cargo status */}
      <div className='row'>
        <div className='col'>
          <div className='card card-body text-center'>
            <h4 className='card-title'>Cargo ID: 4523657</h4>
            <p className='card-text text-muted font-size-13'>
              Cargo Status: Waiting Approval
            </p>
            <a href='#' className='btn btn-outline-primary '>
              Contact Cargo Client
            </a>
          </div>
        </div>

        <div className='col'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Cargo Actions and Status</h5>
              <p className='card-title-desc'>
                Update cargo status and assign to Transporter
              </p>
              <div className='row'>
                <div className='col-sm-6'>
                  <div className='dropdown'>
                    <button
                      className='btn btn-primary dropdown-toggle'
                      type='button'
                      id='dropdownMenuButton'
                      data-bs-toggle='dropdown'
                      aria-haspopup='true'
                      aria-expanded='false'
                    >
                      Cargo Action <i className='mdi mdi-chevron-down' />
                    </button>
                    <div
                      className='dropdown-menu'
                      aria-labelledby='dropdownMenuButton'
                    >
                      <a className='dropdown-item' href='#'>
                        Approve
                      </a>
                      <a className='dropdown-item' href='#'>
                        Reject
                      </a>
                      <a className='dropdown-item' href='#'>
                        Withdraw
                      </a>
                    </div>
                  </div>
                </div>
                {/* End Col */}
                <div className='col-sm-6'>
                  <div className='dropdown mt-4 mt-sm-0'>
                    <a
                      className='btn btn-primary dropdown-toggle'
                      href='#'
                      id='dropdownMenuLink'
                      data-bs-toggle='dropdown'
                      aria-haspopup='true'
                      aria-expanded='false'
                    >
                      Transporter <i className='mdi mdi-chevron-down' />
                    </a>
                    <div
                      className='dropdown-menu'
                      aria-labelledby='dropdownMenuLink'
                    >
                      <a className='dropdown-item' href='#'>
                        Add to Transporters View
                      </a>
                      <a className='dropdown-item' href='#'>
                        Assign
                      </a>
                    </div>
                  </div>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            {/* End Cardbody */}
          </div>
          {/* End Card */}
        </div>
      </div>

      {/* cargo details */}
      <div className='row'>
        <div className='col-md-6'>
          <div className='card card-body'>
            <h4 className='card-title'>Cargo Details</h4>
            <p className='card-text text-muted font-size-13'>
              <strong>Sender Name:</strong> John Doe
            </p>
            <p className='card-text text-muted font-size-13'>
              <strong>Sender Phone:</strong> 08012345678
            </p>
            <p className='card-text text-muted font-size-13'>
              <strong>Sender Address:</strong> 123, Main Street, Lagos
            </p>
            <p className='card-text text-muted font-size-13'>
              <strong>Receiver Name:</strong> Jane Doe
            </p>
            <p className='card-text text-muted font-size-13'>
              <strong>Receiver Phone:</strong> 08012345678
            </p>
            <p className='card-text text-muted font-size-13'>
              <strong>Receiver Address:</strong> 123, Main Street, Lagos
            </p>
            <p className='card-text text-muted font-size-13'>
              <strong>Parcel Weight:</strong> 2kg
            </p>
            <p className='card-text text-muted font-size-13'>
              <strong>Parcel Type:</strong> Documents
            </p>
            <p className='card-text text-muted font-size-13'>
              <strong>Parcel Description:</strong> Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quisquam, quod.
            </p>
          </div>
        </div>
        <div className='col-md-6'>
          <div className='card card-body'>
            <h4 className='card-title'>Delivery Details</h4>
            <p className='card-text text-muted font-size-13'>
              <strong>Delivery Type:</strong> Pickup
            </p>
            <p className='card-text text-muted font-size-13'>
              <strong>Delivery Date:</strong> 12/12/2020
            </p>
            <p className='card-text text-muted font-size-13'>
              <strong>Delivery Time:</strong> 12:00pm
            </p>
            <p className='card-text text-muted font-size-13'>
              <strong>Delivery Address:</strong> 123, Main Street, Lagos
            </p>
            <p className='card-text text-muted font-size-13'>
              <strong>Delivery Note:</strong> Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quisquam, quod.
            </p>
          </div>
        </div>
      </div>
    </Admin>
  )
}

export default CargoDetails
