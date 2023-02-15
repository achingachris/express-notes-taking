import Client from '@/layout/client/Client'

const CargoDetails = () => {
  return (
    <Client>
      {/* cargo status */}
      <div className='row'>
        <div className='col'>
          <div className='card card-body text-center'>
            <h4 className='card-title'>Cargo ID: 4523657</h4>
            <p className='card-text text-muted font-size-13'>
              Cargo Status: Waiting Approval
            </p>
            <a href='#' className='btn btn-outline-primary '>
              Contact Admin
            </a>
          </div>
        </div>
      </div>

      {/* cargo details */}
      <div className='row'>
        <div className='col-md-6'>
          <div className='card card-body'>
            <h4 className='card-title'>Cargo Details</h4>
            <p className='card-text text-muted font-size-13'>
              <strong>Sender Name:</strong> John Doe
            </p>
            <p className='card-text text-muted font-size-13'>
              <strong>Sender Phone:</strong> 08012345678
            </p>
            <p className='card-text text-muted font-size-13'>
              <strong>Sender Address:</strong> 123, Main Street, Lagos
            </p>
            <p className='card-text text-muted font-size-13'>
              <strong>Receiver Name:</strong> Jane Doe
            </p>
            <p className='card-text text-muted font-size-13'>
              <strong>Receiver Phone:</strong> 08012345678
            </p>
            <p className='card-text text-muted font-size-13'>
              <strong>Receiver Address:</strong> 123, Main Street, Lagos
            </p>
            <p className='card-text text-muted font-size-13'>
              <strong>Parcel Weight:</strong> 2kg
            </p>
            <p className='card-text text-muted font-size-13'>
              <strong>Parcel Type:</strong> Documents
            </p>
            <p className='card-text text-muted font-size-13'>
              <strong>Parcel Description:</strong> Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quisquam, quod.
            </p>
          </div>
        </div>
        <div className='col-md-6'>
          <div className='card card-body'>
            <h4 className='card-title'>Delivery Details</h4>
            <p className='card-text text-muted font-size-13'>
              <strong>Delivery Type:</strong> Pickup
            </p>
            <p className='card-text text-muted font-size-13'>
              <strong>Delivery Date:</strong> 12/12/2020
            </p>
            <p className='card-text text-muted font-size-13'>
              <strong>Delivery Time:</strong> 12:00pm
            </p>
            <p className='card-text text-muted font-size-13'>
              <strong>Delivery Address:</strong> 123, Main Street, Lagos
            </p>
            <p className='card-text text-muted font-size-13'>
              <strong>Delivery Note:</strong> Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quisquam, quod.
            </p>
          </div>
        </div>
      </div>
    </Client>
  )
}

export default CargoDetails
