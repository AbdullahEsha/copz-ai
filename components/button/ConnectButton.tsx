import { TButtonProps } from '@/types'
import { FC } from 'react'

export const ConnectButton: FC<TButtonProps> = ({ className, ...props }) => {
  return (
    <button
      className={`flex gap-2 items-center hover:text-white text-gray-400 border border-gray-400 hover:border-white rounded-full py-2 px-4  ${className}`}
      {...props}
    />
  )
}
