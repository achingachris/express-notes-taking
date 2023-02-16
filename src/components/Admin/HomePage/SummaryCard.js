const SummaryCard = () => {
  return (
    <div className='row'>
      <div className='col-sm-6 col-xl-3'>
        <div className='card card-content'>
          <div className='card-body row justify-content-center'>
            <div className='col-5 align-self-center'>
              <h4 className='mb-2 font-size-20'>200</h4>
              <p className='mb-2 text-muted font-size-13 text-nowrap'>
                Clients
              </p>
             
            </div>
            {/* <div className='col-7 align-self-center'>
              <span
                className='peity-line'
                data-width='100%'
                data-peity='{ "fill": ["#b5f1e0"],"stroke": ["#0acf97"]}'
                data-height={80}
              >
                1,2,3,4,3,6,3,5,3,3,4,2
              </span>
            </div> */}
          </div>
        </div>
      </div>
      {/* end col */}
      <div className='col-sm-6 col-xl-3'>
        <div className='card card-content'>
          <div className='card-body row justify-content-center'>
            <div className='col-5 align-self-center'>
              <h4 className='mb-2 font-size-20'>100</h4>
              <p className='mb-2 text-muted font-size-13 text-nowrap'>
                Transporters
              </p>
            </div>
            {/* <div className='col-7 align-self-center text-end'>
              <span
                className='peity-line'
                data-width='100%'
                data-peity='{ "fill": ["#d6d8f5"],"stroke": ["#777edd"]}'
                data-height={80}
              >
                0,3,6,3,4,2,6,1,8,4,4,2
              </span>
            </div> */}
          </div>
        </div>
      </div>
      {/* end col */}
      <div className='col-sm-6 col-xl-3'>
        <div className='card card-content'>
          <div className='card-body row justify-content-center'>
            <div className='col-5 align-self-center'>
              <h4 className='mb-2 font-size-20'>25</h4>
              <p className='mb-2 text-muted font-size-13 text-nowrap'>
                Pending Approvals
              </p>
             
            </div>
            {/* <div className='col-7 align-self-center'>
              <span
                className='peity-line'
                data-width='100%'
                data-peity='{ "fill": ["#fdebb5"],"stroke": ["#f9bc0b"]}'
                data-height={80}
              >
                2,4,7,3,5,3,6,3,4,3,2,1,2
              </span>
            </div> */}
          </div>
        </div>
      </div>
      {/* end col */}
      <div className='col-sm-6 col-xl-3'>
        <div className='card card-content'>
          <div className='card-body row justify-content-center'>
            <div className='col-5 align-self-center'>
              <h4 className='mb-2 font-size-20'>100</h4>
              <p className='mb-2 text-muted font-size-13 text-nowrap'>
                Allocated Orders
              </p>
            </div>
            {/* <div className='col-7 align-self-center'>
              <span
                className='peity-bar'
                data-peity='{ "fill": ["#ffd1e1", "#ffd1e1"]}'
                data-width='100%'
                data-height={80}
              >
                5,6,2,8,9,4,7,10,11,12,10,4,7,10
              </span>
            </div> */}
          </div>
        </div>
      </div>
      {/* end col */}
    </div>
  )
}

export default SummaryCard
