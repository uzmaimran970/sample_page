import Image from "next/image";
import { FaBox, FaTags, FaTruck } from "react-icons/fa";

export default function AboutUs() {
  return (
    <div className="bg-white py-16 px-6 md:px-20">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        {/* Left Section: Image and Badge */}
        <div className="relative flex-shrink-4">
          <Image
            src="/men.jpg" 
            alt="Delivery Man"
            width={700}
            height={1200}
            className="rounded-lg w-full h-auto object-cover"
          />
       <div className="absolute top-[10%] right-0 sm:right-[10px] md:right-[20px] lg:right-[130px] bg-orange-400 text-white rounded-full w-28 h-28 sm:w-20 sm:h-20 md:w-36 md:h-36 lg:w-40 lg:h-40 flex flex-col justify-center items-center shadow-lg">
       <h2 className="text-[18px] font-bold sm:text-base md:text-xl lg:text-xl">HIGH</h2>
       <h2 className="text-[18px] font-bold sm:text-base md:text-xl lg:text-xl">Quality</h2>
       <p className="text-[10px] mt-1 sm:text-[10px] md:text-sm lg:text-sm">FBA Prep Services</p>
       </div>

     </div>

        {/* Right Section: Content */}
        <div className="flex-1">
        <div className="flex items-center mb-2">
        <div className="flex items-center mb-2">
         <hr className="flex-0 border-t-2 border-orange-400 w-10 " />
         <h3 className="text-orange-400 text-sm font-semibold uppercase px-2">
          About Us
         </h3>
  
</div>

</div>

          <h2 className="text-[16px] md:text-[32px] font-bold mb-4">What We Do</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Empire FBA Prep Services in USA & Canada specializes in providing
            world-class prep solutions for your Amazon FBA business.
          </p>
          
          {/* ................. */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gray-200 text-orange-400 flex justify-center items-center rounded-full">
                <FaBox className="text-2xl" />
              </div>
              <div>
                <h4 className="text-[16px] font-bold">Receive Your Inventory</h4>
                <p className="text-gray-600">
                  Send your products, packaging, and inserts directly to one of
                  our three locations strategically.
                </p>
                <hr className="border-t-2 border-gray-300 mt-[10px]"></hr>

              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gray-200 text-orange-400 flex justify-center items-center rounded-full">
                <FaTags className="text-2xl" />
              </div>
              <div>
                <h4 className="text-[16px] font-bold">Prep and Label</h4>
                <p className="text-gray-600">
                  Our team will inspect all items before carefully wrapping,
                  adding inserts, packing, 
                </p>
                <hr className="border-t-2 border-gray-300 mt-[10px]"></hr>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gray-200 text-orange-400 flex justify-center items-center rounded-full">
                <FaTruck className="text-2xl" />
              </div>
              <div>
                <h4 className="text-[16px] font-bold">Ship to Amazon</h4>
                <p className="text-gray-600">
                  Our staff of trained experts will complete your shipping plan,
                  arrange pickup.
                </p>
                <hr className="border-t-2 border-gray-300 mt-[10px]"></hr>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
