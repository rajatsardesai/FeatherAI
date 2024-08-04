import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="flex max-md:flex-col max-md:gap-5 justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:mx-16 mx-6 pt-10 pb-32">
        <p>© 2024 AirderEase. All rights reserved.</p>
        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-100">FAQs</Link>
          <Link href="/" className="text-gray-100">Privacy Policy</Link>
          <Link href="/" className="text-gray-100">Terms of use</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer;