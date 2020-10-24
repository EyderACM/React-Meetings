import React from 'react'

const ChatForm = () => {
	return (
		<div className='w-full max-w-full'>
			<form className='w-full bg-white shadow-md rounded px-4 pt-4 pb-2 mb-4'>
				<div className='mb-4'>
					<label
						className='block text-gray-700 text-sm font-bold mb-2'
						htmlFor='username'
					>
						Escribe un mensaje
					</label>
					<div className='flex flex-row justify-between w-full'>
						<input
							className='shadow appearance-none border rounded w-full py-2 pl-3 mr-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							id='username'
							type='text'
							placeholder='Username'
						/>
						<button
							className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
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
