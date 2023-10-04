import React from "react";
import { NextSeo } from "next-seo";

import Link from "next/link";

const donation = () => {
  return (
    <div>
      <NextSeo
        title="Donation"
        titleTemplate="SJC87INITIATIVE | %s"
        description="SJC87 INITIATIVE is not for profit Education Initiative was formed in 2009, mainly to improve the Education standard in the North and East of Sri Lanka. It operates with slightly different names in Australia, Canada, Sri Lanka, UK and USA."
        canonical="https://sjc87initiative.com"
      />

      {/* Banner */}
      <div className="banner relative h-96 w-full">
        <img
          src="/img/donation/banner.jpg"
          alt="Banner"
          className="h-full w-full object-cover brightness-50 rounded-b-3xl"
        />
        <div className="content absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <h2 className="text-3xl md:text-6xl text-white font-extrabold mb-5">
            Donations
          </h2>
          <p className="text-white w-full md:text-2xl md:font-semibold">
            Apart from sponsorship and projects, our annual donation campaign
            involves selling calendars at nominal cost to raise funds for our
            operations and for projects
          </p>
        </div>
      </div>
      <div className="container mt-10">
        <h2 className="text-center py-5 font-bold text-gray-500 text-4xl">
          The following are your payment options in your country
        </h2>

        {/* Austraila */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 mb-10">
          <div className="country text-left md:text-right mr-16 mb-8 md:mb-0">
            <h3 className="text-2xl md:text-4xl text-orange-500 font-extrabold">
              Austraila
            </h3>
            <h4 className="text-xl md:text-2xl text-gray-500 font-bold">
              Non Profit
            </h4>
            <h4 className="text-xl md:text-2xl text-gray-500 font-semibold">
            Incorporation Number  INC9892583
            </h4>
          </div>
          <div className="col-span-2">
            <p className="text-xl md:text-2xl text-gray-500 mb-5">
              <span className="text-gray-600 font-bold text-xl md:text-2xl">
                Account name:{" "}
              </span>
              SJC87 SCHOLARSHIP
            </p>
            <p className="text-gray-600 font-bold text-xl md:text-2xl">
              DIRECT TRANSFER
            </p>
            <p className="text-xl md:text-2xl text-gray-500">
              <span className="text-gray-600 font-bold text-xl md:text-2xl">
                Account number:
              </span>
              1030 0007
            </p>

            <p className="text-xl md:text-2xl text-gray-500">
              <span className="text-gray-600 font-bold text-xl md:text-2xl">
                BSB:{" "}
              </span>
              062-268
            </p>
            <p className="text-xl md:text-2xl text-gray-500">
              <span className="text-gray-600 font-bold text-xl md:text-2xl">
                BANK:{" "}
              </span>
              COMMONWEALTH BANK
            </p>
            <p className="text-xl md:text-2xl text-gray-500">
              <span className="text-gray-600 font-bold text-xl md:text-2xl">
                SWIFT :
              </span>
              CTBAAU2S
            </p>
          </div>
        </div>

        {/* Canada */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3">
          <div className="country text-left md:text-right mr-16 mb-8 md:mb-0">
            <h3 className="text-2xl md:text-4xl text-orange-500 font-extrabold">
              Canada
            </h3>
            <h4 className="text-xl md:text-2xl text-gray-500 font-bold">
              Non Profit
            </h4>
            <h4 className="text-xl md:text-2xl text-gray-500 font-semibold">Incorporation Number  1987147</h4>
          </div>
          <div className="col-span-2">
            <p className="text-xl md:text-2xl text-gray-500">
              <span className="text-gray-600 font-bold text-xl md:text-2xl">
                Account name:{" "}
              </span>
              COMMUNITY HELP FOR SCHOOL KIDS INITIATIVE INC
            </p>
            <p className="text-xl md:text-2xl text-gray-500 my-5">
              <span className="text-gray-600 font-bold text-xl md:text-2xl ">
                E-TRANSFER:{" "}
              </span>
              <a href="mailto:contact@sjc87scholarship.org">
                accounts@sjc87scholarship.org
              </a>
            </p>
            <p className="text-xl md:text-2xl text-gray-500">
              <span className="text-gray-600 font-bold text-xl md:text-2xl">
                MAIL A CHEQUE (payable to COMMUNITY HELP FOR SCHOOL KIDS
                INITIATIVE INC):{" "}
              </span>
              11 Progress Avenue, Suite 202, Toronto, Ontario M1P 4S7npm 
            </p>
            <p className="text-gray-600 font-bold text-xl md:text-2xl mt-5">
              DEPOSIT AT OUR BANK:
            </p>
            <p className="text-xl md:text-2xl text-gray-500">
              <span className="text-gray-600 font-bold text-xl md:text-2xl">
                Account number:{" "}
              </span>
              Please check with{" "}
              <a href="mailto:contact@sjc87scholarship.org">
                contact@sjc87scholarship.org
              </a>
            </p>
            <p className="text-xl md:text-2xl text-gray-500">
              <span className="text-gray-600 font-bold text-xl md:text-2xl">
                BANK:{" "}
              </span>
              TD BANK
            </p>
            <p className="text-xl md:text-2xl text-gray-500">
              <span className="text-gray-600 font-bold text-xl md:text-2xl">
                SWIFT :{" "}
              </span>
              TDOMCATTTOR
            </p>
          </div>
        </div>

        {/* Sri Lanka */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3">
          <div className="country text-left md:text-right mr-16 mb-8 md:mb-0">
            <h3 className="text-2xl md:text-4xl text-orange-500 font-extrabold">
              Sri Lanka
            </h3>
            <h4 className="text-xl md:text-2xl text-gray-500 font-bold">
              Trust
            </h4>
            <h4 className="text-xl md:text-2xl text-gray-500 font-semibold">Deed of Trust No 6184</h4>
          </div>
          <div className="col-span-2">
            <p className="text-xl md:text-2xl text-gray-500">
              <span className="text-gray-600 font-bold text-xl md:text-2xl">
                Account name:{" "}
              </span>{" "}
              SJC87 TRUST
            </p>

            <p className="text-xl md:text-2xl text-gray-500">
              <span className="text-gray-600 font-bold text-xl md:text-2xl">
                Account number:{" "}
              </span>
              Please check with{" "}
              <a href="mailto:contact@sjc87scholarship.org">
                contact@sjc87scholarship.org
              </a>
            </p>
            <p className="text-xl md:text-2xl text-gray-500">
              <span className="text-gray-600 font-bold text-xl md:text-2xl">
                BANK/Branch:{" "}
              </span>
              xxxxxx
            </p>
            <p className="text-xl md:text-2xl text-gray-500">
              <span className="text-gray-600 font-bold text-xl md:text-2xl">
                BANK:{" "}
              </span>
              COMMERCIAL BANK, WELLAWATTE
            </p>
            <p className="text-xl md:text-2xl text-gray-500">
              <span className="text-gray-600 font-bold text-xl md:text-2xl">
                SWIFT :{" "}
              </span>
              CCEYLKLX
            </p>
          </div>
        </div>

        {/* UK */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3">
          <div className="country text-left md:text-right mr-16 mb-8 md:mb-0">
            <h3 className="text-2xl md:text-4xl text-orange-500 font-extrabold">
              UK
            </h3>
            <h4 className="text-xl md:text-2xl text-gray-500 font-bold">
              Registered Charity <span className="text-sm">tax deductible</span>
            </h4>
            <h3 className="text-xl md:text-2xl text-gray-500 font-semibold">Charity Registration Number 1191947</h3>
          </div>
          <div className="col-span-2">
            <p className="text-xl md:text-2xl text-gray-500">
              <span className="text-gray-600 font-bold text-xl md:text-2xl">
                Account name:{" "}
              </span>{" "}
              SJC87 INITIATIVE UK
            </p>

            <p className="text-xl md:text-2xl text-gray-500">
              <span className="text-gray-600 font-bold text-xl md:text-2xl">
                Account number:{" "}
              </span>
              71759647
            </p>
            <p className="text-xl md:text-2xl text-gray-500">
              <span className="text-gray-600 font-bold text-xl md:text-2xl">
                Sort Code:{" "}
              </span>
              40-09-07
            </p>
            <p className="text-xl md:text-2xl text-gray-500">
              <span className="text-gray-600 font-bold text-xl md:text-2xl">
                BANK:{" "}
              </span>
              HSBC BANK PLC
            </p>
            <p className="text-xl md:text-2xl text-gray-500">
              <span className="text-gray-600 font-bold text-xl md:text-2xl">
                SWIFT :{" "}
              </span>
              HBUKGB4BXXX
            </p>
          </div>
        </div>

        {/* USA */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3">
          <div className="country text-left md:text-right mr-16 mb-8 md:mb-0">
            <h3 className="text-2xl md:text-4xl text-orange-500 font-extrabold">
              USA
            </h3>
            <h4 className="text-xl md:text-2xl text-gray-500 font-bold">
              Registered Charity 501 (c) (3)
            </h4>
            <h3 className="text-xl md:text-2xl text-gray-500 font-semibold">EIN: 46-4212141</h3>
            <Link href="https://www.paypal.com/donate/?hosted_button_id=Z938BSFCMRHC2">
              <a className="text-xl md:text-2xl text-orange-500 font-semibold underline">
                Donate with Paypal
              </a>
            </Link>
          </div>
          <div className="col-span-2">
            <p className="text-xl md:text-2xl text-gray-500">
              <span className="text-gray-600 font-bold text-xl md:text-2xl">
                Account name:{" "}
              </span>{" "}
              SJC87 INITIATIVE INC
            </p>
            <p className="text-xl md:text-2xl text-gray-500 py-5">
              <span className="text-gray-600 font-bold text-xl md:text-2xl">
                Paypal:{" "}
              </span>{" "}
              Check the link on the left.
            </p>

            <p className="text-xl md:text-2xl text-gray-500">
              <span className="text-gray-600 font-bold text-xl md:text-2xl">
                MAIL A CHECK (payable to SJC87 INITIATIVE INC):{" "}
              </span>
              4605 WINDING STONE CIRCLE, OLNEY, MD 20832
            </p>

            <p className="text-gray-600 font-bold text-xl md:text-2xl mt-5">
              DIRECT TRANSFER TO BANK ACCOUNT:
            </p>

            <p className="text-xl md:text-2xl text-gray-500">
              <span className="text-gray-600 font-bold text-xl md:text-2xl">
                Account number:{" "}
              </span>
              Please check with{" "}
              <a href="mailto:contact@sjc87scholarship.org">
                contact@sjc87scholarship.org
              </a>
            </p>
            <p className="text-xl md:text-2xl text-gray-500">
              <span className="text-gray-600 font-bold text-xl md:text-2xl">
                Routing Number:{" "}
              </span>
              xxxxxx
            </p>
            <p className="text-xl md:text-2xl text-gray-500">
              <span className="text-gray-600 font-bold text-xl md:text-2xl">
                BANK:{" "}
              </span>
              CAPITAL ONE
            </p>
            <p className="text-xl md:text-2xl text-gray-500">
              <span className="text-gray-600 font-bold text-xl md:text-2xl">
                SWIFT :{" "}
              </span>
              NFBKUS33
            </p>
          </div>
        </div>
      </div>
      <hr className="bg-gray-600 my-10" />

      <div className="container">
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 mb-10">
          <div className="country text-left md:text-right mr-16 mb-8 md:mb-0">
            <h3 className="text-2xl md:text-4xl text-orange-500 font-extrabold">
              Volunteer
            </h3>
          </div>
          <div className="col-span-2 w-full md:w-2/3">
            <p>
              Most of our workforce is comprised of volunteers. If you have a
              few free hours that you can dedicate to others, or a skill that
              can be shared, we will be happy to channel it in the right
              direction.
            </p>

            <div className="mt-10">
              <Link href="/contact">
                <a className="py-2 px-8 text-orange-500 border border-orange-500 rounded hover:bg-orange-500 hover:text-white transition duration-500">
                  Contact
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default donation;
