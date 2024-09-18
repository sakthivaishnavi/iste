import copyrightSign from "../assets/icons/copyright-sign.svg";
import facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";
import instagram from "../assets/icons/instagram.svg";

const Footer = () => {
  return (
    <footer className="px-2 w-full sm:px-8 sm:py-6 py-2">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-5">
            <div className="flex justify-center items-center w-12 h-12 rounded-full bg-white ">
              <img src={facebook} width={24} height={24} />
            </div>
            <div className="flex justify-center items-center w-12 h-12 rounded-full bg-white ">
              <img src={twitter} width={24} height={24} />
            </div>
            <div className="flex justify-center items-center w-12 h-12 rounded-full bg-white ">
              <img src={instagram} width={24} height={24} />
            </div>
          </div>
        </div>
        </div>
      

        <div className='flex justify-between text-white-400 mt-12 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
          <img
            src={copyrightSign}
            alt='copyright sign'
            width={20}
            height={20}
            className='rounded-full m-0'
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
      </div>

      </footer>

  )
}

export default Footer
