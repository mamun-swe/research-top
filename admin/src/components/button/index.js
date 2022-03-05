
import React from 'react';

export const PrimaryButton = (props) => {
    return (
        <button
            onClick={props.onClick}
            disabled={props.disabled}
            className="px-5 py-[10px] rounded-lg transition-all text-white bg-purple-500 hover:bg-purple-800 text-[15px] font-medium disabled:bg-purple-300"
        >
            {props.children}
        </button>
    );
};

export const DangerButton = (props) => {
    return (
        <button
            onClick={props.onClick}
            disabled={props.disabled}
            className="px-5 py-[10px] rounded-lg transition-all text-red-400 bg-red-50 hover:bg-red-200 text-[15px] font-medium disabled:bg-red-100 disabled:text-red-300"
        >
            {props.children}
        </button>
    );
};

export const CircleButton = (props) => {
    return (
        <button className="p-2 rounded-full transition-all text-orange-400 bg-orange-50 hover:bg-orange-200">
            {props.children}
        </button>
    );
};