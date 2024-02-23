import { TButtonProps } from '@/types'
import { FC } from 'react'

export const JoinButton: FC<TButtonProps> = ({ className, ...props }) => {
  return (
    <button
      className={`flex gap-2 items-center hover:text-white text-gray-400 w-1/3 justify-center ${className}`}
      {...props}
    />
  )
}
