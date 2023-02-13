import TransporterAuth from '@/layout/auth/transporter/TransporterAuth'

const register = () => {
  return (
    <TransporterAuth>
      <div className='row'>
        <div className='col-sm-12'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Jquery Steps Wizard Vertical</h5>
              <p className='card-title-desc'>
                A powerful jQuery wizard plugin that supports accessibility and
                HTML5
              </p>
              <form id='form-vertical' className='vertical-wizard'>
                <h3>Create Account</h3>
                <fieldset className='p-0'>
                  <div className='mb-3 '>
                    <label
                      htmlFor='example-email-input1'
                      className='form-label'
                    >
                      Email
                    </label>
                    <div className=''>
                      <input
                        className='form-control'
                        type='email'
                        defaultValue=''
                        id='example-email-input1'
                        placeholder='@Example.com'
                      />
                    </div>
                  </div>
                  <div className='mb-3 '>
                    <label
                      htmlFor='example-password-input1'
                      className='form-label'
                    >
                      Password
                    </label>
                    <div className=''>
                      <input
                        className='form-control'
                        type='password'
                        id='example-password-input1'
                        placeholder='Password'
                      />
                    </div>
                  </div>
                  <div className='mb-3 '>
                    <label
                      htmlFor='example-password-input01'
                      className='form-label'
                    >
                      Confirm Password
                    </label>
                    <div className=''>
                      <input
                        className='form-control'
                        type='password'
                        id='example-password-input01'
                        placeholder='Confirm Password'
                      />
                    </div>
                  </div>
                  <div className='form-check my-3'>
                    <input
                      type='checkbox'
                      className='form-check-input'
                      id='customCheck1'
                    />
                    <label className='form-check-label' htmlFor='customCheck1'>
                      I accept the terms and conditions
                    </label>
                  </div>
                </fieldset>
                <h3>Basic Form</h3>
                <fieldset>
                  <div className='mb-3 row'>
                    <div className='col-sm-12 col-lg-6'>
                      <input
                        className='form-control'
                        type='text'
                        id='name'
                        placeholder='Name'
                      />
                    </div>
                    {/* end col */}
                    <div className='col-sm-12 col-lg-6'>
                      <input
                        className='form-control'
                        type='email'
                        id='example-email-input3'
                        placeholder='Email'
                      />
                    </div>
                    {/* end col */}
                  </div>
                  {/* end row */}
                  <div className='mb-3 row'>
                    <div className='col-sm-12'>
                      <input
                        className='form-control'
                        type='text'
                        id='subject2'
                        placeholder='Subject'
                      />
                    </div>
                    {/* end col */}
                  </div>
                  {/* end row */}
                  <div className='mb-3'>
                    <textarea
                      className='form-control'
                      id='exampleFormControlTextarea1'
                      rows={4}
                      placeholder='Your message'
                      defaultValue={''}
                    />
                  </div>
                  <div className='form-check my-2'>
                    <input
                      type='radio'
                      id='customRadio1'
                      name='customRadio'
                      className='form-check-input'
                      defaultChecked=''
                    />
                    <label className='form-check-label' htmlFor='customRadio1'>
                      Male
                    </label>
                  </div>
                  <div className='form-check my-2'>
                    <input
                      type='radio'
                      id='customRadio2'
                      name='customRadio'
                      className='form-check-input'
                    />
                    <label className='form-check-label' htmlFor='customRadio2'>
                      Female
                    </label>
                  </div>
                </fieldset>
                <h3>Confirm Detail</h3>
                <fieldset>
                  <div className='form-check my-3'>
                    <input
                      type='checkbox'
                      className='form-check-input'
                      id='customCheck2'
                    />
                    <label className='form-check-label' htmlFor='customCheck2'>
                      I agree with the Terms and Conditions.
                    </label>
                  </div>
                </fieldset>
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
