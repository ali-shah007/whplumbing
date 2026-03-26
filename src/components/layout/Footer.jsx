const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        
        <div>
          <h3 className="font-bold mb-2">WH Plumbing</h3>
          <p>Professional heating services you can trust.</p>
        </div>

        <div>
          <h3 className="font-bold mb-2">Services</h3>
          <ul className="space-y-1">
            <li>Boiler Installation</li>
            <li>Repairs</li>
            <li>Servicing</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2">Contact</h3>
          <p>📞 +971 55 77 11 247</p>
          <p>✉ whplumbing@gmail.com</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;