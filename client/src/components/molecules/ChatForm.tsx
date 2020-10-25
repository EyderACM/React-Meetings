import React from 'react'
import colors from 'shared/colors'

const ChatForm = () => {
	return (
		<div className='w-full max-w-full'>
			<form
				className={`w-full ${colors.WHITE} shadow-md rounded-lg px-4 pt-4 pb-2 mb-4`}
			>
				<div className='mb-4'>
					<label
						className={`block ${colors.TEXT_GRAY} text-sm font-bold mb-2`}
						htmlFor='message'
					>
						Escribe un mensaje
					</label>
					<div className='flex flex-row justify-between w-full'>
						<input
							className={`${colors.INPUT_GRAY} appearance-none border-2 ${colors.INPUT_GRAY} rounded w-full mr-4 py-2 px-4 ${colors.TEXT_GRAY} leading-tight focus:outline-none ${colors.WHITE} focus:border-purple-500`}
							id='message'
							type='text'
							placeholder='Message'
						/>
						<button
							className={`${colors.INDIGO} hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
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
