import { TButtonProps } from '@/types'
import { FC } from 'react'

export const WorkspaceButton: FC<TButtonProps> = ({ className, ...props }) => {
  return (
    <button
      className={`border-dashed border-2 rounded-lg border-gray-500 w-full flex flex-col gap-1 items-center px-5 py-7 ${className}`}
      {...props}
    />
  )
}
