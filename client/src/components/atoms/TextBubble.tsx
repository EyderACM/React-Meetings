import React, { ReactNode } from 'react'

export interface ITextBubble {
	color: String
	children: ReactNode
	className: String
	date: String
	textColor: String
}

const TextBubble: React.FC<ITextBubble> = ({
	color,
	children,
	date,
	className,
	textColor,
}) => (
	<div
		className={`flex flex-col w-2/3 max-w-content py-2 px-2 rounded-2xl mb-2 ${color} ${className} ${textColor}`}
	>
		<p className='pr-8'>{children}</p>
		<p className='text-right text-xs'>{date}</p>
	</div>
)

export default TextBubble
