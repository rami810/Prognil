import { FaWhatsapp, FaLinkedin, FaFacebook } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
function Footer() {
  return (
    <div className="h-[414px] pt-5 pb-10 gradient-footer text-white flex flex-col justify-between">
      <div className="flex items-end justify-between mx-10 pb-15 border-b-2 border-white">
        <div className="flex flex-col gap-11">
          <div>
            <Image
              sizes="100vh"
              width={0}
              height={0}
              className="w-[85] h-[106] "
              src="/images/logo/Asset 5@4x 1.svg"
              alt="fotter-logo"
            />
          </div>
          <p className="font-poppins">info@prognil.com</p>
        </div>
        <div className="flex gap-10">
          <Link href="https://wa.me/message/27RIUK4VMNQRK1">
            <FaWhatsapp size={32} />
          </Link>
          <Link href="https://www.linkedin.com/company/prognil/">
            <FaLinkedin size={32} />
          </Link>

          <Link href="https://www.facebook.com/Prognil">
            <FaFacebook size={32} />
          </Link>
        </div>
      </div>

      <div className="font-roboto flex justify-between mx-10">
        <h1>PROGNIL © 2024. All rights reserved.</h1>
        <ul className="flex gap-10">

          <Link href="/FAQ">
          FAQ
          </Link>
    
          <Link href="/privacy">Privacy Policy</Link>

          <Link href="/terms">Terms Of Us</Link>

          <Link href="/sales">Sales and Refunds</Link>

          <Link href="/legal">Legal</Link>
        </ul>
      </div>
    </div>
  );
}
export default Footer;
