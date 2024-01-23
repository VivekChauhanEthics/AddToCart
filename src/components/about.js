import React from 'react';
import Header from './Header';
import './css/about.css';
import Footer from "./footer"

function About () {
  const sectionStyle = {
    marginBottom: '20px',
  };

  const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    width:"500px",
    height:"400px"
  };

  const aboutImage1 = "https://st2.depositphotos.com/3591429/6006/i/950/depositphotos_60063963-stock-photo-people-discussing-about-us.jpg"
  const aboutImage2 = "https://scibiogen.com/wp-content/uploads/2016/02/QC-1170x659.jpg"
  const aboutImage3 = "https://st.depositphotos.com/1743476/1276/i/450/depositphotos_12765264-stock-photo-smiling-business-man.jpg"
  const aboutImage4 = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww"
  const aboutImage5 = "data:image/jpeg;base64,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"
  const aboutImage6 = "https://t3.ftcdn.net/jpg/03/60/19/70/360_F_360197061_gi83nQH8Fs2GtIAXDWT3HmswfIARlvxI.jpg"




  return (
    <>
      <Header />
      <div className='container-fluid'>
        <div className="container">
          <section className='py-4' style={sectionStyle}>
            <h2 className='text-center mb-3'>Our Story</h2>
            <div className='d-lg-flex' style={{overflow:"hidden"}}>
              <img className='AboutImg' src={aboutImage1} alt="Our Story" style={imageStyle} />
              <p className='px-5 pt-2'>
                Welcome to [Your Company Name], your premier destination for [brief description of your e-commerce niche]. At [Your Company Name], we specialize in [specific products or services], offering a curated selection that caters to [target audience or customer needs].

                Our passion lies in [core values or mission statement], and we are dedicated to creating a seamless and enjoyable shopping experience for you. With a focus on [quality/customer satisfaction/innovation], we strive to exceed your expectations at every turn.

                Why choose [Your Company Name]?
                - **Exceptional Quality:** Our products are crafted with precision and attention to detail, ensuring the highest standards of quality.
                - **Customer-Centric Approach:** Your satisfaction is our priority. Our customer support team is here to assist you every step of the way.
                - **Innovation in Every Product:** We stay ahead of the curve by incorporating the latest trends and technologies into our offerings.

                Whether you're a [new customer/existing customer], we extend a warm welcome and invite you to explore our diverse range of [products or services]. Discover [exclusive features or benefits] that set us apart from the rest.

                Thank you for choosing [Your Company Name]. We look forward to serving you and making your shopping experience truly memorable.

                Happy Shopping!
              </p>
            </div>
          </section>

          <section className='py-3' style={sectionStyle}>
            <h2 className='text-center mb-3'>What Sets Us Apart</h2>
            <div className='d-lg-flex' style={{overflow:"hidden"}}>
              <img src={aboutImage2} alt="Quality Products" className='aboutImage2 AboutImg' style={{}} />
              <ul className='ms-4 pt-3'>
                <li className='p-2'><strong>Quality Products:</strong> We take pride in offering only the finest [product category] crafted with [materials, processes, etc.] to ensure durability and satisfaction.</li>
                <li className='p-2'><strong>Exceptional Service:</strong> Your experience matters to us. Our customer support team is here to assist you at every step, ensuring a seamless shopping experience.</li>
                <li className='p-2'><strong>Sustainable Practices:</strong> [If applicable] We are committed to sustainability. Our products are [eco-friendly, ethically sourced, etc.] as we strive to contribute to a better world.</li>
              </ul>
            </div>
          </section>

          <section className='py-3' style={sectionStyle}>
            <h2 className='text-center mb-3'>Our Team</h2>
            <div className='d-lg-flex gap-lg-4  justify-content-center'>
            <div className='text-center' style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', paddingBottom: '20px', overflow:"hidden" }}>
              <img className='AboutImg' src={aboutImage3} alt="Our Team" style={{ width: "350px", height: "350px" }} />
              <p className='mt-3 mb-0'>CEO</p>
            </div>
            <div className='text-center' style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', paddingBottom: '20px', overflow:"hidden" }}>
              <img className='AboutImg' src={aboutImage4} alt="Our Team" style={{ width: "350px", height: "350px" }} />
              <p className='mt-3 mb-0'>Team Lead</p>
            </div>
            <div className='text-center' style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', paddingBottom: '20px', overflow:"hidden" }}>
              <img className='AboutImg' src={aboutImage5} alt="Our Team" style={{ width: "350px", height: "350px" }} />
              <p className='mt-3 mb-0'>Project Manager</p>
            </div>
            </div>
          </section>
          <section className='py-3' style={sectionStyle}>
            <h2 className='text-center mb-3'>Connect With Us</h2>
            <div className='d-lg-flex' style={{overflow:"hidden"}}>
            <img className='AboutImg' src={aboutImage6} alt="Connect With Us" style={imageStyle} />
            <p className='px-5 pt-3'>
              We love hearing from our customers! Your feedback is the heartbeat of [Your Company Name], and it plays a crucial role in shaping our journey. Connect with us through various channels:
               <br/> <br/>
              - **Social Media Platforms:** Join our vibrant community on [social media platforms], where you can stay updated on the latest releases, exclusive offers, and behind-the-scenes glimpses. Follow us on [Instagram/Facebook/Twitter] for a daily dose of [your niche] inspiration.
              <br/> <br/>
              - **Email Us:** Have a specific question or suggestion? Drop us an email at [your email address], and our dedicated support team will get back to you promptly. We value your thoughts and are here to assist with anything you may need.
              <br/> <br/>
              Feel free to share your thoughts, stories, or simply say hello – we're here for you!
              <br/> <br/>
              Best Regards, <br/>
              The [Your Company Name] Team
            </p>
            </div>
          </section>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default About;
