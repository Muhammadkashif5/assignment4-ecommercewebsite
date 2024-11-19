import React from "react";
import Image from "next/image";
import logo from "@/app/assets/company-name-logo.png";
import Social from "@/app/assets/social-contact.png";
import payment from "@/app/assets/card-option.png";

const Footer = () => {
  return (
    <footer className="bg-[#F0F0F0] text-[#00000099] py-12 px-8">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        <div className="sm:col-span-2 md:col-span-1">
          <Image src={logo} alt="logo img-1" />
          <p className="text-sm leading-relaxed mt-5">
            We have clothes that suit your style and
            <br /> which you &apos; re proud to wear. From <br />
            women to men.
          </p>
          <div className="mt-16 ">
            <Image src={Social} alt="Social Contacts" />
          </div>
        </div>

        <div>
          <h3 className="text-lg mb-4 text-[#000000]">COMPANY</h3>
          <ul className="space-y-2 text-sm">
            <li>About</li>
            <li>Features</li>
            <li>Works</li>
            <li>Career</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg text-[#000000] mb-4">HELP</h3>
          <ul className="space-y-2 text-sm">
            <li>Customer Support</li>
            <li>Delivery Details</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg text-[#000000] mb-4">FAQ</h3>
          <ul className="space-y-2 text-sm">
            <li>Account</li>
            <li>Manage Deliveries</li>
            <li>Orders</li>
            <li>Payments</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg text-[#000000] mb-4">RESOURCES</h3>
          <ul className="space-y-2 text-sm">
            <li>Free eBooks</li>
            <li>Development Tutorial</li>
            <li>How to - Blog</li>
            <li>Youtube Playlist</li>
          </ul>
        </div>
      </div>

      <div className="mt-8">
        <hr className="border-[#000000] border-[1px] my-4 items-center" />
        <div className="flex justify-between">
          <div className=" text-start sm:text-start text-[14px] text-[#00000099]">
            Shop.co © 2000-2023.All Rights Reserved
          </div>

          <div className="w-[281.07px] h-[30.03px] ">
            <Image src={payment} alt="Payment Options" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;