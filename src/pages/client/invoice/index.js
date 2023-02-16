/* eslint-disable @next/next/no-img-element */
import Client from '@/layout/client/Client'
import Image from 'next/image'

const index = () => {
  return (
    <Client>
      <>
        <div className='row'>
          <div className='col-12'>
            <div className='page-title-box d-flex align-items-center justify-content-between'>
              <h4 className='mb-0 font-size-18'>Invoice</h4>
              <div className='page-title-right'>
                <ol className='breadcrumb m-0'>
                  <li className='breadcrumb-item'>
                    <a href='javascript: void(0);'>Kago</a>
                  </li>
                  <li className='breadcrumb-item'>
                    <a href='javascript: void(0);'>Pages</a>
                  </li>
                  <li className='breadcrumb-item active'>Invoice</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        {/* end page title */}
        <div className='row'>
          <div className='col-md-12 col-lg-10 mx-auto'>
            <div className='card'>
              <div className='card-body'>
                <div className='row'>
                  <div className='col-lg-6'>
                    <Image
                      src='/logo.png'
                      alt=''
                      className='img-fluid'
                      width={75}
                      height={80}
                    />
                  </div>
                  {/* end col */}
                  <div className='col-lg-6 align-self-center'>
                    <div className=''>
                      <div className='float-end'>
                        <h6 className='mb-0'>
                          <b>Order Date :</b> 11/09/2018
                        </h6>
                        <h6>
                          <b>Order ID :</b> # 23654789
                        </h6>
                      </div>
                    </div>
                  </div>
                  {/* end col */}
                </div>
                {/* end row */}
                <div className='row'>
                  <div className='col-md-12'>
                    <div className='float-start mt-5'>
                      <address className='font-size-13'>
                        <strong className='font-size-14'>Billed To :</strong>
                        <br />
                        Joe Smith
                        <br />
                        795 Folsom Ave
                        <abbr title='Phone'>P:</abbr> (123) 456-7890
                      </address>
                    </div>
                    <div className='float-end text-end mt-5'>
                      <address className='font-13'>
                        <strong className='font-size-14'>Shipped To:</strong>
                        <br />
                        Joe Smith
                        <br />
                        795 Folsom Ave
                        <br />
                        San Francisco, CA 94107
                        <br />
                        <abbr title='Phone'>P:</abbr> (123) 456-7890
                      </address>
                    </div>
                  </div>
                  {/* end col */}
                </div>
                {/* end row*/}
                <div className='row'>
                  <div className='col-lg-12'>
                    <div className='table-responsive'>
                      <table className='table table-bordered mb-0'>
                        <thead>
                          <tr>
                            <th>Quantity</th>
                            <th>Item</th>
                            <th>Description</th>
                            <th>Unit Cost</th>
                            <th>Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>2</th>
                            <td>LCD</td>
                            <td>
                              There are many variations of passages of Lorem
                              Ipsum available.
                            </td>
                            <td>$555.00</td>
                            <td>$1110.00</td>
                          </tr>
                          <tr>
                            <th>1</th>
                            <td>Mobile</td>
                            <td>
                              It is a long established fact that a reader will
                              be distracted.
                            </td>
                            <td>$100.00</td>
                            <td>$100.00</td>
                          </tr>
                          <tr>
                            <th>3</th>
                            <td>Chair</td>
                            <td>
                              Contrary to popular belief, Lorem Ipsum is not
                              simply random text.
                            </td>
                            <td>$30.00</td>
                            <td>$90.00</td>
                          </tr>
                          <tr>
                            <th>1</th>
                            <td>Camera</td>
                            <td>
                              Aldus PageMaker including versions of Lorem Ipsum.
                            </td>
                            <td>$999.00</td>
                            <td>$999.00</td>
                          </tr>
                          <tr>
                            <th>3</th>
                            <td>Headphone</td>
                            <td>
                              Various versions have evolved over the years,
                              sometimes by accident.
                            </td>
                            <td>$20.00</td>
                            <td>$60.00</td>
                          </tr>
                          <tr>
                            <td colSpan={3} className='border-0' />
                            <td className='border-0 font-size-14'>
                              <b>Sub Total</b>
                            </td>
                            <td className='border-0 font-size-14'>
                              <b>$2359.00</b>
                            </td>
                          </tr>
                          <tr>
                            <th colSpan={3} className='border-0' />
                            <td className='border-0 font-size-14'>
                              <b>Tax Rate</b>
                            </td>
                            <td className='border-0 font-size-14'>
                              <b>$0.00%</b>
                            </td>
                          </tr>
                          <tr className='bg-dark text-light'>
                            <th colSpan={3} className='border-0' />
                            <td className='border-0 font-size-14'>
                              <b>Total</b>
                            </td>
                            <td className='border-0 font-size-14'>
                              <b>$2359.00</b>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      {/* end table */}
                    </div>
                  </div>
                  {/* end col */}
                </div>
                {/* end row */}
                <div className='row justify-content-center'>
                  <div className='col-lg-6'>
                    <h5 className='mt-4'>Terms And Condition :</h5>
                    <ul className='ps-3'>
                      <li>
                        <small>
                          All accounts are to be paid within 7 days from receipt
                          of invoice.
                        </small>
                      </li>
                      <li>
                        <small>
                          To be paid by cheque or credit card or direct payment
                          online.
                        </small>
                      </li>
                      <li>
                        <small>
                          If account is not paid within 7 days the credits
                          details supplied as confirmation
                          <br />
                          of work undertaken will be charged the agreed quoted
                          fee noted above.
                        </small>
                      </li>
                    </ul>
                  </div>
                  {/* end col */}
                  <div className='col-lg-6 align-self-end'>
                    <div className='w-25 float-end'>
                      <img
                        src='assets/images/signature.png'
                        alt=''
                        className='img-fluid'
                      />
                      <p className='border-top'>Signature</p>
                    </div>
                  </div>
                  {/* end col */}
                </div>
                {/* end row */}
                <hr />
                <div className='row d-flex justify-content-center'>
                  <div className='col-lg-12 col-xl-4 ms-auto align-self-center'>
                    <div className='text-center text-muted'>
                      <small>
                        Thank you very much for doing business with us. Thanks !
                      </small>
                    </div>
                  </div>
                  {/* end col */}
                  <div className='col-lg-12 col-xl-4'>
                    <div className='float-end d-print-none'>
                      <a
                        href='javascript:window.print()'
                        className='btn btn-info'
                      >
                        <i className='fa fa-print' />
                      </a>
                    </div>
                  </div>
                  {/* end col */}
                </div>
                {/* end row */}
              </div>
            </div>
          </div>
        </div>
      </>
    </Client>
  )
}

export default index
