"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

const ordersData = [
  {
    title: "Innovation-Driven Excellence",
    content:
      "Commit to pushing the boundaries of AI technology to deliver cutting-edge solutions that address real-world challenges",
    logo: "/images/all/order-1.png",
  },
  {
    title: "Customer-Centric Approach",
    content:
      "Design products and services with the customer's needs as the central focus, ensuring solutions are impactful and user-friendly",
    logo: "/images/all/order-2.gif",
  },
  {
    title: "Ethical AI Practices",
    content:
      "Develop AI technologies responsibly, prioritizing fairness, transparency, and privacy in all solutions",
    logo: "/images/all/order-3.gif",
  },
  {
    title: "Collaboration and Partnership",
    content:
      "Foster a culture of teamwork within the company and with external partners to amplify collective expertise",
    logo: "/images/all/order-4.gif",
  },
  {
    title: "Commitment to Learning and Growth",
    content:
      "Encourage continuous learning for employees and adapt swiftly to advancements in AI and customer needs",
    logo: "/images/all/order-5.gif",
  },
  {
    title: "Quality and Reliability",
    content:
      "Deliver high-quality, dependable solutions that consistently exceed client expectations",
    logo: "/images/all/order-6.gif",
  },
  {
    title: "Social Impact",
    content:
      "Create AI solutions that contribute positively to society, addressing challenges such as accessibility, sustainability, and efficiency",
    logo: "/images/all/order-7.gif",
  },
  {
    title: "Data Security and Integrity",
    content:
      "Uphold the highest standards in safeguarding customer data and maintaining transparency in data usage",
    logo: "/images/all/order-8.gif",
  },
];

function Order() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const cardWidth = 384 + 40;

  const updateButtons = () => {
    const el = scrollRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;

    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
  };

  const scrollLeft = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
  };

  const scrollRight = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
  };

  useEffect(() => {
    updateButtons();

    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener("scroll", updateButtons);
    window.addEventListener("resize", updateButtons);

    return () => {
      el.removeEventListener("scroll", updateButtons);
      window.removeEventListener("resize", updateButtons);
    };
  }, []);

  return (
    <div className="h-[100vh] pt-[100px] bg-white text-black">
      <div className="flex justify-between mb-10 px-20">
        <h1 className="font-poppios font-semibold text-[40px]">Core Values</h1>
        <span className="flex gap-10">
          <button
            className="w-[48px] h-[48px] disabled:opacity-30"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <Image
              alt="left"
              width={0}
              height={0}
              sizes="100vh"
              className="w-full h-full cursor-pointer"
              src="/images/all/Button.png"
              priority
            />
          </button>
          <button
            className="w-[48px] h-[48px] disabled:opacity-30"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <Image
              alt="right"
              width={0}
              height={0}
              sizes="100vh"
              className="w-full h-full cursor-pointer"
              src="/images/all/Button@2x.png"
              priority
            />
          </button>
        </span>
      </div>

      <div
        ref={scrollRef}
        className="overflow-x-auto h-[471px] w-full scroll-smooth"
      >
        <div className="relative w-max px-5">
          <div className="absolute top-0 left-0 w-full h-full gradient-core pointer-events-none z-0"></div>

          <div className="flex gap-10 relative z-10 top-[60]">
            {ordersData.map((order, i) => (
              <div
                key={i}
                className="w-[384px] h-[368px] flex-shrink-0 bg-white shadow-lg rounded-2xl ps-5 pt-13 flex flex-col gap-8 leading-[1.6]"
              >
                <div className="flex items-center gap-2">
                  <Image
                    width={49}
                    height={49}
                    src={order.logo}
                    alt={order.title}
                  />
                  <h1 className="font-roboto text-[20px] font-extrabold text-[#475569]">
                    {order.title}
                  </h1>
                </div>
                <p className="w-[320px] text-[24px] font-roboto">
                  {order.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
