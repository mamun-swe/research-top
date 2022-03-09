
import Link from "next/link"
import Image from "next/image"
import { Menu } from "react-feather"
import { Images } from "../../utils/images"
import { PrimaryButton, CircleIconButton } from "../button"

export const Navbar = (props) => {
    return (
        <div className="fixed top-0 left-0 w-full py-4">
            <div className="container mx-auto">
                <div className="flex w-full">

                    {/* Logo */}
                    <div className="flex-none">
                        <Link href="/">
                            <a>
                                <Image
                                    src={Images.Logo}
                                    alt="Logo"
                                    width={140}
                                    height={35}
                                />
                            </a>
                        </Link>
                    </div>

                    {/* Page links */}
                    <div className="grow hidden lg:block">
                        <div className="flex justify-end">
                            <div className="mr-2">
                                <Link href="/">
                                    <a>
                                        <p className="px-6 py-[8px] text-sm font-medium transition-all text-black hover:text-indigo-400">Home</p>
                                    </a>
                                </Link>
                            </div>

                            <div className="mr-2">
                                <Link href="/about">
                                    <a>
                                        <p className="px-6 py-[8px] text-sm font-medium transition-all text-black hover:text-indigo-400">About</p>
                                    </a>
                                </Link>
                            </div>

                            <div className="mr-2">
                                <Link href="/researcher">
                                    <a>
                                        <p className="px-6 py-[8px] text-sm font-medium transition-all text-black hover:text-indigo-400">Researcher</p>
                                    </a>
                                </Link>
                            </div>

                            <div className="mr-2">
                                <Link href="/create-account">
                                    <a>
                                        <p className="px-6 py-[8px] text-sm font-medium transition-all text-black hover:text-indigo-400">Create an account</p>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Action buttons */}
                    <div className="ml-auto">
                        <div className="flex">
                            <div>
                                <Link href="/login">
                                    <a>
                                        <PrimaryButton>
                                            Login
                                        </PrimaryButton>
                                    </a>
                                </Link>
                            </div>

                            <div className="ml-3 lg:hidden">
                                <CircleIconButton onClick={props.handleDrawer}>
                                    <Menu size={20} />
                                </CircleIconButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
