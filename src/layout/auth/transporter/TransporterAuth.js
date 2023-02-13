import Head from 'next/head'

const TransporterAuth = ({ children }) => {
  return (
    <>
      <Head>
        <title>Kago | Transporter Auth</title>
      </Head>
      <div id='layout-wrapper'>
        <div className='page-content'>
          <div className='container-fluid'>{children}</div>
        </div>
      </div>
    </>
  )
}

export default TransporterAuth
