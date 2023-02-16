import TransporterAuth from '@/layout/auth/transporter/TransporterAuth'
import Image from 'next/image'

const register = () => {
  return (
    <TransporterAuth>
      <div className='d-flex justify-content-center align-items-center'>
        <Image src='/logo.png' alt='' width='100' height='50' />
      </div>
      <div className='row'>
        <h2 className='text-center'>Client Registration</h2>
        <p className='text-center'>Enter details to register as a Client</p>
        <div className='col-sm-12'>
          <div className='card'>
            <div className='card-body'>
              <form>
                <div className='form-group'>
                  <label htmlFor='fullName'>
                    Full name of Managing Director
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='fullName'
                    name='fullName'
                    required='Please enter name of MD'
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='email'>Email address</label>
                  <input
                    type='email'
                    className='form-control'
                    id='email'
                    name='email'
                    required=''
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='phone'>Phone number</label>
                  <input
                    type='tel'
                    className='form-control'
                    id='phone'
                    name='phone'
                    required=''
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='companyName'>Company name</label>
                  <input
                    type='text'
                    className='form-control'
                    id='companyName'
                    name='companyName'
                    required=''
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='tinNumber'>TIN number</label>
                  <input
                    type='text'
                    className='form-control'
                    id='tinNumber'
                    name='tinNumber'
                    required=''
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='physicalAddress'>Physical Address</label>
                  <textarea
                    className='form-control'
                    id='physicalAddress'
                    name='physicalAddress'
                    rows={3}
                    required=''
                    defaultValue={''}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='businessSpecialization'>
                    Business Specialization (Local, Transit or Both)
                  </label>
                  <select
                    className='form-control'
                    id='businessSpecialization'
                    name='businessSpecialization'
                    required=''
                  >
                    <option value=''>Please select an option</option>
                    <option value='local'>Local</option>
                    <option value='transit'>Transit</option>
                    <option value='both'>Both</option>
                  </select>
                </div>
                <div className='form-group'>
                  <label htmlFor='estimateVolume'>
                    Estimate volume per month
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='estimateVolume'
                    name='estimateVolume'
                    required=''
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='relevantDocuments'>
                    Upload of relevant documents
                  </label>
                  <input
                    type='file'
                    className='form-control-file'
                    id='relevantDocuments'
                    name='relevantDocuments'
                    required=''
                  />
                </div>
                <div className='form-group mt-3'>
                  <label htmlFor='security-q1'>
                    What was the name of your first pet?
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='security-q1'
                    name='security-q1'
                    placeholder='Enter your answer'
                  />
                </div>
                <div className='form-group mt-3'>
                  <label htmlFor='security-q2'>
                    What is your mothers maiden name?
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='security-q2'
                    name='security-q2'
                    placeholder='Enter your answer'
                  />
                </div>
                <div className='form-group mt-3 mb-3'>
                  <label htmlFor='security-q3'>
                    What was the name of the street you grew up on?
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='security-q3'
                    name='security-q3'
                    placeholder='Enter your answer'
                  />
                </div>

                <button type='submit' className='btn btn-primary'>
                  Submit
                </button>
              </form>

              {/* end form */}
            </div>
            {/* end cardbody */}
          </div>
          {/* end card */}
        </div>
        {/* end col */}
      </div>
    </TransporterAuth>
  )
}

export default register
