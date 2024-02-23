import { FC } from 'react'
import { JoinButton } from '../button'
import { IoDocumentTextOutline } from 'react-icons/io5'
import { AiOutlineFileImage } from 'react-icons/ai'
import { IoMdCopy } from 'react-icons/io'
import Image from 'next/image'

export const AIGenerate: FC = () => {
  return (
    <div className="p-10  w-full">
      <h3 className="text-3xl font-semibold">Ai generate</h3>
      <div className="my-6 py-4 rounded-lg w-full flex justify-between bg-gray-800 shadow-md">
        <JoinButton>
          <IoDocumentTextOutline size={20} />
          Article
        </JoinButton>
        <span className="text-gray-400">|</span>
        <JoinButton>
          <AiOutlineFileImage size={20} />
          Image
        </JoinButton>
        <span className="text-gray-400">|</span>
        <JoinButton>
          <IoMdCopy size={20} />
          Copy
        </JoinButton>
      </div>
      <h1 className="text-5xl font-semibold">The Potential of AI Power</h1>
      <p className="text-xsmall mt-3">
        We are on a mission to revolutionize the way businesses leverage
        artificial intelligence. With a team of dedicated experts and a
        commitment to innovation, we strive to make AI accessible
      </p>
      <Image
        src="/image/brain-image.jpeg"
        alt="Ai Generated Image"
        height={1200}
        width={2000}
        className="rounded-lg mt-6 w-full h-auto object-cover"
      />
    </div>
  )
}
