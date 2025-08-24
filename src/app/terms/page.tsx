import Link from "next/link";
import Image from "next/image";
import Button from "../components/button";

export default function Terms() {
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
        <h1 className="font-poppins font-medium text-[50px]  text-center mb-10">Terms of Use</h1>

        <div className="flex justify-between items-center mb-5">
          <p>Effective Date: 1/2/2025</p>

          <Link href="/" className="px-5 py-2 transition">
            <Button title="Go back" clssName="w-[172px] h-[48px] text-[23px]" />
          </Link>
        </div>

        <div className="prose prose-gray max-w-none">
          <p>
            Welcome to Prognil! These Terms of Use (“Terms”) govern your access
            to and use of our website, software products, applications, tools,
            and services (collectively, the “Services”) provided by Prognil
            (“we,” “our,” or “us”). By accessing or using our Services, you
            agree to comply with and be bound by these Terms.
          </p>

          <h2>1. Eligibility</h2>
          <p>
            You must be at least 18 years old to use our Services. By using the
            Services, you represent that you have the legal authority to enter
            into this agreement.
          </p>

          <h2>2. Services Description</h2>
          <p>
            Prognil provides a suite of AI-driven tools and solutions, including
            but not limited to:
          </p>
          <ul className="list-disc pl-6">
            <li>
              <p>Custom AI tools development</p>
            </li>
            <li>
              <p>Web and mobile application development</p>
            </li>
            <li>
              <p>UI/UX consultancy</p>
            </li>
            <li>
              <p>Data analytics models and services</p>
            </li>
          </ul>
          <p>
            Additional features, updates, or new tools may be introduced
            periodically.
          </p>

          <h2>3. User Accounts</h2>
          <p>
            To access certain features, you may need to create an account. You
            agree to:
          </p>
          <ul className="list-disc pl-6">
            <li>
              <p>Provide accurate and complete information</p>
            </li>
            <li>
              <p>Keep your login credentials confidential</p>
            </li>
            <li>
              <p>
                Be responsible for all activities that occur under your account
              </p>
            </li>
            <li>
              <p>
                We reserve the right to suspend or terminate accounts for any
                breach of these Terms.
              </p>
            </li>
          </ul>

          <h2>4. License and Usage</h2>
          <p>
            We grant you a limited, non-exclusive, non-transferable license to
            access and use the Services for your internal business or personal
            purposes.
          </p>
          <p>You agree not to:</p>
          <ul className="list-disc pl-6">
            <li>
              <p>Reverse engineer, decompile, or modify our Services</p>
            </li>
            <li>
              <p>
                Use our Services to violate any applicable laws or third-party
                rights
              </p>
            </li>
            <li>
              <p>Interfere with or disrupt our systems or networks</p>
            </li>
          </ul>

          <h2>5. Fees and Payment</h2>
          <p>
            Certain Services are provided for a fee. All payments are due as
            specified in your chosen plan or agreement. Failure to pay may
            result in suspension or termination of your access.
          </p>

          <h2>6. Intellectual Property</h2>
          <p>
            All content, software, trademarks, and designs are the property of
            Prognil or its licensors. You may not reproduce, redistribute, or
            exploit any content without prior written permission.
          </p>

          <h2>7. Confidentiality</h2>
          <p>
            Any non-public information shared between you and Prognil (such as
            business strategies, source code, client data) must be kept
            confidential and not disclosed to third parties without consent.
          </p>

          <h2>8. Termination</h2>
          <p>
            We reserve the right to terminate or suspend your access to our
            Services, with or without notice, if we determine you have violated
            these Terms.
          </p>

          <h2>9. Disclaimers</h2>
          <p>
            The Services are provided “as is” and “as available.” We do not
            warrant that the Services will be uninterrupted, secure, or
            error-free. Your use is at your own risk.
          </p>

          <h2>10. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Prognil is not liable for
            any indirect, incidental, or consequential damages arising out of
            your use of the Services.
          </p>

          <h2>11. Governing Law</h2>
          <p>
            These Terms are governed by and construed in accordance with the
            laws of [Insert Country/State], without regard to its conflict of
            laws principles.
          </p>

          <h2>12. Changes to Terms</h2>
          <p>
            We may update these Terms at any time. Continued use of our Services
            after changes become effective constitutes acceptance of the revised
            Terms.
          </p>

          <h2>13. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
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
