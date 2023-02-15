import Client from '@/layout/client/Client'

const Add = () => {
  return (
    <Client>
      <div className='row'>
        <div className='col'>
          <div className='card '>
            <div className='card-body'>
              <h5 className='card-title'>Bootstrap Basic Form</h5>
              <p className='card-title-desc'>
                Heres a quick example to demonstrate Bootstraps form styles.
                Keep reading for documentation on required classes, form layout,
                and more.
              </p>
              <form>
                <div className='form-group mb-3'>
                  <label htmlFor='tripRoute'>Trip Route</label>
                  <input
                    type='text'
                    className='form-control'
                    id='tripRoute'
                    name='tripRoute'
                  />
                </div>
                <div className='form-group mb-3'>
                  <label htmlFor='pickupLocation'>Pick up location</label>
                  <input
                    type='text'
                    className='form-control'
                    id='pickupLocation'
                    name='pickupLocation'
                  />
                </div>
                <div className='form-group mb-3'>
                  <label htmlFor='pickupDate'>Pick up date</label>
                  <input
                    type='date'
                    className='form-control'
                    id='pickupDate'
                    name='pickupDate'
                  />
                </div>
                <div className='form-group mb-3'>
                  <label htmlFor='cargoSize'>Cargo size</label>
                  <input
                    type='text'
                    className='form-control'
                    id='cargoSize'
                    name='cargoSize'
                  />
                </div>
                <div className='form-group mb-3'>
                  <label htmlFor='cargoWeight'>Cargo weight</label>
                  <input
                    type='text'
                    className='form-control'
                    id='cargoWeight'
                    name='cargoWeight'
                  />
                </div>
                <div className='form-group mb-3'>
                  <label htmlFor='dropoffLocation'>Drop off location</label>
                  <input
                    type='text'
                    className='form-control'
                    id='dropoffLocation'
                    name='dropoffLocation'
                  />
                </div>
                <div className='form-group mb-3'>
                  <label htmlFor='specialInstructions'>
                    Any special instructions if any
                  </label>
                  <textarea
                    className='form-control'
                    id='specialInstructions'
                    name='specialInstructions'
                    defaultValue={''}
                  />
                </div>
                <div className='form-group mb-3'>
                  <label htmlFor='vesselBerthDate'>
                    Vessel Berth date if any
                  </label>
                  <input
                    type='date'
                    className='form-control'
                    id='vesselBerthDate'
                    name='vesselBerthDate'
                  />
                </div>
                <div className='form-group mb-3'>
                  <label htmlFor='billOfLading'>Bill of lading if any</label>
                  <input
                    type='text'
                    className='form-control'
                    id='billOfLading'
                    name='billOfLading'
                  />
                </div>
                <div className='form-group mb-3'>
                  <label htmlFor='containerNumber'>
                    Container number if any
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='containerNumber'
                    name='containerNumber'
                  />
                </div>
                <div className='form-group mb-3'>
                  <label htmlFor='clientReference'>
                    Client Reference number if any
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='clientReference'
                    name='clientReference'
                  />
                </div>
                <div className='form-group mb-3'>
                  <label htmlFor='attachment'>Attachment tab</label>
                  <input
                    type='file'
                    className='form-control-file'
                    id='attachment'
                    name='attachment'
                  />
                </div>
                <button type='submit' className='btn btn-primary'>
                  Submit
                </button>
              </form>
            </div>
          </div>
          {/* end card */}
        </div>

        {/* end col */}
      </div>
    </Client>
  )
}

export default Add
