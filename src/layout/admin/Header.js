import Image from 'next/image'

const Header = () => {
  return (
    <header id='page-topbar'>
      <div className='navbar-header'>
        <div className='d-flex'>
          {/* LOGO */}
          <div className='navbar-brand-box'>
            <a href='#' className='logo logo-dark'>
              <span className='logo-sm'>
                <Image src='/logo.png' alt='' height={22} width={50} />
              </span>
              <span className='logo-lg'>
                <Image src='/logo.png' alt='' height={50} width={100} />
              </span>
            </a>
            <a href='#' className='logo logo-light'>
              <span className='logo-sm'>
                <Image src='/logo.png' alt='' height={22} width={250} />
              </span>
              <span className='logo-lg'>
                <Image src='/logo.png' alt='' height={17} width={50} />
              </span>
            </a>
          </div>
          <button
            type='button'
            className='btn btn-sm px-3 font-size-24 header-item waves-effect'
            id='vertical-menu-btn'
          >
            <i className='mdi mdi-menu' />
          </button>
          <div className='d-none d-lg-inline-block'>
            <button
              type='button'
              className='btn header-item noti-icon waves-effect'
              data-bs-target='#search-wrap'
            >
              <i className='mdi mdi-airplane me-2 font-size-16' />
              Landing
            </button>
          </div>
        </div>
        {/* Search input */}
        <div className='search-wrap' id='search-wrap'>
          <div className='search-bar'>
            <input className='search-input form-control' placeholder='Search' />
            <a
              href='#'
              className='close-search toggle-search'
              data-target='#search-wrap'
            >
              <i className='mdi mdi-close-circle' />
            </a>
          </div>
        </div>
        <div className='d-flex'>
          <div className='dropdown d-none d-lg-inline-block'>
            <button
              type='button'
              className='btn header-item toggle-search noti-icon waves-effect'
              data-target='#search-wrap'
            >
              <i className='mdi mdi-magnify' />
            </button>
          </div>
          <div className='dropdown d-inline-block d-lg-none ms-2'>
            <button
              type='button'
              className='btn header-item noti-icon waves-effect'
              id='page-header-search-dropdown'
              data-bs-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
              <i className='mdi mdi-magnify' />
            </button>
            <div
              className='dropdown-menu dropdown-menu-lg dropdown-menu-end p-0'
              aria-labelledby='page-header-search-dropdown'
            >
              <form className='p-3'>
                <div className='m-0'>
                  <div className='input-group'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Search ...'
                      aria-label="Recipient's username"
                    />
                    <button className='btn btn-primary' type='submit'>
                      <i className='mdi mdi-magnify' />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Notification */}
          <div className='dropdown d-inline-block'>
            <button
              type='button'
              className='btn header-item noti-icon waves-effect notification-step'
              id='page-header-notifications-dropdown'
              data-bs-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
              <i className='mdi mdi-bell-outline' />
              <span className='badge bg-danger rounded-pill'>2</span>
            </button>
            <div
              className='dropdown-menu dropdown-menu-lg dropdown-menu-end p-0'
              aria-labelledby='page-header-notifications-dropdown'
            >
              <div className='p-3'>
                <h6 className='m-0'>Notifications (258) </h6>
              </div>
              <div data-simplebar='' style={{ maxHeight: 230 }}>
                <a href='' className='text-reset notification-item'>
                  <div className='d-flex align-items-start'>
                    <div className='avatar-xs me-3'>
                      <span className='avatar-title bg-primary rounded-circle font-size-16'>
                        <i className='mdi mdi-cart-outline' />
                      </span>
                    </div>
                    <div className='flex-1'>
                      <h6 className='mb-1 font-size-15'>
                        Your order is placed
                      </h6>
                      <div className='text-muted'>
                        <p className='mb-1 font-size-12'>
                          Dummy text of the printing and typesetting industry.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href='' className='text-reset notification-item'>
                  <div className='d-flex align-items-start'>
                    <div className='avatar-xs me-3'>
                      <span className='avatar-title bg-warning rounded-circle font-size-16'>
                        <i className='mdi mdi-message' />
                      </span>
                    </div>
                    <div className='flex-1'>
                      <h6 className='mb-1 font-size-15'>
                        New Message received
                      </h6>
                      <div className='text-muted'>
                        <p className='mb-1 font-size-12'>
                          You have 87 unread messages
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href='' className='text-reset notification-item'>
                  <div className='d-flex align-items-start'>
                    <div className='avatar-xs me-3'>
                      <span className='avatar-title bg-info rounded-circle font-size-16'>
                        <i className='mdi mdi-help' />
                      </span>
                    </div>
                    <div className='flex-1'>
                      <h6 className='mb-1 font-size-15'>
                        Your order is placed
                      </h6>
                      <div className='text-muted'>
                        <p className='mb-1 font-size-12'>
                          It is a long established fact that a reader will
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href='' className='text-reset notification-item'>
                  <div className='d-flex align-items-start'>
                    <div className='avatar-xs me-3'>
                      <span className='avatar-title bg-primary rounded-circle font-size-16'>
                        <i className='mdi mdi-cart-outline' />
                      </span>
                    </div>
                    <div className='flex-1'>
                      <h6 className='mb-1 font-size-15'>
                        Your order is placed
                      </h6>
                      <div className='text-muted'>
                        <p className='mb-1 font-size-12'>
                          Dummy text of the printing and typesetting industry.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href='' className='text-reset notification-item'>
                  <div className='d-flex align-items-start'>
                    <div className='avatar-xs me-3'>
                      <span className='avatar-title bg-danger rounded-circle font-size-16'>
                        <i className='mdi mdi-cart-outline' />
                      </span>
                    </div>
                    <div className='flex-1'>
                      <h6 className='mb-1 font-size-15'>
                        Your order is placed
                      </h6>
                      <div className='text-muted'>
                        <p className='mb-1 font-size-12'>
                          Dummy text of the printing and typesetting industry.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className='p-2 border-top d-grid'>
                <a
                  className='btn btn-sm btn-link font-size-14 btn-block text-center'
                  href='javascript:void(0)'
                >
                  <i className='mdi mdi-arrow-right-circle me-1' /> View all
                </a>
              </div>
            </div>
          </div>
          {/* full-screen */}
          <div className='dropdown d-none d-lg-inline-block ms-1'>
            <button
              type='button'
              className='btn header-item noti-icon waves-effect'
              data-toggle='fullscreen'
            >
              <i className='mdi mdi-fullscreen' />
            </button>
          </div>
          {/* User */}
          <div className='dropdown d-inline-block'>
            <button
              type='button'
              className='btn header-item waves-effect user-step'
              id='page-header-user-dropdown'
              data-bs-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
              <Image
                className='rounded-circle header-profile-user'
                src='/assets/images/users/user-1.jpg'
                width={50}
                height={50}
                alt='Header Avatar'
              />
              <span className='d-none d-xl-inline-block ms-1'>Kago User</span>
              <i className='mdi mdi-chevron-down d-none d-xl-inline-block' />
            </button>
            <div className='dropdown-menu dropdown-menu-end'>
              {/* item*/}
              <a className='dropdown-item' href='#'>
                <i className='dripicons-user d-inline-block text-muted me-2' />
                Profile
              </a>

              <div className='dropdown-divider' />
              <a className='dropdown-item' href='#'>
                <i className='dripicons-exit d-inline-block text-muted me-2' />
                Logout
              </a>
            </div>
          </div>
          {/* <div className='dropdown d-inline-block'>
            <button
              type='button'
              className='btn header-item noti-icon right-bar-toggle waves-effect'
            >
              <i className='mdi mdi-spin mdi-cog' />
            </button>
          </div> */}
        </div>
      </div>
    </header>
  )
}

export default Header
