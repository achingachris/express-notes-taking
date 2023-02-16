import CargoChart from './CargoChart'

const OverView = () => {
  return (
    <div className='row'>
      <div className='col-xl-12'>
        <div className='card'>
          <div className='card-body'>
            <h5>Overview</h5>
            <div className='row'>
              <div className='col-lg-9 border-right'>
                <div className='card shadow-none mb-0 '>
                  <div className='card-body'>
                    <CargoChart />
                  </div>
                </div>
              </div>
              {/* end col */}
              <div className='col-lg-3'>
                <div className='card mb-0 overview shadow-none'>
                  <div className='card-body border-bottom'>
                    <div className=''>
                      <div className='row align-items-center'>
                        <div className='col-4'>
                          <div className='overview-content'>
                            <i className='mdi mdi-share-variant  text-success' />
                          </div>
                        </div>
                        <div className='col-8 text-end'>
                          <p className='text-muted font-size-13 mb-1'>
                            Trips Made
                          </p>
                          <h4 className='mb-0 font-size-20'>700</h4>
                        </div>
                      </div>
                      {/* end row */}
                    </div>
                  </div>
                  <div className='card-body border-bottom'>
                    <div className=''>
                      <div className='row  align-items-center'>
                        <div className='col-4'>
                          <div className='overview-content'>
                            <i className='mdi mdi-gesture-double-tap  text-purple' />
                          </div>
                        </div>
                        <div className='col-8 text-end'>
                          <p className='text-muted font-size-13 mb-1'>
                            Cargo Tons Delivered
                          </p>
                          <h4 className='mb-0 font-size-20'>13,503</h4>
                        </div>
                      </div>
                      {/* end row */}
                    </div>
                  </div>
                  <div className='card-body border-bottom'>
                    <div className=''>
                      <div className='row align-items-center'>
                        <div className='col-4'>
                          <div className='overview-content'>
                            <i className='mdi mdi-earth text-warning' />
                          </div>
                        </div>
                        <div className='col-8 text-end'>
                          <p className='text-muted font-size-13 mb-1'>Routes</p>
                          <h4 className='mb-0 font-size-20'>100</h4>
                        </div>
                      </div>
                      {/* end row */}
                    </div>
                  </div>
                  <div className='card-body'>
                    <div className=''>
                      <div className='row  align-items-center'>
                        <div className='col-4'>
                          <div className='overview-content'>
                            <i className='mdi mdi-access-point text-pink' />
                          </div>
                        </div>
                        <div className='col-8 text-end'>
                          <p className='text-muted font-size-13 mb-1'>
                            Approved Cargo
                          </p>
                          <h4 className='mb-0 font-size-20'>500</h4>
                        </div>
                        <div className='col-12'>
                          <div className='progress mt-4' style={{ height: 6 }}>
                            <div
                              className='progress-bar progress-animated bg-warning'
                              role='progressbar'
                              style={{ maxWidth: '85%', borderRadius: 5 }}
                              aria-valuenow={85}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                      {/* end row */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OverView
