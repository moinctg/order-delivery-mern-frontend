const Contact = () => {
    return (
      <div>
         
         <div className="slider-area ">
      <div className="single-slider slider-height2 d-flex align-items-center">
          <div className="container">
              <div className="row">
                  <div className="col-xl-12">
                      <div className="hero-cap text-center">
                          <h2>Contact </h2>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
     
     

             <div className="row">
                 <div className="col-12">
                     <h2 className="contact-title">Get in Touch</h2>
                 </div>
                 <div className="col-lg-8">
                     <form className="form-contact contact_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
                         <div className="row">
                             <div className="col-12">
                                 <div className="form-group">
                                     <textarea className="form-control w-100" name="message" id="message" cols="30" rows="9" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Message'" placeholder=" Enter Message"></textarea>
                                 </div>
                             </div>
                             <div className="col-sm-6">
                                 <div className="form-group">
                                     <input className="form-control valid" name="name" id="name" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your name'" placeholder="Enter your name"/>
                                 </div>
                             </div>
                             <div className="col-sm-6">
                                 <div className="form-group">
                                     <input className="form-control valid" name="email" id="email" type="email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'" placeholder="Email"/>
                                 </div>
                             </div>
                             <div className="col-12">
                                 <div className="form-group">
                                     <input className="form-control" name="subject" id="subject" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Subject'" placeholder="Enter Subject"/>
                                 </div>
                             </div>
                         </div>
                         <div className="form-group mt-3">
                             <button type="submit" className="button button-contactForm boxed-btn">Send</button>
                         </div>
                     </form>
                 </div>
                 <div className="col-lg-3 offset-lg-1">
                     <div className="media contact-info">
                         <span className="contact-info__icon"><i className="ti-home"></i></span>
                         <div className="media-body">
                             <h3>95,Agrabd, Chattragram.</h3>
                             <p>Bangladesh, Est 2021</p>
                         </div>
                     </div>
                     <div className="media contact-info">
                         <span className="contact-info__icon"><i className="ti-tablet"></i></span>
                         <div className="media-body">
                             <h3>+880-1824-682965</h3>
                             <p>sat to Fri 9am to 6pm</p>
                         </div>
                     </div>
                     <div className="media contact-info">
                         <span className="contact-info__icon"><i className="ti-email"></i></span>
                         <div className="media-body">
                             <h3>Admin@asianwathstore.com</h3>
                             <p>Send us your query anytime!</p>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
    
    )
}
export default Contact
