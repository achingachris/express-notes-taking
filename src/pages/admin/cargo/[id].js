import Admin from '@/layout/admin/Admin'

const CargoDetails = () => {
  return (
    <Admin>
      {/* cargo status */}
      <div className='row'>
        <div className='col'>
          <div className='card card-body text-center'>
            <h4 className='card-title'>Cargo ID: 4523657</h4>
            <h4 className='card-title'>Client Name: Ummar</h4>
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
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>Trip Route</h5>
            <p className='card-text'>From: Arusha</p>
            <p className='card-text'>To: Mombasa</p>
            <hr />
            <h5 className='card-title'>Pick up information</h5>
            <p className='card-text'>Location: Port of Arusha</p>
            <p className='card-text'>Date: May 1, 2023</p>
            <p className='card-text'>Cargo size: 20ft container</p>
            <p className='card-text'>Cargo weight: 15,000 lbs</p>
            <hr />
            <h5 className='card-title'>Drop off information</h5>
            <p className='card-text'>Location: Port of Mombasa</p>
            <p className='card-text'>
              Special instructions: Fragile items, handle with care
            </p>
            <p className='card-text'>Vessel Berth date: May 15, 2023</p>
            <p className='card-text'>Bill of lading: BL20230501001</p>
            <p className='card-text'>Container number: NYKU1234567</p>
            <p className='card-text'>Client Reference number: ACME-2023-001</p>
            <hr />
            <a href='#' className='card-link'>
              Attachments
            </a>
          </div>
        </div>

        {/* <div className='col'>
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
              <strong>Delivery Address:</strong> 123, Main Street, Arusha
            </p>
            <p className='card-text text-muted font-size-13'>
              <strong>Delivery Note:</strong> Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quisquam, quod.
            </p>
          </div>
        </div> */}
      </div>
    </Admin>
  )
}

export default CargoDetails
