import { JoinButton, SideBarButton, WorkspaceButton } from '@/components/button'
import Image from 'next/image'
import { FC } from 'react'
import { PiCircleHalfTiltLight, PiHouse } from 'react-icons/pi'
import { BsStars } from 'react-icons/bs'
import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2'
import { IoCalendarOutline, IoDocumentTextOutline } from 'react-icons/io5'
import { SlSettings } from 'react-icons/sl'
import { IoMdCopy } from 'react-icons/io'
import { AiOutlineFileImage } from 'react-icons/ai'

const Home: FC = () => {
  return (
    <div className="container mx-auto flex items-center my-28">
      <div className="rounded-2xl border border-gray-400 w-full flex justify-between">
        <div className="w-96 border-r border-gray-400 px-6 py-8 flex flex-col">
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
          <div className="my-6 py-4 rounded-lg w-full flex justify-between bg-gray-800 ">
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
        <div className="w-96 border-l border-gray-400 px-6 py-8 flex flex-col">
          3rd
        </div>
      </div>
    </div>
  )
}

export default Home
