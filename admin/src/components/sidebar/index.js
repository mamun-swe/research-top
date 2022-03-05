import React from 'react'
import { NavLink } from 'react-router-dom';
import { Images } from "../../utils/images"

export const Sidebar = ({ routes }) => {
    return (
        <div className="w-[260px] fixed top-0 left-0 h-full bg-white hidden lg:block">

            {/* Header */}
            <div className="p-5">
                <img
                    src={Images.Logo}
                    alt="Logo"
                    className="w-[80px] h-[35px] mx-auto"
                />
            </div>

            {/* Body */}
            <div className="p-4">
                {routes.map((item, i) => {
                    return (
                        item.inDrawer ?
                            <NavLink
                                to={item.path}
                                exact={item.exact}
                                key={i}
                                activeClassName="bg-orange-100"
                                className="px-3 py-[12px] mb-2 block text-[15px] text-orange-500 font-medium rounded-md hover:bg-orange-100 w-full text-left transition-all"
                            >
                                <div className="flex">
                                    <div>{item.icon}</div>
                                    <div className="ml-2">{item.title}</div>
                                </div>
                            </NavLink>
                            : null
                    )
                }
                )}
            </div>
        </div>
    );
};