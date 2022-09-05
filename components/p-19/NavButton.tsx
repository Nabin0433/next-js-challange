import React from 'react'


interface Props {
    title: string,
    isActive?: boolean,
}

const NavButton = ({ title, isActive }: Props) => {
    return (
        <button className={`${isActive && 'bg-[#036756]'} text-white px-2 py-2 rounded font-bold hover:bg-[#036756]`}>
            {title}
        </button>
    )
}

export default NavButton