import { TButtonProps } from '@/types'
import { FC } from 'react'

export const SideBarButton: FC<TButtonProps> = ({ className, ...props }) => {
  return (
    <button
      className={`hover:bg-gradient-to-r from-blue-500  via-pink-500 to-yellow-400 w-full hover:rounded-xl p-3 text-start transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none flex gap-2 items-center hover:text-white text-gray-400 ${className}`}
      {...props}
    />
  )
}
