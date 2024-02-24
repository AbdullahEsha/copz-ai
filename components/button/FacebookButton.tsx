import { TButtonProps } from '@/types'
import { FC } from 'react'

export const FacebookButton: FC<TButtonProps> = ({ className, ...props }) => {
  return (
    <button
      className={`flex gap-2 items-center hover:text-white text-blue-400 border border-blue-400 hover:border-white rounded-full py-2 px-4 mt-5 ${className}`}
      {...props}
    />
  )
}
