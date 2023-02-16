import Client from '@/layout/client/Client'

const track = () => {
  return (
    <Client>
      <div className='row'>
        <div className='col'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Track Vargo</h5>
              {/* <p className='card-title-desc'>Example of google maps.</p> */}
              <div className='container'>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253568.14760678072!2d39.11420064408854!3d-6.769571152781115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4bae169bd6f1%3A0x940f6b26a086a1dd!2sDar%20es%20Salaam%2C%20Tanzania!5e0!3m2!1sen!2ske!4v1676531775860!5m2!1sen!2ske'
                  width={600}
                  height={450}
                  style={{ border: 0 }}
                  allowFullScreen=''
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                />
              </div>
            </div>
          </div>
        </div>{' '}
        {/* end col */}
      </div>
    </Client>
  )
}

export default track
