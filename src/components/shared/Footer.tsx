import { Instagram, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="flex flex-row bg-[#0A0A0A] border-t border-[rgba(212,175,55,0.2)] py-8 ">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 ">
          {/* copyright */}
          <div className=" flex text-[#A0A0A0] text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Barbearia Navalha. Todos os
            direitos reservados.
          </div>
          {/* social links  */}
          
            <ul className="flex flex-row items-center gap-6">
              <li>
                <a
                  href="https://www.instagram.com/barbearianavalha/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex text-[#A0A0A0] hover:text-[#D4Af37] transition-colors duration-300"
                >
                  <Instagram size={20} />
                  <span className="text-sm ml-2">Instagram</span>
                </a>
              </li>

              <li>
                <a
                  href="https://wa.me/5585999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex text-[#A0A0A0] hover:text-[#D4Af37] transition-colors duration-300"
                >
                  <Phone size={20} />
                  <span className="text-sm ml-2">WhatsApp</span>
                </a>
              </li>

              <li>
                <a
                  href="https://maps.google.com/?q=Barbearia+Navalha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex text-[#A0A0A0] hover:text-[#D4Af37] transition-colors duration-300"
                >
                  <MapPin size={20} />
                  <span className="text-sm ml-2">Localização</span>
                </a>
              </li>


            </ul>
          </div>
        </div>
    
    </footer>
  );
};

export default Footer;
