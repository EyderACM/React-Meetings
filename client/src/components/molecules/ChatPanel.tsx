import React, { FC } from 'react'
import IMessage from 'interfaces/IMessage'

import { If, Then, Else } from 'react-if'

export interface IChatPanel {
	messages: IMessage[]
	username: String
}

const ChatPanel = ({ messages, username }: IChatPanel) => {
	return (
		<div className='w-full max-w-full bg-white shadow-md rounded-lg mb-4'>
			<div className='w-full px-4 py-4'>
				{messages.map((message) => (
					<If condition={message.username === username}>
						<Then>
							<h3 className='text-left'>{message.content}</h3>
						</Then>
						<Else>
							<h3 className='text-right'>{message.content}</h3>
						</Else>
					</If>
				))}
			</div>
		</div>
	)
}

export default ChatPanel
