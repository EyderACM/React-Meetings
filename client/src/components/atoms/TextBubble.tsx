import React, { ReactNode } from 'react'

export interface ITextBubble {
	author: String
	color: String
	children: ReactNode
	className: String
	date: String
	textColor: String
}

const TextBubble: React.FC<ITextBubble> = ({
	author,
	color,
	children,
	date,
	className,
	textColor,
}) => (
	<div className={`flex flex-col w-2/3 max-w-content ${className} `}>
		<p className='text-xs pl-2 px-2'>{author}</p>
		<div className={`${textColor} ${color} py-2 px-2 rounded-2xl`}>
			<p className='pr-4'>{children}</p>
			<p className='text-right text-xs'>{date}</p>
		</div>
	</div>
)

export default TextBubble
