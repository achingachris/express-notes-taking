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
              <Link href='/admin' legacyBehavior>
                <a className=' waves-effect'>
                  <span>Dashboard</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href='/admin/cargo' legacyBehavior>
                <a className=' waves-effect'>
                  <span>Cargo</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href='/admin/cargo' legacyBehavior>
                <a className=' waves-effect'>
                  <span>Taskboard</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href='/auth/transporter/register' legacyBehavior>
                <a className=' waves-effect'>
                  <span>Transporter Registration</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href='/auth/client/register' legacyBehavior>
                <a className=' waves-effect'>
                  <span>Client Registration</span>
                </a>
              </Link>
            </li>

            <li className='menu-title'>Finances</li>

            <li>
              <Link href='/admin/invoice' legacyBehavior>
                <a className=' waves-effect'>
                  <span>Invoice</span>
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
