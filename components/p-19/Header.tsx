import React from 'react'
import Head from 'next/head'
import NavButton from './NavButton'
import { Bars3BottomRightIcon } from '@heroicons/react/24/solid'


const Header = () => {
    return (
        <div>
            <Head>
                <title> Lottry </title>
            </Head>
            <header className='grid grid-cols-2 md:grid-cols-5 justify-between items-center p-5'>
                <div className='flex items-center space-x-2'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzNsa_gox5n3NxKCTtVBPGNWMXpPhJs6T6GQ&usqp=CAU" alt="lottry" className='h-20 w-20 rounded-full' />
                    <div>
                        <p className='text-lg text-white font-bold '>REALITY DRAW</p>
                        <p className='truncate text-xs text-emerald-500 w-40'>User: qwduyewgdhjedhuiwegyud </p>
                    </div>
                </div>
                <div className='md:flex hidden items-center justify-center rounded md:col-span-3'>
                    <div className='bg-[#0A1F1C] p-4 space-x-2'>
                        <NavButton title={'Buy Tickets'} isActive />
                        <NavButton title={'Logout'} isActive={undefined} />
                    </div>
                </div>
                <div className='flex flex-col ml-auto items-center justify-center text-right'>
                    {/* <Bars3BottomRightIcon /> */}
                    <Bars3BottomRightIcon className='h-8 w-8 text-white cursor-pointer' />
                    <span className='md:hidden text-xs'>
                        <NavButton title={'Logout'} isActive={undefined} />
                    </span>
                </div>
            </header>
        </div>
    )
}

export default Header