import Link from "next/link";
import Image from "next/image";
import Button from "../components/button";

export default function SalesRefunds() {
  return (
    <div className="relative w-full flex flex-col min-h-screen overflow-hidden px-25 py-15 bg-white">
      <div className="absolute top-0 left-0 flex justify-start items-start">
        <Image
          alt="left "
          width={400}
          height={400}
          className="w-auto h-auto max-w-[300px] md:max-w-[400px]"
          src="/images/all/LOADINGL.svg"
        />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
        <Image
          alt="center"
          width={400}
          height={400}
          className="w-auto h-auto max-w-[300px] md:max-w-[400px]"
          src="/images/all/center.svg"
        />
      </div>

      <div className="absolute bottom-0 right-0 flex justify-end items-end">
        <Image
          alt="right "
          width={400}
          height={400}
          className="w-auto h-auto max-w-[300px] md:max-w-[400px]"
          src="/images/all/loadingR.svg"
        />
      </div>

      <div className="w-full z-[1000] handleText">
        <h1 className="font-poppins font-medium text-[50px] text-center mb-10">
          Sales and Refunds Policy
        </h1>

        <div className="flex justify-between items-center mb-5">
          <p>
            Effective Date: 1/2/2025 <br />
            Last Updated: 1/2/2025
          </p>

          <Link href="/" className="px-5 py-2 transition">
            <Button
              title="Go back"
              clssName="w-[172px] h-[48px] text-[23px]"
            ></Button>
          </Link>
        </div>

        <div className="prose prose-gray max-w-none">
          <p>
            This Sales and Refunds Policy (“Policy”) outlines the terms under
            which Prognil (“we,” “us,” or “our”) offers its products and
            services to clients and customers. By purchasing or subscribing to
            any of our offerings, you agree to the terms outlined below.
          </p>

          <h2>1. Scope of Policy</h2>
          <p>This Policy applies to all purchases of:</p>
          <ul className="list-disc pl-6">
            <li><p>AI Tools and Software Products</p></li>
            <li><p>Custom Development Services</p></li>
            <li><p>Web/Mobile App Solutions</p></li>
            <li><p>Data Analytics Models</p></li>
            <li><p>UI/UX Consultation Services</p></li>
            <li><p>Subscriptions and SaaS Licenses</p></li>
          </ul>

          <h2>2. Pricing and Payments</h2>
          <ul className="list-disc pl-6">
            <li><p>All prices are listed in [Insert Currency] unless stated otherwise.</p></li>
            <li><p>Pricing may vary based on project scope, subscription plans, or custom requests.</p></li>
            <li><p>We accept payments via [insert payment methods: e.g., credit card, wire transfer, PayPal, etc.].</p></li>
            <li><p>Payment terms (e.g., due on receipt, 50% upfront) will be clearly stated in the invoice or agreement.</p></li>
            <li><p>Subscriptions are billed monthly or annually depending on the selected plan.</p></li>
          </ul>

          <h2>3. Refund Eligibility</h2>
          <p>
            We strive for high-quality results and customer satisfaction.
            However, due to the digital and often customized nature of our
            services, refunds are issued only under specific conditions:
          </p>

          <p className="!pb-0">a. Digital Products and AI Tools</p>
          <ul className="list-disc pl-6">
            <li>
              <p>
                Non-refundable once access, download, or license is provided,
                unless proven defective or non-functional beyond reasonable
                repair.
              </p>
            </li>
          </ul>

          <p className="!pb-0">b. Custom Development & Consultation</p>
          <ul className="list-disc pl-6">
            <li>
              <p>
                Partial refunds may be issued only if the project is canceled
                before significant work has commenced (generally within 5
                business days of initial payment).
              </p>
            </li>
            <li>
              <p>
                If work has already begun, refunds are prorated based on time,
                resources, and deliverables already committed.
              </p>
            </li>
          </ul>

          <p className="!pb-0">c. Subscription Services</p>
          <ul className="list-disc pl-6">
            <li>
              <p>
                Monthly plans: Cancel anytime; you will retain access until the
                end of the billing cycle. No partial refunds for unused time.
              </p>
            </li>
            <li>
              <p>
                Annual plans: Refundable within 14 days of the initial purchase
                or renewal, minus any applicable processing fees.
              </p>
            </li>
          </ul>

          <h2>4. How to Request a Refund</h2>
          <p>To request a refund, email us at [Insert Contact Email] with:</p>
          <ul className="list-disc pl-6">
            <li><p>Your full name and company name (if applicable)</p></li>
            <li><p>Invoice number or transaction ID</p></li>
            <li><p>Reason for refund request</p></li>
            <li><p>Relevant attachments/screenshots (if applicable)</p></li>
          </ul>
          <p>We aim to respond within 5 business days.</p>

          <h2>5. Delivery of Services</h2>
          <ul className="list-disc pl-6">
            <li><p>Digital products are delivered via secure download or SaaS access upon payment confirmation.</p></li>
            <li><p>Custom services follow a clearly defined timeline, as outlined in the project scope or service agreement.</p></li>
          </ul>

          <h2>6. Chargebacks</h2>
          <p>
            Initiating a chargeback without first contacting us to resolve the
            issue is a violation of this policy. We reserve the right to dispute
            any chargebacks and deny future service.
          </p>

          <h2>7. Policy Changes</h2>
          <p>
            We reserve the right to update this Sales and Refunds Policy at any
            time. Updates will be posted on our website, and continued use of
            our Services constitutes agreement to the revised terms.
          </p>

          <h2>8. Contact Us</h2>
          <p>
            For any questions or concerns regarding sales, billing, or refunds,
            please contact:
          </p>
          <p>
            Prognil <br />
            Email: info@prognil.com <br />
            Website:{" "}
            <a href="https://prognil.com/" className="text-teal-600 underline">
              https://prognil.com/
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
