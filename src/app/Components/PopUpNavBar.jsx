import React, { useState } from 'react';

export default function PopUpNavbar({ menuRenderCondition }) {
	return (
		<ul
			className={`w-4/5 mx-auto text-center top-16 left-0 right-0 text-sm fixed font-medium text-gray-900 bg-white border border-gray-200 rounded-lg ${
				menuRenderCondition ? 'lg:hidden md:block' : 'hidden'
			}`}
		>
			<li
				className="w-full"
				onClick={() => {
					setMenuRenderCondition(!menuRenderCondition);
				}}
			>
				<a href="#hero-section">
					<div className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg hover:text-white hover:bg-gray-500 hover:cursor-pointer">
						Home
					</div>
				</a>
			</li>
			<li
				className="w-full"
				onClick={() => {
					setMenuRenderCondition(!menuRenderCondition);
				}}
			>
				<a href="#about-section">
					<div className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg hover:text-white hover:bg-gray-500 hover:cursor-pointer">
						About
					</div>
				</a>
			</li>
			<li
				className="w-full"
				onClick={() => {
					setMenuRenderCondition(!menuRenderCondition);
				}}
			>
				<a href="#experience-section">
					<div className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg hover:text-white hover:bg-gray-500 hover:cursor-pointer">
						Experience
					</div>
				</a>
			</li>
			<li
				className="w-full"
				onClick={() => {
					setMenuRenderCondition(!menuRenderCondition);
				}}
			>
				<a href="#projects-section">
					<div className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg hover:text-white hover:bg-gray-500 hover:cursor-pointer">
						Projects
					</div>
				</a>
			</li>
			<li
				className="w-full"
				onClick={() => {
					setMenuRenderCondition(!menuRenderCondition);
				}}
			>
				<a href="#contact-section">
					<div className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg hover:text-white hover:bg-gray-500 hover:cursor-pointer">
						Contact Me
					</div>
				</a>
			</li>
		</ul>
	);
}
