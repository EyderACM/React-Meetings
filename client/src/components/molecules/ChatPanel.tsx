import React from 'react'
import { If, Then, Else } from 'react-if'

import IMessage from 'interfaces/IMessage'
import TextBubble from '../atoms/TextBubble'
import colors from 'shared/colors'

export interface IChatPanel {
	messages: IMessage[]
	sessionUsername: String
}

const ChatPanel: React.FC<IChatPanel> = ({ messages, sessionUsername }) => {
	return (
		<div
			className={`w-full max-w-full h-panel ${colors.WHITE} shadow-md rounded-lg mb-4 overflow-y-scroll`}
		>
			<div className='flex flex-col px-4 py-4'>
				{messages.map(({ username, date, content }) => (
					<If condition={username === sessionUsername}>
						<Then>
							<TextBubble
								className='text-right ml-auto'
								color={colors.BG_INDIGO}
								date={date}
								textColor={colors.TEXT_WHITE}
							>
								{content}
							</TextBubble>
						</Then>
						<Else>
							<TextBubble
								className='text-left'
								color={colors.BUBBLE_GRAY}
								date={date}
								textColor={colors.TEXT_GRAY}
							>
								{content}
							</TextBubble>
						</Else>
					</If>
				))}
			</div>
		</div>
	)
}

export default ChatPanel
