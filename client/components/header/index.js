
import Image from "next/image"
import { Text } from "../text"
import { useWindowSize } from "../window"
import { Images } from "../../utils/images"

export const Header = () => {
    const window = useWindowSize()

    const responsiveImage = () => {
        let width = 250
        let height = 210

        if (window.width >= 640) {
            width = 320
            height = 270
        }

        if (window.width >= 768) {
            width = 380
            height = 320
        }

        if (window.width >= 1024) {
            width = 440
            height = 370
        }

        if (window.width >= 1536) {
            width = 550
            height = 470
        }

        return { width, height }
    }

    return (
        <div className="py-[30px] 2xl:py-[60px] mt-[74px] relative">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

                    {/* Text container */}
                    <div className="px-3 lg:px-0 py-5 text-center lg:text-left mb-5 lg:mb-0">
                        <Text
                            className="2xl:mt-16 font-extrabold text-transparent text-5xl md:text-6xl lg:text-8xl bg-clip-text bg-gradient-to-r from-sky-500 to-sky-100"
                        >Connect million researcher.</Text>
                    </div>

                    {/* Image container */}
                    <div className="text-center">
                        <Image
                            src={Images.Time}
                            alt="Time picture"
                            width={responsiveImage().width}
                            height={responsiveImage().height}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
