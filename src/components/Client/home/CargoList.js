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
                  </tr>
                </thead>
                <tbody>
                  <tr className='table-danger'>
                    <th scope='row'>1</th>
                    <td className=''>2/2/2023</td>
                    <td className=''>Rejected</td>
                    <td className=''>Migori - Arusha</td>
                  </tr>
                  <tr className='table-warning'>
                    <th scope='row'>2</th>
                    <td className=''>1/3/2023</td>
                    <td className=''>Pending Approval</td>
                    <td className=''>Arusha - Mombasa</td>
                  </tr>
                  <tr className='table-primary'>
                    <th scope='row'>3</th>
                    <td>1/1/2023</td>
                    <td>On Delivery</td>
                    <td>Kigali - Dodoma</td>
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
