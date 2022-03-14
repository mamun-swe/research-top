
/* Required props */
// show
// onClick
// hidden

import Link from "next/link"
import { useRouter } from "next/router"
import { Grid, BookOpen, Power } from "react-feather"

export const Drawer = (props) => {
    const router = useRouter()

    const isActive = path => {
        if (router.pathname === path) return true
        return false
    }

    const handleLogout = () => {
        localStorage.clear()
        router.push("/")
    }

    return (
        <div className={props.hidden ? `${props.hidden}:hidden` : ""}>
            <div
                className={
                    props.show ?
                        "fixed top-0 visible left-0 w-full h-[100vh] z-[90] transition-all duration-300 bg-black opacity-75" :
                        "fixed top-0 invisible left-0 w-full h-[100vh] z-[90] transition-all duration-300 bg-black opacity-0"
                }
                onClick={props.onClick}
            />

            <div className={
                props.show ?
                    "fixed top-0 left-0 w-[300px] h-[100vh] shadow-lg bg-white z-[100] transition-all duration-300" :
                    "fixed top-0 left-[-300px] w-[300px] h-[100vh] shadow-lg bg-white z-[100] transition-all duration-300"
            }
            >

                <div className="p-3">
                    <Link href="/dashboard">
                        <a>
                            <button
                                type="button"
                                className={isActive("/dashboard") ?
                                    "w-full px-3 py-[10px] rounded-[4px] transition-all text-left text-white bg-indigo-400" :
                                    "w-full px-3 py-[10px] rounded-[4px] transition-all text-left text-black"
                                }
                            >
                                <div className="flex">
                                    <div className="mr-2"><Grid size={18} /></div>
                                    <div><p className="text-sm font-medium">Dashboard</p></div>
                                </div>
                            </button>
                        </a>
                    </Link>

                    <Link href="/dashboard/publication">
                        <a>
                            <button
                                type="button"
                                className={isActive("/dashboard/publication") ?
                                    "w-full px-3 py-[10px] rounded-[4px] transition-all text-left text-white bg-indigo-400" :
                                    "w-full px-3 py-[10px] rounded-[4px] transition-all text-left text-black"
                                }
                            >
                                <div className="flex">
                                    <div className="mr-2"><BookOpen size={18} /></div>
                                    <div><p className="text-sm font-medium">Publication</p></div>
                                </div>
                            </button>
                        </a>
                    </Link>

                    <button
                        type="button"
                        className="w-full px-3 py-[10px] rounded-[4px] transition-all text-left text-black"
                        onClick={handleLogout}
                    >
                        <div className="flex">
                            <div className="mr-2"><Power size={18} /></div>
                            <div><p className="text-sm font-medium">Logout</p></div>
                        </div>
                    </button>

                </div>
            </div>
        </div>

    );
};
