

'use client'

import Link from "next/link"
import { useState } from "react"
import Header from "../components/header"
import Image from "next/image"
import { motion } from "framer-motion"

import { useSearchParams } from "next/navigation";


function OurProducts() {
  const [activeTab, setActiveTab] = useState("Original Products")

  const searchParams = useSearchParams();
  const fromDetails = searchParams.get("from") === "details";


  // Tabs
  const productKind = ["Original Products", "On-demand Products"]

  // Products Data
  const products = [
    {
      id: "fe",
      title: "Flexara",
      desc: "Physical therapy Application, You can Track your progress, contact with your Doctor and get the best results",
      cover: "/images/all/flexara.jpg",
      kind: "Original Products",
    },
    {
      id: "sup",
      title: "Supportify",
      desc: "A point system to engage users in community activities, securely facilitate donations, and enhance interactions between charities and their audiences.",
      cover: "/images/all/supportify.jpg",
      kind: "Original Products",
    },
  ]

  // Filtering
  const filteredProducts =
    activeTab === "Original Products" ? products : [] // On-demand Products → فاضي

  return (
    <div className="h-[939px] flex flex-col">
      
      <div className="sticky top-0  z-999">
        <Header />
      </div>



    
    <div className="bg-[#F2F4F8] h-full">
        <div
        className="font-poppins flex flex-col gap-6 px-10 py-17"
       
      >
       <motion.div
    initial={fromDetails ? false : { scale: 0.5 }}     // يبدأ صغير
   animate={{ scale: 1 }}          // يكبر لحجمه الطبيعي
   transition={{ duration: 0.8, delay: 0.8 , ease: "easeOut" }}
   style={{ originX: 0, originY: 0 }} // يبدأ يكبر من الشمال
 >
   <h1 className="text-[50px] mb-2">Our Products</h1>
 </motion.div>

        {/* Tabs */}
<motion.div
  initial={fromDetails ? false : { opacity: 0, x: -50, y: -50 }}
  animate={{ opacity: 1, x: 0, y: 0 }}
  transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
>
          <ul className="flex text-[20px] gap-5 flex-wrap">
            {productKind.map((kind, index) => (
              <li key={index} className="w-[239px]">
                <button
                  onClick={() => setActiveTab(kind)}
                  className={`w-full py-2 rounded-4xl border transition
                    ${
                      activeTab === kind
                        ? "gradient text-white"
                        : "text-[#026BD3] hover-gradient hover:text-white"
                    }`}
                >
                  {kind}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Products */}
        <div className="flex gap-10 mt-8 flex-wrap">
          {filteredProducts.length > 0 ? (
   filteredProducts.map((product, index) => (

    
    
   <motion.div
  key={index}
  className="group w-[448px] h-[464px] rounded-4xl overflow-hidden shadow-lg"
  initial={fromDetails ? false : { opacity: 0 }}
  animate={{ opacity: 1 }}                // الكارت يبان
  transition={{ duration: 0.8, delay: 0.3 + index * 0.2, ease: "easeOut" }}
>
  {/* الصورة → صغيرة وتكبر أول ما الصفحة تفتح + hover شغال */}
<motion.div
  className="w-full h-[265px] overflow-hidden"
  initial={fromDetails ? false : { scale: 0.5 }} // لو جا من Details يبقى مفيش animation
  animate={{ scale: 1 }}
  transition={{ duration: 1, delay: fromDetails ? 0 : 0.5 + index * 0.2, ease: "easeOut" }}
>
  <Image
    className="w-full h-full rounded-t-2xl object-cover transition-transform duration-500 group-hover:scale-[1.2]"
    width={0}
    height={0}
    sizes="100vh"
    alt={`product ${product.title}`}
    src={product.cover}
  />
</motion.div>


  {/* النصوص → ليها hover effect */}
  <motion.div
    className="flex flex-col gap-5 pb-5 px-5 bg-white overflow-hidden"
    variants={{
      rest:  { height: 200, y: 0 },
      hover: { height: 240, y: -40 },
    }}
    initial="rest"
    whileHover="hover"
    transition={{ type: "tween", duration: 0.4 }}
  >
    <div className="flex justify-between pt-5">
      <h1 className="w-fit pt-2 font-semibold text-[30px]">
        {product.title}
      </h1>
      <Link href={`/oroginalProducts/${product.id}`}>
        <button className="px-4 rounded-4xl cursor-pointer h-[41px] text-[17px] bg-transparent border text-[#4E94D0]">
          See Details
        </button>
      </Link>
    </div>

    <p className="text-[15px] text-[#00000080]">{product.desc}</p>
  </motion.div>
</motion.div>





            ))
          ) : (
            <motion.div
              className="w-full text-center py-20 text-2xl text-gray-500 font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              🚧 Coming Soon 🚧
            </motion.div>
          )}
        </div>
      </div>
    </div>
    </div>
  )
}

export default OurProducts























































































// 'use client'

// import Link from "next/link"
// import { useState } from "react"
// import Header from "../components/header"
// import Image from "next/image"
// import { motion } from "framer-motion"

// function OurProducts() {
//   const [activeTab, setActiveTab] = useState("Original Products")

//   const productKind = ["Original Products", "On-demand Products"]

//   const products = [
//     {
//       id: "fe",
//       title: "Flexara",
//       desc: "Physical therapy Application, You can Track your progress, contact with your Doctor and get the best results",
//       cover: "/images/all/flexara.jpg",
//       kind: "Original Products",
//     },
//     {
//       id: "sup",
//       title: "Supportify",
//       desc: "A point system to engage users in community activities, securely facilitate donations, and enhance interactions between charities and their audiences.",
//       cover: "/images/all/supportify.jpg",
//       kind: "Original Products",
//     },
//   ]

//   const filteredProducts =
//     activeTab === "Original Products" ? products : []

//   return (
//     <div className="h-[939px] flex flex-col">
//       <div className="sticky top-0">
//         <Header />
//       </div>

//       <div className="bg-[#F2F4F8] h-full">
//         <div className="font-poppins flex flex-col gap-6 px-10 py-17">
//           {/* العنوان ثابت */}

// <motion.div
//   initial={{ scale: 0.5 }}        // يبدأ صغير
//   animate={{ scale: 1 }}          // يكبر لحجمه الطبيعي
//   transition={{ duration: 0.8, ease: "easeOut" }}
//   style={{ originX: 0, originY: 0 }} // يبدأ يكبر من الشمال
// >
//   <h1 className="text-[50px] mb-2">Our Products</h1>
// </motion.div>



       

//           {/* Tabs مع أنيميشن خاص بيها */}
//           <motion.div
//             initial={{ opacity: 0, }}
//             animate={{ opacity: 1, }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//           >
//             <ul className="flex text-[20px] gap-5 flex-wrap">
//               {productKind.map((kind, index) => (
//                 <li key={index} className="w-[239px]">
//                   <button
//                     onClick={() => setActiveTab(kind)}
//                     className={`w-full py-2 rounded-4xl border transition
//                       ${
//                         activeTab === kind
//                           ? "gradient text-white"
//                           : "text-[#026BD3] hover-gradient hover:text-white"
//                       }`}
//                   >
//                     {kind}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Products */}
//           <div className="flex gap-10 mt-8 flex-wrap">
//             {filteredProducts.length > 0 ? (
//               filteredProducts.map((product, index) => (
//                 <div
//                   key={index}
//                   className="group w-[448px] h-[464px] rounded-4xl overflow-hidden shadow-lg"
//                 >
//                   {/* الصورة — ظاهرة من الأول وتكبر بس */}
//                   <motion.div
//                     className="w-full h-[265px] overflow-hidden"
//                     initial={{ scale: 0.5 }}
//                     animate={{ scale: 1 }}
//                     transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 + index * 0.2 }}
//                   >
//                     <Image
//                       className="w-full h-full rounded-t-2xl object-cover transition-transform duration-500 group-hover:scale-[1.2]"
//                       width={0}
//                       height={0}
//                       sizes="100vh"
//                       alt={`product ${product.title}`}
//                       src={product.cover}
//                     />
//                   </motion.div>

//                   {/* الكلام — يبان لوحده */}
//                   <motion.div
//                     className="flex flex-col gap-5 pb-5 px-5 bg-white overflow-hidden"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
//                     variants={{
//                       rest: { height: 200, y: 0 },
//                       hover: { height: 240, y: -40 },
//                     }}
//                     whileHover="hover"
//                   >
//                     <div className="flex justify-between pt-5">
//                       <h1 className="w-fit pt-2 font-semibold text-[30px]">
//                         {product.title}
//                       </h1>
//                       <Link href={`/oroginalProducts/${product.id}`}>
//                         <button className="px-4 rounded-4xl cursor-pointer h-[41px] text-[17px] bg-transparent border text-[#4E94D0]">
//                           See Details
//                         </button>
//                       </Link>
//                     </div>

//                     <p className="text-[15px] text-[#00000080]">
//                       {product.desc}
//                     </p>
//                   </motion.div>

                  
//                 </div>
//               ))
//             ) : (
//               <motion.div
//                 className="w-full text-center py-20 text-2xl text-gray-500 font-semibold"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 1 }}
//               >
//                 🚧 Coming Soon 🚧
//               </motion.div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default OurProducts







