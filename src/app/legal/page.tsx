import Link from "next/link";
import Image from "next/image";
import Button from "../components/button";

export default function LegalNotice() {
  return (
    <div className="relative w-full flex flex-col min-h-screen overflow-hidden px-25 py-15 bg-white text-black">
      <div className="absolute top-0 left-0 flex justify-start items-start">
        <Image
          alt="left"
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
          alt="right"
          width={400}
          height={400}
          className="w-auto h-auto max-w-[300px] md:max-w-[400px]"
          src="/images/all/loadingR.svg"
        />
      </div>

      <div className="w-full z-[1000] handleText">
        <h1 className=" font-poppins font-medium text-[50px] w-[662px] m-auto text-center mb-10 px-5">
          Legal Notice & Acceptable Use Policy
        </h1>

        <div className="flex justify-between items-center mb-5">
          <p>
            Effective Date: 1/2/2025 <br />
            Last Updated: 1/2/2025
          </p>

          <Link href="/" className="px-5 py-2 transition">
            <Button title="Go back" clssName="w-[172px] h-[48px] text-[23px]" />
          </Link>
        </div>

        <div className="max-w-none">
          <p>
            This Legal Notice (“Notice”) outlines the legal terms and acceptable
            use obligations that govern your access to and use of all websites,
            software, services, and content owned or operated by Prognil (“we,”
            “us,” or “our”).
          </p>
          <p>
            By using any of our services or visiting any of our sites, you agree
            to comply with this Notice and all applicable laws and regulations.
          </p>

          <h2>1. Ownership & Intellectual Property</h2>
          <p>
            All content, source code, software, logos, trademarks, and materials
            provided by Prognil are owned by or licensed to Prognil and are
            protected under intellectual property laws.
          </p>
          <p>
            No part of the Services may be copied, reproduced, republished,
            uploaded, posted, transmitted, or distributed in any form or by any
            means without prior written consent from Prognil.
          </p>

          <h2>2. Acceptable Use</h2>
          <p>You agree to use the Services only for lawful purposes and in ways that do not:</p>
          <ul className="list-disc pl-6">
            <li><p>Infringe on the rights of Prognil or others</p></li>
            <li><p>Breach any laws, regulations, or contracts</p></li>
            <li><p>Introduce malware, viruses, or other harmful technologies</p></li>
            <li><p>Reverse engineer, decompile, or tamper with our software</p></li>
            <li><p>Interfere with the operation or security of our systems</p></li>
            <li><p>Use automated tools (bots, crawlers) without permission</p></li>
            <li><p>Misrepresent your identity or affiliation</p></li>
          </ul>

          <h2>3. No Legal or Professional Advice</h2>
          <p>
            All content provided via Prognil’s services is for informational and
            functional purposes only. It does not constitute legal, financial,
            business, or professional advice unless explicitly stated in a
            written agreement.
          </p>

          <h2>4. Disclaimers</h2>
          <p>
            The Services are provided “as is” and “as available” without
            warranties of any kind, either express or implied.
          </p>
          <p>
            Prognil disclaims all liability for damages or losses resulting from
            use or inability to use the Services, including but not limited to
            data loss, business interruption, or financial losses.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by applicable law, Prognil shall not
            be liable for any indirect, incidental, consequential, or punitive
            damages arising from or related to your use of the Services.
          </p>

          <h2>6. Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless Prognil and its
            affiliates, directors, officers, employees, and agents from and
            against all claims, liabilities, damages, and expenses (including
            legal fees) arising from your violation of this Notice or your
            misuse of the Services.
          </p>

          <h2>7. Governing Law</h2>
          <p>
            This Notice is governed by and construed in accordance with the laws
            of Egypt, without regard to its conflict of law principles. Any
            disputes shall be resolved in the courts of that jurisdiction.
          </p>

          <h2>8. Changes to This Notice</h2>
          <p>
            We may update this Legal Notice at any time. Updates will be posted
            on our website, and your continued use of the Services constitutes
            acceptance of the revised Notice.
          </p>

          <h2>9. Contact Information</h2>
          <p>If you have any questions about this Legal Notice, please contact:</p>
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
