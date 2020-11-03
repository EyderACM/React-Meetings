import React from 'react'
import colors from 'shared/colors'

import { Form } from '../atoms/shared/Form'
import { InputLabel } from '../atoms/shared/InputLabel'
import { TextInputWrapper } from '../atoms/ChatForm/TextInputWrapper'

export interface IChatForm {
	onFormSubmit: any
}

const ChatForm: React.FC<IChatForm> = ({ onFormSubmit }) => {
	return (
		<div className='w-full max-w-full'>
			<Form onSubmit={onFormSubmit}>
				<div className='mb-4'>
					<InputLabel htmlFor='message'>Escribe un mensaje</InputLabel>
					<TextInputWrapper>
						<input
							className={`${colors.INPUT_GRAY} appearance-none border-2 ${colors.INPUT_GRAY} rounded w-full mr-4 py-2 px-4 ${colors.TEXT_GRAY} leading-tight focus:outline-none ${colors.WHITE} focus:border-purple-500`}
							id='message'
							type='text'
							placeholder='Message'
						/>
						<button
							className={`${colors.INDIGO} hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
							type='submit'
						>
							Envíar
						</button>
					</TextInputWrapper>
				</div>
			</Form>
		</div>
	)
}

export default ChatForm
