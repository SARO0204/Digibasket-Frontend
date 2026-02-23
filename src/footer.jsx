function footer() {
  return (
    <div className="end-box">
      <h4>Look there for a location !!</h4>

      <img src="/src/assets/spiderman-image.webp"></img>

      <h3>Location: 35/1, Basha Street, Choolaimedu, Chennai-600094</h3>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d418.75642691626405!2d80.22708897090617!3d13.065154048188699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52668939866831%3A0x9c907eed238cbe7c!2s33%2F35%2F1%2C%20Basha%20St%2C%20Thiruvenkatapuram%2C%20Choolaimedu%2C%20Chennai%2C%20Tamil%20Nadu%20600094!5e0!3m2!1sen!2sin!4v1768066394892!5m2!1sen!2sin"
        width="480"
        height="300"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="end-logo">
        <img src="/src/assets/digibasket-logo.webp" />

        <h2>DIGIBASKET</h2>
        <p>© 2026 DigiBasket Pvt Ltd</p>
        <div className="icon">
          <i className="fa-solid fa-envelope fa-2xl"></i>
          <i className="fa-brands fa-square-instagram fa-2xl"></i>
          <i className="fa-brands fa-square-whatsapp fa-2xl"></i>
          <i className="fa-brands fa-linkedin fa-2xl"></i>
        </div>
      </div>
    </div>
  );
}

export default footer;
