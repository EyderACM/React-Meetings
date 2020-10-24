import React from 'react'

import ChatForm from 'components/molecules/ChatForm'
import ChatPanel from 'components/molecules/ChatPanel'
import IMessage from 'interfaces/IMessage'

const VideoSession = () => {
	const messages = [
		{
			content: 'Hola',
			username: 'Eyder',
			date: '3:12pm',
		},
		{
			content: 'Qué pedo',
			username: 'Juanito',
			date: '3:13pm',
		},
	] as IMessage[]

	return (
		<div className='py-8 bg-indigo-600 h-screen'>
			<div className='flex flex-col items-center'>
				<div className='text-center'>
					<h1 className='font-bold text-5xl text-white'>Share it</h1>
					<p className='font-normal text-medium text-white'>
						Welcome to your video sharing app
					</p>
				</div>
				<div className='flex flex-col justify-center w-2/6 py-4'>
					<ChatPanel messages={messages} username='Eyder' />
					<ChatForm />
				</div>
			</div>
		</div>
	)
}

export default VideoSession
