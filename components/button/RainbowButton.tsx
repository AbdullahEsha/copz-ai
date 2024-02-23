import { TButtonProps } from '@/types'
import { FC } from 'react'

export const RainbowButton: FC<TButtonProps> = ({ className, ...props }) => {
  return (
    <button
      className={`flex gap-2 items-center bg-[#241F38] rounded-full m-[2px] py-2 px-4 ${className}`}
      {...props}
    />
  )
}
