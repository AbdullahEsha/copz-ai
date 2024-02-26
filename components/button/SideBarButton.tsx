import { RootState } from '@/redux/store'
import { TButtonProps } from '@/types'
import { FC, useState } from 'react'
import { useSelector } from 'react-redux'

// const pageNameIcon = [
//   {
//     icon: 'PiHouse',
//     name: 'Dashboard',
//   },
//   {
//     icon: 'BsStars',
//     name: 'AI Generate',
//   },
//   {
//     icon: 'HiOutlineDevicePhoneMobile',
//     name: 'Posts',
//   },
//   {
//     icon: 'IoCalendarOutline',
//     name: 'Schedules',
//   },
//   {
//     icon: 'PiCircleHalfTiltLight',
//     name: 'Analytics',
//   },
//   {
//     icon: 'SlSettings',
//     name: 'Settings',
//   },
// ]

export const SideBarButton: FC<TButtonProps> = ({ className, ...props }) => {
  const { middlePage } = useSelector((state: RootState) => state.middlePage)

  console.log('middlePage: ', middlePage)

  return (
    <button
      className={`hover:bg-gradient-to-r from-blue-500  via-pink-500 to-yellow-400 w-full hover:rounded-xl p-3 text-start transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none flex gap-2 items-center hover:text-white text-gray-400 ${className}`}
      {...props}
    />
  )
}
