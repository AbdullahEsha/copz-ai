'use client'

import {
  ConnectButton,
  JoinButton,
  RainbowButton,
  SideBarButton,
  WorkspaceButton,
} from '@/components/button'
import Image from 'next/image'
import { FC, useState } from 'react'
import FacebookLogin from 'react-facebook-login'
import { PiCircleHalfTiltLight, PiHouse } from 'react-icons/pi'
import { BsStars } from 'react-icons/bs'
import {
  HiOutlineChevronDown,
  HiOutlineDevicePhoneMobile,
  HiOutlineDocumentText,
  HiOutlineStar,
} from 'react-icons/hi2'
import {
  IoCalendarOutline,
  IoCheckmarkSharp,
  IoDocumentTextOutline,
} from 'react-icons/io5'
import { SlSettings } from 'react-icons/sl'
import { IoMdCopy } from 'react-icons/io'
import { AiOutlineFileImage } from 'react-icons/ai'
import { RxDoubleArrowRight } from 'react-icons/rx'

const Home: FC = () => {
  const [accessToken, setAccessToken] = useState('')
  const componentClicked = (data: any) => {
    console.log('data', data)
  }

  const responseFacebook = (response: any) => {
    // console.log(response.accessToken);
    setAccessToken(response.accessToken)
  }

  return (
    <div className="container mx-auto my-28">
      <p>AccessToken: {accessToken || ''}</p>
      <FacebookLogin
        appId={process.env.APP_ID || ''}
        autoLoad={true}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
      />

      <div className="rounded-2xl border border-gray-400 w-full flex justify-between">
        <div className="w-[35rem] border-r border-gray-400 px-6 py-8 flex flex-col">
          <div className="max-h-12 flex gap-3 items-center">
            <Image
              src="/image/copz-ai.png"
              alt="Copz Ai"
              width={43}
              height={43}
              className="h-10 w-auto"
            />
            {/* text gradient of three colors  background: linear-gradient(90deg, #FFCC70 11.68%, #C850C0 50.19%, #4158D0 88.71%); */}
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-500">
              Copz AI
            </h1>
          </div>
          <div className="my-6">
            <SideBarButton>
              <PiHouse size={20} />
              Dashboard
            </SideBarButton>
            <SideBarButton>
              <BsStars size={20} /> AI Generate
            </SideBarButton>
            <SideBarButton>
              <HiOutlineDevicePhoneMobile size={20} />
              Posts
            </SideBarButton>
            <SideBarButton>
              <IoCalendarOutline size={20} />
              Schedules
            </SideBarButton>
            <SideBarButton>
              <PiCircleHalfTiltLight size={20} />
              Analytics
            </SideBarButton>
            <SideBarButton>
              <SlSettings />
              Settings
            </SideBarButton>
          </div>
          <div className="mt-auto">
            <WorkspaceButton>
              <Image src="/image/add.png" alt="Add" height={43} width={43} />
              <h3 className="heading-four font-bold">Create new workspace</h3>
              <p className="text-xs text-gray-400">Up to 5 workspaces</p>
            </WorkspaceButton>
          </div>
        </div>
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
        <div className="w-[35rem] border-l border-gray-400 px-6 py-8 flex flex-col gap-5">
          <div className="w-full flex justify-end">
            <ConnectButton>
              Hide assistant <RxDoubleArrowRight size={20} />
            </ConnectButton>
          </div>
          <div className="bg-gray-800 rounded-lg shadow-md p-3">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-400">Prompt</h3>
              <Image
                src="/image/star.png"
                alt="Icon"
                height={43}
                width={43}
                className="h-10 w-auto object-cover"
              />
            </div>
            <textarea
              className="w-full h-30 mt-6 focus:outline-none bg-transparent border-none text-white"
              placeholder="Write a text..."
            />
          </div>
          <div className="flex items-center justify-between border-b border-gray-100 py-3">
            <div className="flex items-center gap-2 text-gray-400">
              <HiOutlineChevronDown size={20} />
              <p>Domain</p>
            </div>
            <div className="bg-gradient-to-r from-blue-500  via-pink-500 to-yellow-400 rounded-full flex items-center">
              <RainbowButton>
                <IoCheckmarkSharp size={20} /> Creative
              </RainbowButton>
            </div>
          </div>
          <div className="flex items-center justify-between border-b border-gray-100 py-3">
            <div className="flex items-center gap-2 text-gray-400">
              <HiOutlineChevronDown size={20} />
              <p>Intent</p>
            </div>
            <div className="bg-gradient-to-r from-blue-500  via-pink-500 to-yellow-400 rounded-full flex items-center">
              <RainbowButton>
                <IoCheckmarkSharp size={20} /> Tell a story
              </RainbowButton>
            </div>
          </div>
          <div className="flex items-center justify-between border-b border-gray-100 py-3">
            <div className="flex items-center gap-2 text-gray-400">
              <HiOutlineChevronDown size={20} />
              <p>Formality</p>
            </div>
            <div className="bg-gradient-to-r from-blue-500  via-pink-500 to-yellow-400 rounded-full flex items-center">
              <RainbowButton>
                <IoCheckmarkSharp size={20} /> Neutral
              </RainbowButton>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-400">Suggested for you</h3>
          <div className="h-10 background-dot-image flex justify-between px-4">
            <div className="flex gap-2 rotate-180">
              <div className="bg-[#BDB7FF] h-30 w-3 rounded-b-full" />
              <div className="bg-[#4B34AB] h-16 w-3 rounded-b-full" />
            </div>
            <div className="flex gap-2 rotate-180">
              <div className="bg-[#BDB7FF] h-20 w-3 rounded-b-full" />
              <div className="bg-[#4B34AB] h-16 w-3 rounded-b-full" />
            </div>
            <div className="flex gap-2 rotate-180">
              <div className="bg-[#BDB7FF] h-28 w-3 rounded-b-full" />
              <div className="bg-[#4B34AB] h-16 w-3 rounded-b-full" />
            </div>
            <div className="flex gap-2 rotate-180">
              <div className="bg-[#BDB7FF] h-30 w-3 rounded-b-full" />
              <div className="bg-[#4B34AB] h-16 w-3 rounded-b-full" />
            </div>
          </div>
          <div className="flex gap-2 items-center py-2 px-4 bg-gray-800 rounded-lg shadow-md">
            <HiOutlineDocumentText size={20} />
            <p className="text-xl">Add data chart</p>
          </div>
          <div className="flex gap-2 items-center py-2 px-4 bg-gray-800 rounded-lg shadow-md">
            <HiOutlineStar size={20} />
            <p className="text-xl">Add data chart</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
