import { FC } from 'react'
import { FacebookButton, JoinButton } from '../button'
import { IoDocumentTextOutline } from 'react-icons/io5'
import { AiOutlineFileImage } from 'react-icons/ai'
import { IoMdCopy } from 'react-icons/io'
import Image from 'next/image'
import Cookies from 'js-cookie'
import toast from 'react-hot-toast'

export const AIGenerate: FC = () => {
  //  postUpload with event handler
  const postUpload = async (e: any) => {
    e.preventDefault()
    // upload a post to facebook page with facebook graph api as accessTokens from cookies
    // const accessTokens = Cookies.get('accessTokens')
    // convert PAGE_ID to number
    const ACCESS_TOKEN = process.env.ACCESS_TOKEN as string
    const PAGE_ID = process.env.PAGE_ID

    if (!ACCESS_TOKEN) {
      toast.error('Please login to facebook')
      return
    }

    const heading = e.target.heading.value
    const text = e.target.text.value

    if (!heading || !text) {
      toast.error('Please fill all the fields')
      return
    }
    // fetch post request to facebook graph api
    const response = await fetch(
      `https://graph.facebook.com/${PAGE_ID}/feed?message=${heading}&access_token=${ACCESS_TOKEN}`,
      {
        method: 'POST',
      },
    )

    console.log('response', response)

    if (response.ok) {
      toast.success('Post uploaded to facebook.')
    } else {
      toast.error('Error uploading post to facebook!')
    }
  }

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
      <form onSubmit={postUpload}>
        <input
          type="text"
          className="text-5xl w-full mt-6 p-4 rounded-lg bg-gray-800 text-gray-400 focus:outline-none"
          placeholder="Write some heading here..."
          name="heading"
        />
        <textarea
          className="w-full h-40 mt-6 p-4 rounded-lg bg-gray-800 text-gray-400 focus:outline-none"
          placeholder="Write some text here..."
          name="text"
        />
        <Image
          src="/image/brain-image.jpeg"
          alt="Ai Generated Image"
          height={1200}
          width={2000}
          className="rounded-lg mt-6 w-full h-auto object-cover"
        />
        <div className="flex justify-end">
          <FacebookButton name="submit" type="submit">
            <IoDocumentTextOutline size={20} />
            Upload to Facebook
          </FacebookButton>
        </div>
      </form>
    </div>
  )
}
