import React from 'react'

import ChatForm from 'components/molecules/ChatForm'
import ChatPanel from 'components/molecules/ChatPanel'
import VideoModule from 'components/molecules/VideoModule'
import IMessage from 'interfaces/IMessage'

import { useImmer } from 'use-immer'

const VideoSession = () => {
  const [messages, setMessages] = useImmer<IMessage[]>([
    {
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel enim, atque sit numquam explicabo eos, quos sint nobis doloribus dolorum beatae, iste hic assumenda.',
      username: 'Eyder',
      date: '3:12pm',
    },
    {
      content: 'Qué pedo',
      username: 'Juanito',
      date: '3:13pm',
    },
  ])

  const handleFormSubmit = (event: any) => {
    event.preventDefault()
    const myMessageContent = event.target[0].value
    const currentTime = new Date()
    const message = {
      content: myMessageContent,
      username: 'Eyder',
      date: `${currentTime.getHours()}:${currentTime.getMinutes()}`,
    }
    setMessages((draft) => {
      draft.push(message)
    })
    event.target[0].value = ''
  }

  return (
    <div className='py-8 bg-indigo-600 min-h-screen'>
      <div className='flex flex-col items-center'>
        <div className='text-center'>
          <h1 className='font-bold text-5xl text-white'>Share it</h1>
          <p className='font-normal text-medium text-white'>
            Welcome to your video sharing app
          </p>
        </div>
        <div className='flex'>
          <div className='flex flex-col items-start justify-top w-2/6 py-4'>
            <ChatPanel messages={messages} sessionUsername='Eyder' />
            <ChatForm onFormSubmit={handleFormSubmit} />
          </div>
          <div className='flex w-4/6 p-4'>
            <VideoModule />
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoSession
