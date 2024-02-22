import { SideBarButton, WorkspaceButton } from '@/components/button'
import Image from 'next/image'
import { FC } from 'react'
import { PiCircleHalfTiltLight, PiHouse } from 'react-icons/pi'
import { BsStars } from 'react-icons/bs'
import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2'
import { IoCalendarOutline } from 'react-icons/io5'
import { SlSettings } from 'react-icons/sl'

const Home: FC = () => {
  return (
    <div className="container mx-auto flex h-screen items-center">
      <div className="rounded-2xl border border-gray-400 w-full flex justify-between">
        <div className="w-72 border-r border-gray-400 px-6 py-8 flex flex-col">
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
              Copz Ai
            </h1>
          </div>
          <div className="mt-6">
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
              <h3 className="heading-tertiary font-bold">
                Create new workspace
              </h3>
              <p className="text-xs text-gray-400">Up to 5 workspaces</p>
            </WorkspaceButton>
          </div>
        </div>
        <div className="h-screen bg-slate-300">2nd</div>
        <div className="w-72 border-l border-gray-400">3rd</div>
      </div>
    </div>
  )
}

export default Home
