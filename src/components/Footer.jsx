import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <div className='container-fluid mt-5 mb-5'>
        <div className='row'>
          <div className='col-md-4 ms-5'>
            <h3 className='text-danger'><i class="fa-solid fa-video me-3"></i>Media Player</h3>
            <p className='mt-4' style={{ fontSize: '17px', textAlign: 'justify' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores saepe sequi incidunt vero, sapiente, sunt, ad totam deleniti atque voluptas suscipit. Numquam velit dolor modi quam totam? Quos, sapiente laudantiu Commodi.</p>
          </div>

          <div className='col-md-1 ms-5 me-5'>
            <h3 className='mb-4'>Links</h3>
            <Link to={'/'}><p className='mb-2'>Landing Page</p></Link>
            <Link to={'/Home'}><p className='mb-2'>Home Page</p></Link>
            <Link to={'/watchhistory'}><p className='mb-2'>Watch History</p></Link>
          </div>

          <div className='col-md-1 me-5 ms-3'>
            <h3 className='mb-4'>Guides</h3>
            <p className='mb-2'>React</p>
            <p className='mb-2'>React Bootstrap</p>
            <p className='mb-2'>Bootswatch</p>
          </div>

          <div className='col-md-4 ms-5 flex-column'>
            <h3>Contact Us</h3>
            <div className='d-flex'>
              <input type="text" placeholder='Enter your email here....' className='form-control' style={{ width: '340px' }} />
              <button className='btn btn-danger ms-3'>Subscribe</button>
            </div>
            <div className='d-flex justify-content-between mt-3 me-5' style={{ height: '50px' }}>
              <i style={{ textDecoration: 'none', color: 'white' }} class="fa-brands fa-twitter"></i>
              <i style={{ textDecoration: 'none', color: 'white' }} class="fa-brands fa-instagram"></i>
              <i style={{ textDecoration: 'none', color: 'white' }} class="fa-brands fa-whatsapp"></i>
              <i style={{ textDecoration: 'none', color: 'white' }} class="fa-brands fa-facebook"></i>
              <i style={{ textDecoration: 'none', color: 'white' }} class="fa-brands fa-linkedin"></i>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer