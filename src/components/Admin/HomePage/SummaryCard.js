const SummaryCard = () => {
  return (
    <div className='row'>
      <div className='col-sm-6 col-xl-3'>
        <div className='card card-content'>
          <div className='card-body row justify-content-center'>
            <div className='col-5 align-self-center'>
              <h4 className='mb-2 font-size-20'>1530</h4>
              <p className='mb-2 text-muted font-size-13 text-nowrap'>
                Unique Visitors
              </p>
              <span className='badge bg-soft-success text-success mt-1 shadow-none'>
                <i className='mdi mdi-menu-up font-size-16' />
                20.15%
              </span>
            </div>
            <div className='col-7 align-self-center'>
              <span
                className='peity-line'
                data-width='100%'
                data-peity='{ "fill": ["#b5f1e0"],"stroke": ["#0acf97"]}'
                data-height={80}
              >
                1,2,3,4,3,6,3,5,3,3,4,2
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
              <h4 className='mb-2 font-size-20'>8320</h4>
              <p className='mb-2 text-muted font-size-13 text-nowrap'>
                New Users
              </p>
              <span className='badge bg-soft-danger text-danger mt-1 shadow-none'>
                <i className='mdi mdi-menu-down font-size-16' />
                7.15%
              </span>
            </div>
            <div className='col-7 align-self-center text-end'>
              <span
                className='peity-line'
                data-width='100%'
                data-peity='{ "fill": ["#d6d8f5"],"stroke": ["#777edd"]}'
                data-height={80}
              >
                0,3,6,3,4,2,6,1,8,4,4,2
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
              <h4 className='mb-2 font-size-20'>1840</h4>
              <p className='mb-2 text-muted font-size-13 text-nowrap'>
                New Orders
              </p>
              <span className='badge bg-soft-danger text-danger mt-1 shadow-none'>
                <i className='mdi mdi-menu-down font-size-16' />
                6.05%
              </span>
            </div>
            <div className='col-7 align-self-center'>
              <span
                className='peity-line'
                data-width='100%'
                data-peity='{ "fill": ["#fdebb5"],"stroke": ["#f9bc0b"]}'
                data-height={80}
              >
                2,4,7,3,5,3,6,3,4,3,2,1,2
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
            <div className='col-7 align-self-center'>
              <span
                className='peity-bar'
                data-peity='{ "fill": ["#ffd1e1", "#ffd1e1"]}'
                data-width='100%'
                data-height={80}
              >
                5,6,2,8,9,4,7,10,11,12,10,4,7,10
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* end col */}
    </div>
  )
}

export default SummaryCard
