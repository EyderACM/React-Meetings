import React from 'react'

import ChatForm from 'components/molecules/ChatForm'

const VideoSession = () => {
	return (
		<div className='py-16 bg-indigo-600 h-screen'>
			<div className='flex flex-col items-center'>
				<div className='text-center'>
					<h1 className='font-bold text-6xl text-white'>Share it</h1>
					<p className='font-normal text-xl text-white'>
						Welcome to your video sharing app
					</p>
				</div>
				<div className='flex justify-center w-2/5 py-4'>
					<ChatForm />
				</div>
			</div>
		</div>
	)
}

export default VideoSession
