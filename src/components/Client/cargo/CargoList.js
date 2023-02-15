import Link from "next/link"

const CargoList = () => {
  return (
    <div className='row'>
      <div className='col'>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>My cargo</h5>
            <div className='table-responsive-sm'>
              <table className='table mb-0 color-table'>
                <thead>
                  <tr className=''>
                    <th scope='col'>#</th>
                    <th scope='col'>Date Added</th>
                    <th scope='col'>Status</th>
                    <th scope='col'>Route</th>
                    <th scope='col'></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='table-danger'>
                    <th scope='row'>1</th>
                    <td className=''>2/2/2023</td>
                    <td className=''>Rejected</td>
                    <td className=''>Migori - Arusha</td>
                    <td className=''>
                      <div className='row'>
                        <div className='col'>
                          <div className='dropdown'>
                            <button
                              className='btn btn-primary dropdown-toggle'
                              type='button'
                              id='dropdownMenuButton'
                              data-bs-toggle='dropdown'
                              aria-haspopup='true'
                              aria-expanded='false'
                            >
                              Action <i className='mdi mdi-chevron-down' />
                            </button>
                            <div
                              className='dropdown-menu'
                              aria-labelledby='dropdownMenuButton'
                            >
                              <Link href='/client/cargo/4523657' legacyBehavior>
                                <a className='dropdown-item'>
                                  View
                                </a>
                              </Link>
                              <a className='dropdown-item' href='#'>
                                Edit
                              </a>
                              <a className='dropdown-item' href='#'>
                                Delete
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className='table-warning'>
                    <th scope='row'>2</th>
                    <td className=''>1/3/2023</td>
                    <td className=''>Pending Approval</td>
                    <td className=''>Arusha - Mombasa</td>
                    <td className=''>
                      <div className='row'>
                        <div className='col'>
                          <div className='dropdown'>
                            <button
                              className='btn btn-primary dropdown-toggle'
                              type='button'
                              id='dropdownMenuButton'
                              data-bs-toggle='dropdown'
                              aria-haspopup='true'
                              aria-expanded='false'
                            >
                              Action <i className='mdi mdi-chevron-down' />
                            </button>
                            <div
                              className='dropdown-menu'
                              aria-labelledby='dropdownMenuButton'
                            >
                              <Link href='/client/cargo/4523657' legacyBehavior>
                                <a className='dropdown-item'>
                                  View
                                </a>
                              </Link>
                              <a className='dropdown-item' href='#'>
                                Edit
                              </a>
                              <a className='dropdown-item' href='#'>
                                Delete
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className='table-primary'>
                    <th scope='row'>3</th>
                    <td>1/1/2023</td>
                    <td>On Delivery</td>
                    <td>Kigali - Dodoma</td>
                    <td className=''>
                      <div className='row'>
                        <div className='col'>
                          <div className='dropdown'>
                            <button
                              className='btn btn-primary dropdown-toggle'
                              type='button'
                              id='dropdownMenuButton'
                              data-bs-toggle='dropdown'
                              aria-haspopup='true'
                              aria-expanded='false'
                            >
                              Action <i className='mdi mdi-chevron-down' />
                            </button>
                            <div
                              className='dropdown-menu'
                              aria-labelledby='dropdownMenuButton'
                            >
                              <Link href='/client/cargo/4523657' legacyBehavior>
                                <a className='dropdown-item'>
                                  View
                                </a>
                              </Link>
                              <a className='dropdown-item' href='#'>
                                Edit
                              </a>
                              <a className='dropdown-item' href='#'>
                                Delete
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              {/* end table */}
            </div>
          </div>
        </div>
        {/* end card */}
      </div>
    </div>
  )
}

export default CargoList
