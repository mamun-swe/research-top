
import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin } from "react-feather"
import { Images } from "../../utils/images"

export const Footer = () => {
    return (
        <div className="border-t px-3 md:px-0">
            <div className="container mx-auto py-[40px]">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

                    {/* About */}
                    <div>
                        <Image
                            src={Images.Logo}
                            alt="Agency logo"
                            width={140}
                            height={35}
                        />

                        <p className="text-sm text-gray-600 mb-0 mt-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit fugiat iusto.
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <p className="text-md text-gray-700 font-semibold mb-5">Contact</p>

                        <div className="flex mb-4">
                            <div className="shrink-0">
                                <Mail size={18} className="text-gray-300" />
                            </div>
                            <div className="ml-2">
                                <p className="text-sm text-gray-600 mb-0">support@researchtop.com</p>
                            </div>
                        </div>

                        <div className="flex mb-4">
                            <div className="shrink-0">
                                <MapPin size={18} className="text-gray-300" />
                            </div>
                            <div className="ml-2">
                                <p className="text-sm text-gray-600 mb-0">Dhaka, Bangladesh</p>
                            </div>
                        </div>
                    </div>

                    {/* Privacy & policy */}
                    <div>
                        <p className="text-md text-gray-700 font-semibold mb-5">Policy & Info</p>

                        <div>
                            <Link href={"/"}>
                                <a>
                                    <p className="text-sm transition-all text-gray-600 hover:text-primary mb-2">About Us</p>
                                </a>
                            </Link>
                        </div>

                        <div>
                            <Link href={"/"}>
                                <a>
                                    <p className="text-sm transition-all text-gray-600 hover:text-primary mb-2">Privacy Policy</p>
                                </a>
                            </Link>
                        </div>

                        <div>
                            <Link href={"/"}>
                                <a>
                                    <p className="text-sm transition-all text-gray-600 hover:text-primary mb-2">Term Conditions</p>
                                </a>
                            </Link>
                        </div>
                        <div>
                            <Link href={"/"}>
                                <a>
                                    <p className="text-sm transition-all text-gray-600 hover:text-primary mb-2">FAQs</p>
                                </a>
                            </Link>
                        </div>
                    </div>

                    {/* My Account */}
                    <div>
                        <p className="text-md text-gray-700 font-semibold mb-5">My Account</p>

                        <div>
                            <Link href={"/"}>
                                <a>
                                    <p className="text-sm transition-all text-gray-600 hover:text-primary mb-2">Dashboard</p>
                                </a>
                            </Link>
                        </div>
                        <div>
                            <Link href={"/"}>
                                <a>
                                    <p className="text-sm transition-all text-gray-600 hover:text-primary mb-2">Account Details</p>
                                </a>
                            </Link>
                        </div>
                        <div>
                            <Link href={"/"}>
                                <a>
                                    <p className="text-sm transition-all text-gray-600 hover:text-primary mb-2">Change Password</p>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
