import React from 'react'

const ChatForm = () => {
	return (
		<div className='w-full max-w-full'>
			<form className='w-full bg-white shadow-md rounded-lg px-4 pt-4 pb-2 mb-4'>
				<div className='mb-4'>
					<label
						className='block text-gray-700 text-sm font-bold mb-2'
						htmlFor='message'
					>
						Escribe un mensaje
					</label>
					<div className='flex flex-row justify-between w-full'>
						<input
							className='bg-gray-300 appearance-none border-2 border-gray-300 rounded w-full mr-4 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
							id='message'
							type='text'
							placeholder='Message'
						/>
						<button
							className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
							type='button'
						>
							Envíar
						</button>
					</div>
				</div>
			</form>
		</div>
	)
}

export default ChatForm
