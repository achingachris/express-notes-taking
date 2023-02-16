import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='row'>
      <div className='col p-0 vh-100 d-flex justify-content-center'>
        <div className='accountbg d-flex align-items-center'>
          <div className='account-title text-center text-white'>
            <h4 className='mt-3 text-white'>
              Welcome To <span className='text-warning'>KAGO</span>
            </h4>
            {/* add logo */}
            <div className='d-flex justify-content-center align-items-center'>
              <Image src='/logo.png' alt='' width='100' height='50' />
            </div>
            <h1 className='text-white'> Get Started</h1>
            <div className='mt-3 mb-4 font-size-14'>
              <div className='button-items'>
                <Link href='/client' legacyBehavior>
                  <button
                    type='button'
                    className='btn btn-outline-primary btn-rounded'
                  >
                    Client
                  </button>
                </Link>
                <Link href='/admin' legacyBehavior>
                  <button
                    type='button'
                    className='btn btn-outline-primary btn-rounded'
                  >
                    Admin
                  </button>
                </Link>
                {/* <button
                  type='button'
                  className='btn btn-outline-primary btn-rounded'
                >
                  Transporter
                </button> */}
              </div>
            </div>
            <div className='border w-25 mx-auto border-warning' />
          </div>
        </div>
      </div>
    </div>
  )
}
