"use client";
import Button from "@/app/components/button";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";

function ServicesDetails() {
  const { id } = useParams();

  const Detailes = [
    {
      id: "data-analytics",
      title: "Data Analytics",
      desc: "Your business creates a lot of data every day — from website visitors to customer actions to sales trends. But raw numbers are hard to understand without the right tools. We help you turn that data into clear, visual reports that show exactly what's working and what needs attention. Whether you want to know which product is selling best, where your website traffic is coming from, or why customers are dropping off before buying. We set up dashboards and reports that give you real insights. With data on your side, you can make smarter, faster business decisions based on facts, not guesswork.",
      Ex: "Famous examples",
      exphotos: [
        "/images/all/gogleAnalytics.png",
        "/images/all/hotjar.png",
        "/images/all/power.png",
      ],
      contact:
        "We turn your business data into clear insights that help you understand what’s working, what’s not, and where to focus, so you can make smarter decisions, faster.",
    },
    {
      id: "mobile-app",
      title: "Mobile App Development",
      desc: "Mobile apps are a powerful way to stay connected to your customers. We build custom apps for iPhone and Android that are fast, easy to use, and designed specifically for your business. Whether you want users to shop, book appointments, track orders, or receive updates, we create apps that make it simple. We work with you from start to finish: planning features, designing the user interface, building the app, and even helping you launch it in the App Store or Google Play. Your app will be reliable, secure, and built for long-term success.",
      Ex: "Famous examples",
      exphotos: [
        "/images/all/non.png",
        "/images/all/uber.png",
        "/images/all/indrive.png",
      ],
      contact:
        "We create mobile apps that are easy to use, fast to navigate, and designed to make everyday tasks feel simple and intuitive, even for first-time users.",
    },
    {
      id: "web",
      title: "Web Design & Development",
      desc: "Your website is the first impression people have of your business — and it needs to work perfectly. We design and develop websites that look great, load quickly, and function smoothly on all devices, including phones, tablets, and computers. Our team works with you to create a custom site that reflects your brand, speaks to your audience, and helps you achieve your business goals — whether that's getting more leads, selling products online, or building trust with potential customers. Everything we build is responsive, secure, and optimized for performance.",
      Ex: "Famous examples",
      exphotos: [
        "/images/all/amazon.png",
        "/images/all/mesafer.png",
        "/images/all/cours.png",
      ],
      contact:
        "Think of it like building your own website version, but custom-made, fully branded, and done professionally for your business.",
    },
    {
      id: "uxui",
      title: "UI/UX Consultancy",
      desc: "Have you ever visited a website or app that was frustrating or confusing? That’s a problem with user experience (UX). We specialize in fixing that. Our job is to make sure your product feels easy, natural, and enjoyable to use. We do this by studying how real people interact with your site or app, where they click, where they hesitate, and where they get stuck. Then we recommend design changes that improve flow, reduce confusion, and guide users toward the actions you want them to take — like signing up, making a purchase, or completing a form. A better experience means more engagement and better results.",
      Ex: "Famous examples",
      exphotos: [
        "/images/all/airb.png",
        "/images/all/notin.png",
        "/images/all/spotify.png",
      ],
      contact:
        "Just like Airbnb makes it easy to find a place to stay, we make your platform just as easy to use.",
    },
    {
      id: "AI",
      title: "AI tools for business",
      desc: "Artificial Intelligence (AI) might sound complex, but we make it simple for your business. We help you use AI-powered tools that can save time, cut costs, and improve the way you work, without needing to hire developers or become a tech expert. Whether it’s an AI chatbot that responds to customer questions instantly, or tools that help you write content, summarize reports, organize tasks, or even generate ideas. We help you choose and set up the right AI tools for your needs. It’s like having an extra team member working 24/7 to help your business run smarter.",
      Ex: "Famous examples",
      exphotos: [
        "/images/all/Gpt.png",
        "/images/all/grammary.png",
        "/images/all/gemini.png",
      ],
      contact:
        "If you’ve seen how Grammarly fixes writing or how ChatGPT answers questions instantly. Imagine using tools like that inside your business. We are here to make it for you.",
    },
  ];

  const service = Detailes.find((item) => item.id === id);

  if (!service) {
    return (
      <div className="p-10 text-center text-red-500">Service not found!</div>
    );
  }
  return (
    <div className="h-[100vh] pt-20 px-10 pb-10 font-poppins">
      <div className=" max-w-[1201px] m-auto flex flex-col gap-8">
        <h1 className="bg-gradient-to-b from-[var(--primary)] to-[var(--second)] bg-clip-text text-transparent font-medium text-[40px] w-fit m-auto mb-5">
          {service.title}
        </h1>
        <p className="text-[24px] leading-[162%]">{service.desc}</p>

        <div className="my-10">
          <h2 className="text-[35px] font-medium">{service.Ex}</h2>
          <div className="flex gap-5 mt-5">
            {service.exphotos.map((photo, index) => (
              <Image
                key={index}
                alt="example"
                src={photo}
                width={100}
                height={100}
              />
            ))}
          </div>
        </div>
        <p className="font-medium text-[20px]">
          {service.contact}{" "}
          <Link href="/contactUs" className="text-[#026BD3]">
             Contact us now
          </Link>
        </p>

        <Link className="self-end" href={`/ourServices/?active=${id}`}>
          <Button title="Go Back" clssName="px-10 py-3" />
        </Link>
      </div>
    </div>
  );
}

export default ServicesDetails;
