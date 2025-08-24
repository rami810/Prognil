import Image from "next/image";
import Link from "next/link";
import Button from "./button";

type FAQProps = {
  showButton?: boolean;
};

const generalData = [
  {
    question: "Q1: What does your company do",
    answer:
      "A: We specialize in developing cutting-edge software solutions that leverage the power of artificial intelligence (AI) and nanotechnology. Our products are designed to improve efficiency, enhance performance, and drive innovation across various industries.",
  },
  {
    question: "Q2: What industries do you serve?",
    answer:
      "A: Our solutions cater to a wide range of industries, including healthcare, manufacturing, finance, telecommunications, and more. Our versatile technology can be customized to meet the unique needs of different sectors.",
  },
  {
    question: "Q3: How does AI enhance your software solutions?",
    answer:
      "A: AI enables our software to analyze vast amounts of data, identify patterns, and make intelligent decisions. This results in smarter, more efficient, and more accurate solutions that can adapt to changing conditions and improve over time.",
  },
];

const productsAndServicesData = [
  {
    question: " Q4: What types of software solutions do you offer?",
    answer:
      "A: We offer a variety of software solutions, including predictive analytics, process automation, data management, and real-time monitoring systems. Each solution is designed to address specific challenges and deliver measurable results.",
  },
  {
    question: "Q5: How does nanotechnology play a role in your products?",
    answer:
      "A: Nanotechnology allows us to create highly precise and efficient components at a microscopic scale. This enhances the performance and capabilities of our software, enabling us to deliver solutions that are faster, more reliable, and more innovative.",
  },
  {
    question: "Q6: Can your software be customized to fit our specific needs?",
    answer:
      "A: Absolutely. Our team works closely with clients to understand their unique requirements and tailor our solutions accordingly. We believe in providing personalized solutions that align with your business goals.",
  },
];

const implementationAndSupport = [
  {
    question: "Q7: How long does it take to implement your software solutions?",
    answer:
      "A: The implementation timeline varies depending on the complexity of the solution and the specific needs of your organization. We work diligently to ensure a smooth and timely deployment, with minimal disruption to your operations.",
  },
  {
    question: "Q8: What kind of support do you offer post-implementation?",
    answer:
      "A: We provide comprehensive support services, including technical assistance, regular updates, and maintenance. Our dedicated support team is always available to address any issues and ensure your software continues to perform optimally.",
  },
  {
    question: "Q9: Do you offer training for our staff?",
    answer:
      "A: Yes, we offer training programs to help your staff understand and effectively use our software solutions. Our training sessions are designed to be user-friendly and can be customized to suit different skill levels.",
  },
];

const securtyAndCompliance = [
  {
    question: "Q10: How secure are your software solutions?",
    answer:
      "A: Security is a top priority for us. Our software solutions are built with robust security features, including encryption, authentication, and regular security audits, to protect your data and ensure compliance with industry standards.",
  },
  {
    question: "Q11: Do your solutions comply with industry regulations?",
    answer:
      "A: Yes, our solutions are designed to comply with relevant industry regulations and standards. We stay updated with the latest regulatory requirements to ensure our products meet all necessary compliance criteria.",
  },
];
const innvationAndFuture = [
  {
    question: "Q12: How do you stay ahead of technological advancements?",
    answer:
      "A: We invest heavily in research and development to stay at the forefront of technological innovation. Our team continuously explores new AI and nanotechnology advancements to integrate into our solutions and deliver state-of-the-art products.",
  },
  {
    question: "Q13: What are your future plans for product development?",
    answer:
      "A: We are committed to evolving our solutions to meet the ever-changing needs of our clients. Our future plans include expanding our AI capabilities, enhancing our nanotechnology applications, and exploring new markets to bring our innovative solutions to a broader audience.",
  },
];

