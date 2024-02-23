'use client'

import {
  ConnectButton,
  RainbowButton,
  SideBarButton,
  WorkspaceButton,
} from '@/components/button'
import { AIGenerate } from '@/components/middle'
import Image from 'next/image'
import { FC, useState } from 'react'
import { PiCircleHalfTiltLight, PiHouse } from 'react-icons/pi'
import { BsStars } from 'react-icons/bs'
import {
  HiOutlineChevronDown,
  HiOutlineDevicePhoneMobile,
  HiOutlineDocumentText,
  HiOutlineStar,
} from 'react-icons/hi2'
import { IoCalendarOutline, IoCheckmarkSharp } from 'react-icons/io5'
import { SlSettings } from 'react-icons/sl'
import { RxDoubleArrowRight } from 'react-icons/rx'

const Home: FC = () => {
  const [middle, setMiddle] = useState('ai-generate')

  return (
    <div className="container mx-auto my-28">
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
            <SideBarButton onClick={() => setMiddle('dashboard')}>
              <PiHouse size={20} />
              Dashboard
            </SideBarButton>
            <SideBarButton onClick={() => setMiddle('ai-generate')}>
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
        {middle === 'ai-generate' && <AIGenerate />}
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
