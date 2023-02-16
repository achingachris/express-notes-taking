/* eslint-disable @next/next/no-css-tags */
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        {/* App favicon */}
        {/* <link rel='shortcut icon' href='assets/images/favicon.ico' /> */}
        {/*Chartist Chart CSS */}
        <link
          href='/assets/libs/chartist/chartist.min.css'
          rel='stylesheet'
          type='text/css'
        />
        {/* plugin css */}
        <link
          href='/assets/libs/admin-resources/jquery.vectormap/jquery-jvectormap-1.2.2.css'
          rel='stylesheet'
          type='text/css'
        />
        {/* DataTables */}
        <link
          href='/assets/libs/datatables.net-bs4/css/dataTables.bootstrap4.min.css'
          rel='stylesheet'
          type='text/css'
        />
        {/* Bootstrap Css */}
        <link
          href='/assets/css/bootstrap.min.css'
          id='bootstrap-style'
          rel='stylesheet'
          type='text/css'
        />
        {/* Icons Css */}
        <link
          href='/assets/css/icons.min.css'
          rel='stylesheet'
          type='text/css'
        />
        {/* App Css*/}
        <link
          href='/assets/css/app.css'
          id='app-style'
          rel='stylesheet'
          type='text/css'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        {/* <!-- JAVASCRIPT --> */}
        <script async src='/assets/libs/jquery/jquery.min.js'></script>
        <script
          async
          src='/assets/libs/bootstrap/js/bootstrap.bundle.min.js'
        ></script>
        <script async src='/assets/libs/metismenu/metisMenu.min.js'></script>
        <script async src='/assets/libs/simplebar/simplebar.min.js'></script>
        <script async src='/assets/libs/node-waves/waves.min.js'></script>

        {/* <!-- Plugin Js--> */}
        <script async src='/assets/libs/chartist/chartist.min.js'></script>
        <script
          async
          type='text/javascript'
          src='https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.3/Chart.min.js'
        ></script>
        <script
          async
          src='/assets/libs/chartist-plugin-tooltips/chartist-plugin-tooltip.min.js'
        ></script>
        <script async src='/assets/libs/morris.js/morris.min.js'></script>
        <script async src='/assets/libs/raphael/raphael.min.js'></script>
        {/* <!-- Peity chart--> */}
        <script async src='/assets/libs/peity/jquery.peity.min.js'></script>

        {/* <!-- Plugins js--> */}
        <script
          async
          src='/assets/libs/admin-resources/jquery.vectormap/jquery-jvectormap-1.2.2.min.js'
        ></script>
        <script
          async
          src='/assets/libs/admin-resources/jquery.vectormap/maps/jquery-jvectormap-world-mill-en.js'
        ></script>

        {/* <!-- Required datatable js --> */}
        <script
          async
          src='/assets/libs/datatables.net/js/jquery.dataTables.min.js'
        ></script>
        <script
          async
          src='/assets/libs/datatables.net-bs4/js/dataTables.bootstrap4.min.js'
        ></script>

        <script async src='/assets/js/pages/dashboard2.init.js'></script>

        <script async src='/assets/js/app.js'></script>
      </body>
    </Html>
  )
}
