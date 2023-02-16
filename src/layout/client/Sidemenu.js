import Link from 'next/link'

const Sidemenu = () => {
  return (
    <div className='vertical-menu'>
      <div data-simplebar='' className='h-100'>
        {/*- Sidemenu */}
        <div id='sidebar-menu'>
          {/* Left Menu Start */}
          <ul className='metismenu list-unstyled' id='side-menu'>
            <li className='menu-title'>Main</li>
            <li>
              <Link href='/client' legacyBehavior>
                <a className=' waves-effect'>
                  <span>Dashboard</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href='/client/cargo' legacyBehavior>
                <a className=' waves-effect'>
                  <span>Cargo</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href='/client/cargo/add' legacyBehavior>
                <a className=' waves-effect'>
                  <span>Add Cargo</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href='/client/cargo/track' legacyBehavior>
                <a className=' waves-effect'>
                  <span>Track Cargo</span>
                </a>
              </Link>
            </li>

            <li className='menu-title'>Finance</li>
            <li>
              <Link href='/client/invoice' legacyBehavior>
                <a className=' waves-effect'>
                  <span>Invoices</span>
                </a>
              </Link>
            </li>

          </ul>
        </div>
        {/* Sidebar */}
      </div>
    </div>
  )
}

export default Sidemenu
