import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'
import Sidemenu from './Sidemenu'
import PageLabel from './PageLabel'

const Admin = ({ children }) => {
  return (
    <>
      <Head>
        <title>Client</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content='Admin' />
      </Head>
      <div id='layout-wrapper'>
        <Header />
        <Sidemenu />
        <div className='main-content'>
          <div className='page-content'>
            <div className='container-fluid'>
              <PageLabel />
              {children}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Admin
