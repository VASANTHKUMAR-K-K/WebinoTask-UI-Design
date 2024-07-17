

const Footer = () => {

  return (
    <><div className="py-3 foot">
      <div className='text-center m-5 hiddendiv'>
        <h1 >Join the Waitlist</h1>
        <div className=' d-flex ml-3 p-2' id='input'>
          
          <input type='text' className="form-control rounded-pill w-25 " placeholder='name' />
          <input type='text' className="form-control g-row-9  rounded-pill w-25" placeholder='Mobile Number' />
          <input type='text' className="form-control rounded-pill w-25" placeholder='City' />
          
        </div>
        <button className='btn buttons mt-4 shadow '>Join the Waitlist</button>
      </div>
      
    </div>
    <div className="text-center footer">
        <p className='mb-0'>©Foodie, 2024</p>
      </div></>
  );
};

export default Footer;