function FAQ({ showButton = false }: FAQProps) {
  return (
    <div className="bg-white text-black">
      <div className="h-[440px] bg-[#F2F4F8] relative flex   items-center flex-col">
        {showButton && (
          <Link href="/" className="self-end">
            <Button
              title="Get Started"
              clssName=" text-white border border-[#F2F4F8] hover:![background-image:none] hover:!bg-transparent hover:text-[var(--second)] hover:border-[var(--second)] 
              transition 
              duration-300 
              py-2.5 
              px-9 
              text-[20px] 
              font-medium
              mt-5
              me-10
            "
            />
          </Link>
        )}

        <div className="m-auto text-center">
          <h1 className="font-poppins font-bold text-[50px]">
            Frequently Asked Question
          </h1>
          <p className="font-poppins text-[25px] max-w-[666px]">
            Here you can find answers to frequently asked questions about
            PROGNIL{" "}
          </p>
        </div>
        <div className="absolute right-20 top-65">
          <Image
            sizes="100vh"
            className="w-[292px] h-[292px]"
            width={0}
            height={0}
            src="/images/all/flat-color-icons_questions.png"
            alt="questions"
          />
        </div>
      </div>

      <div>
        <div className="grid grid-cols-12 ps-12 pt-10">
          <div className="col-span-6 m-auto  overflow-y-scroll  h-[562px]">
            <div>
              <h1 className="font-inter font-bold text-[35px] mt-5 ">
                General question
              </h1>
              {generalData.map((data, index) => (
                <div key={index} className="flex flex-col gap-8">
                  <h1 className="font-poppins font-semibold pt-10 text-[27px] max-w-[581px]">
                    {data.question}
                  </h1>
                  <p className="font-poppins text-[20px] max-w-[606px] pb-5 border-[#0000001A] border-b-2">
                    {data.answer}
                  </p>
                </div>
              ))}
            </div>

            <div>
              <h1 className="font-inter font-bold text-[35px] mt-30 ">
                Products and Services
              </h1>
              {productsAndServicesData.map((data, index) => (
                <div key={index} className="flex flex-col gap-8">
                  <h1 className="font-poppins font-semibold pt-10 text-[27px] max-w-[581px]">
                    {data.question}
                  </h1>
                  <p className="font-poppins text-[20px] max-w-[606px] pb-5 border-[#0000001A] border-b-2">
                    {data.answer}
                  </p>
                </div>
              ))}
            </div>

            <div>
              <h1 className="font-inter font-bold text-[35px] mt-30 ">
                Implementation and Support
              </h1>
              {implementationAndSupport.map((data, index) => (
                <div key={index} className="flex flex-col gap-8">
                  <h1 className="font-poppins font-semibold pt-10 text-[27px] max-w-[581px]">
                    {data.question}
                  </h1>
                  <p className="font-poppins text-[20px] max-w-[606px] pb-5 border-[#0000001A] border-b-2">
                    {data.answer}
                  </p>
                </div>
              ))}
            </div>

            <div>
              <h1 className="font-inter font-bold text-[35px] mt-30 ">
                Seurity and Compliance
              </h1>
              {securtyAndCompliance.map((data, index) => (
                <div key={index} className="flex flex-col gap-8">
                  <h1 className="font-poppins font-semibold pt-10 text-[27px] max-w-[581px]">
                    {data.question}
                  </h1>
                  <p className="font-poppins text-[20px] max-w-[606px] pb-5 border-[#0000001A] border-b-2">
                    {data.answer}
                  </p>
                </div>
              ))}
            </div>

            <div>
              <h1 className="font-inter font-bold text-[35px] mt-30 ">
                Innovation and Future Developments
              </h1>
              {innvationAndFuture.map((data, index) => (
                <div key={index} className="flex flex-col gap-8">
                  <h1 className="font-poppins font-semibold pt-10 text-[27px] max-w-[581px]">
                    {data.question}
                  </h1>
                  <p className="font-poppins text-[20px] max-w-[606px] pb-5 border-[#0000001A] border-b-2">
                    {data.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-6 m-auto">
            <div className="bg-[#F2F4F8] w-[488px] h-[163px]  ps-10 rounded-lg flex justify-center items-center">
              <p className="w-[414px] text-[23px] font-poppins">
                Can’t find the answers you’re looking for?{" "}
                <Link className="text-[#026BD3]" href="/contactUs">
                  You can reach out to our friendly team
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
