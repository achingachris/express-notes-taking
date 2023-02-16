import TransporterAuth from '@/layout/auth/transporter/TransporterAuth'
import Image from 'next/image'

const register = () => {
  return (
    <TransporterAuth>
      <div className='d-flex justify-content-center align-items-center'>
              <Image src='/logo.png' alt='' width='100' height='50' />
            </div>
      <div className='row'>
        <h2 className='text-center'>Transporter Registration</h2>
        <p className='text-center'>
          Enter details to register as a transporter
        </p>
        <div className='col-sm-12'>
          <div className='card'>
            <div className='card-body'>
              <form>
                <div className='form-group mt-3 mb-3'>
                  <label htmlFor='companyName'>Company Name</label>
                  <input
                    type='text'
                    className='form-control'
                    id='companyName'
                    name='companyName'
                  />
                </div>
                <div className='form-group mt-3 mb-3'>
                  <label htmlFor='fullName'>Full Name of the Director</label>
                  <input
                    type='text'
                    className='form-control'
                    id='fullName'
                    name='fullName'
                  />
                </div>
                <div className='form-group mt-3 mb-3'>
                  <label htmlFor='email'>Email Address</label>
                  <input
                    type='email'
                    className='form-control'
                    id='email'
                    name='email'
                  />
                </div>
                <div className='form-group mt-3 mb-3'>
                  <label htmlFor='phoneNumber'>Phone Number</label>
                  <input
                    type='tel'
                    className='form-control'
                    id='phoneNumber'
                    name='phoneNumber'
                  />
                </div>
                <div className='form-group mt-3 mb-3'>
                  <label htmlFor='companyCertificate'>
                    Company Registration Certificate
                  </label>
                  <input
                    type='file'
                    className='form-control-file'
                    id='companyCertificate'
                    name='companyCertificate'
                  />
                </div>
                <div className='form-group mt-3 mb-3'>
                  <label htmlFor='tinNumber'>Company TIN Number</label>
                  <input
                    type='text'
                    className='form-control'
                    id='tinNumber'
                    name='tinNumber'
                  />
                </div>
                <div className='form-group mt-3 mb-3'>
                  <label htmlFor='numTrucks'>Number of Trucks</label>
                  <input
                    type='number'
                    className='form-control'
                    id='numTrucks'
                    name='numTrucks'
                  />
                </div>
                <div className='form-group mt-3 mb-3'>
                  <label htmlFor='businessSpecialization'>
                    Business Specialization (Local, Transit or Both)
                  </label>
                  <select
                    className='form-control'
                    id='businessSpecialization'
                    name='businessSpecialization'
                  >
                    <option value='local'>Local</option>
                    <option value='transit'>Transit</option>
                    <option value='both'>Both</option>
                  </select>
                </div>
                <div className='form-group mt-3 mb-3'>
                  <label htmlFor='preferableRoutes'>Preferable Routes</label>
                  <textarea
                    className='form-control'
                    id='preferableRoutes'
                    name='preferableRoutes'
                    defaultValue={''}
                  />
                </div>
                <div className='form-group mt-3 mb-3'>
                  <label htmlFor='relevantDocs'>
                    Uploading of Relevant Documents
                  </label>
                  <input
                    type='file'
                    className='form-control-file'
                    id='relevantDocs'
                    name='relevantDocs'
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
                <button type='submit' className='btn btn-primary mt-3 mb-3'>
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
