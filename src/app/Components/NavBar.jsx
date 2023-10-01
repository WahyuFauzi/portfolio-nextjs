'use client';

import Image from 'next/image';
import Logo from '../../../public/images/Logo2.png';
import React, { useState, useEffect } from 'react';

var menuClassName =
	'w-4/5 mx-auto text-center top-16 left-0 right-0 text-sm fixed font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hidden';

//TODO embed condtional rendering in navbar, dont use useEffect in this same file

export default function NavBar() {
	const [menuRenderCondition, setMenuRenderCondition] = useState(false);

	useEffect(() => {
		if (menuRenderCondition == true) {
			menuClassName =
				'w-4/5 mx-auto text-center top-16 left-0 right-0 text-sm fixed font-medium text-gray-900 bg-white border border-gray-200 rounded-lg lg:hidden md:block';
		} else if (menuRenderCondition == false) {
			menuClassName =
				'w-4/5 mx-auto text-center top-16 left-0 right-0 text-sm fixed font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hidden';
		}

		console.log(menuRenderCondition);
	}, [menuRenderCondition]);

	return (
		<nav className="sticky top-0 z-10 border-gray-200 bg-white dark:bg-gray-900">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<div className="w-1/2">
					<Image src={Logo} width={80} height={160} alt="logo" />
				</div>
				<div
					className="border rounded hover:bg-gray-500 lg:hidden hover:cursor-pointer"
					onClick={() => {
						setMenuRenderCondition(!menuRenderCondition);
					}}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-8 h-8 mx-auto"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
				</div>
				<ul class={menuClassName}>
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
				<div className="hidden w-1/2 lg:block lg:w-auto" id="navbar-default">
					<ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
						<li>
							<a
								href="#hero-section"
								className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
								aria-current="page"
							>
								Home
							</a>
						</li>
						<li>
							<a
								href="#about-section"
								className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
							>
								About
							</a>
						</li>
						<li>
							<a
								href="#experience-section"
								className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
							>
								Experience
							</a>
						</li>
						<li>
							<a
								href="#projects-section"
								className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
							>
								Projects
							</a>
						</li>
						<li>
							<a
								href="#contact-section"
								className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
							>
								Contact Me
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
