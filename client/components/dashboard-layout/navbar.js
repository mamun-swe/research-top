
import Link from "next/link"
import Image from "next/image"
import { Menu } from "react-feather"
import { CircleIconButton } from "../button"
import { Images } from "../../utils/images"

export const Navbar = (props) => {
    return (
        <div className="flex">
            <div>
                <Link href="/">
                    <a>
                        <Image
                            src={Images.Logo}
                            alt="Logo"
                            width={150}
                            height={35}
                        />
                    </a>
                </Link>
            </div>

            <div className="ml-auto pt-[3px]">
                <CircleIconButton onClick={props.onClick}>
                    <Menu size={20} />
                </CircleIconButton>
            </div>
        </div>
    );
};
