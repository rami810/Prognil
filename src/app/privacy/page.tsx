import Link from "next/link";
import Image from "next/image";
import Button from "../components/button";

export default function PrivacyPopcy() {
  return (
    <div className="relative w-full flex flex-col min-h-screen overflow-hidden px-25 py-15">
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
        <h1 className="font-poppins font-medium text-[50px]  text-center mb-10">
          Privacy Popcy
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

        <div className=" max-w-none">
          <p>
            Prognil (“we,” “our,” or “us”) respects your privacy and is
            committed to protecting the personal information you share with us.
            This Privacy Popcy explains how we collect, use, disclose, and
            safeguard your information when you use our website, apppcations,
            and related services (collectively, the “Services”).
          </p>

          <h2>1. Information We Collect</h2>
          <p>We may collect the following types of information:</p>

          <p className="!pb-0">a. Personal Information</p>
          <ul className=" pl-6">
            <li>
              <p>Name</p>
            </li>
            <li>
              <p>Email address</p>
            </li>
            <li>
              <p>Phone number</p>
            </li>
            <li>
              <p>Company name</p>
            </li>
            <li>
              <p>Billing and payment details</p>
            </li>
            <li>
              <p>User account information</p>
            </li>
          </ul>

          <p className="!pb-0">b. Technical Data</p>
          <ul className=" pl-6">
            <li>
              <p>IP address</p>
            </li>
            <li>
              <p>Browser type and version</p>
            </li>
            <li>
              <p>Operating system</p>
            </li>
            <li>
              <p>Device type</p>
            </li>
            <li>
              <p>Usage logs and analytics</p>
            </li>
          </ul>

          <p className="!pb-0">c. Usage Data</p>
          <ul className=" pl-6">
            <li>
              <p>Pages viewed</p>
            </li>
            <li>
              <p>Actions taken in the platform</p>
            </li>
            <li>
              <p>Session duration</p>
            </li>
            <li>
              <p>Feature interactions</p>
            </li>
          </ul>

          <p className="!pb-0">d. Third–party Data</p>
          <ul className=" pl-6">
            <li>
              <p>
                Data received from third–party services you integrate with our
                tools (e.g., analytics platforms, payment processors)
              </p>
            </li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className=" pl-6">
            <li>
              <p>Provide, maintain, and improve our Services</p>
            </li>
            <li>
              <p>Process payments and manage subscriptions</p>
            </li>
            <li>
              <p>Respond to inquiries and provide support</p>
            </li>
            <li>
              <p>Send service–related updates or marketing communications</p>
            </li>
            <li>
              <p>Monitor usage trends and user behavior for analytics</p>
            </li>
            <li>
              <p>Ensure security and prevent fraud</p>
            </li>
          </ul>

          <h2>3. Legal Basis for Processing (for EU/UK users)</h2>
          <p>
            If you are located in the EU or UK, we process your information
            under the following legal bases:
          </p>
          <ul className=" pl-6">
            <li>
              <p>Consent</p>
            </li>
            <li>
              <p>Contractual necessity</p>
            </li>
            <li>
              <p>Compliance with legal obligations</p>
            </li>
            <li>
              <p>
                Legitimate interests (e.g., improving services, preventing
                fraud)
              </p>
            </li>
          </ul>

          <h2>4. Data Sharing and Disclosure</h2>
          <p>
            We do not sell or rent your personal data. We may share your
            information with:
          </p>
          <ul className=" pl-6">
            <li>
              <p>
                Service Providers (e.g., hosting, analytics, payment processors)
              </p>
            </li>
            <li>
              <p>
                Legal Authorities when required by law or to protect our rights
              </p>
            </li>
            <li>
              <p>
                Business Transfers in case of merger, acquisition, or sale of
                assets
              </p>
            </li>
          </ul>

          <h2>5. Data Retention</h2>
          <p>
            We retain your personal data only as long as necessary for the
            purposes outlined in this popcy, or as required by law.
          </p>

          <h2>6. Data Security</h2>
          <p>
            We implement reasonable administrative, technical, and physical
            safeguards to protect your information. However, no method of
            transmission over the Internet is 100% secure.
          </p>

          <h2>7. Your Rights</h2>
          <p>Depending on your location, you may have the following rights:</p>
          <ul className=" pl-6">
            <li>
              <p>Access your personal data</p>
            </li>
            <li>
              <p>Request correction or deletion</p>
            </li>
            <li>
              <p>Object to processing or restrict use</p>
            </li>
            <li>
              <p>Request data portability</p>
            </li>
            <li>
              <p>Withdraw consent at any time</p>
            </li>
          </ul>
          <p>To exercise these rights, contact us at [Insert Contact Email].</p>

          <h2>8. Cookies and Tracking Technologies</h2>
          <p>We use cookies and similar technologies to:</p>
          <ul className=" pl-6">
            <li>
              <p>Remember your preferences</p>
            </li>
            <li>
              <p>Analyze usage</p>
            </li>
            <li>
              <p>Deliver personalized experiences</p>
            </li>
          </ul>
          <p>
            You can manage cookies via your browser settings or opt–out tools.
          </p>

          <h2>9. Third–Party Services</h2>
          <p>
            Our Services may contain links or integrations with third–party
            platforms. We are not responsible for their privacy practices, and
            you should review their policies separately.
          </p>

          <h2>10. Children&apos;s Privacy</h2>
          <p>
            Our Services are not intended for children under the age of 13 (or
            16 in some jurisdictions). We do not knowingly collect data from
            minors.
          </p>

          <h2>11. International Data Transfers</h2>
          <p>
            If you access our Services from outside [Insert Country], your
            information may be transferred to and processed in countries with
            different data protection laws.
          </p>

          <h2>12. Changes to This Popcy</h2>
          <p>
            We may update this Privacy Popcy from time to time. If we make
            material changes, we will notify you via email or through the
            platform.
          </p>

          <h2>13. Contact Us</h2>
          <p>
            If you have any questions or concerns regarding this Privacy Popcy,
            please contact us at:
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
