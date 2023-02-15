const TopCards = () => {
  return (
    <div className='row'>
      <div className='col-sm-6 col-xl-3'>
        <div className='card card-content'>
          <div className='card-body row justify-content-center'>
            <div className='col-5 align-self-center'>
              <h4 className='mb-2 font-size-20'>12</h4>
              <p className='mb-2 text-muted font-size-13 text-nowrap'>
                Cargo Delivered
              </p>
              <span className='badge bg-soft-success text-success mt-1 shadow-none'>
                <i className='mdi mdi-menu-up font-size-16' />
                20.15%
              </span>
            </div>
            <div className='col-7 align-self-center'></div>
          </div>
        </div>
      </div>
      {/* end col */}
      <div className='col-sm-6 col-xl-3'>
        <div className='card card-content'>
          <div className='card-body row justify-content-center'>
            <div className='col-5 align-self-center'>
              <h4 className='mb-2 font-size-20'>2</h4>
              <p className='mb-2 text-muted font-size-13 text-nowrap'>
                Rejected Cargo
              </p>
              <span className='badge bg-soft-warning text-warning mt-1 shadow-none'>
                <i className='mdi mdi-menu-down font-size-16' />
                7.15%
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* end col */}
      <div className='col-sm-6 col-xl-3'>
        <div className='card card-content'>
          <div className='card-body row justify-content-center'>
            <div className='col-5 align-self-center'>
              <h4 className='mb-2 font-size-20'>5</h4>
              <p className='mb-2 text-muted font-size-13 text-nowrap'>
                Cargo on Delivery
              </p>
              <span className='badge bg-soft-warning text-warning mt-1 shadow-none'>
                <i className='mdi mdi-menu-down font-size-16' />
                6.05%
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* end col */}
      <div className='col-sm-6 col-xl-3'>
        <div className='card card-content'>
          <div className='card-body row justify-content-center'>
            <div className='col-5 align-self-center'>
              <h4 className='mb-2 font-size-20'>2501</h4>
              <p className='mb-2 text-muted font-size-13 text-nowrap'>
                Total Sales
              </p>
              <span className='badge bg-soft-success text-success mt-1 shadow-none'>
                <i className='mdi mdi-menu-up font-size-16' />
                8.97%
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* end col */}
    </div>
  )
}

export default TopCards
