'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

function Navbar() {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<nav className="border-b">
			<div className="container flex h-16 items-center justify-between md:h-20">
				<div>
					<Image
						src="zet_logo.svg"
						alt="Zet logo image"
						width={90}
						height={40}
					/>
				</div>
				<button
					className="md:hidden"
					type="button"
					onClick={() => setIsOpen(!isOpen)}
				>
					<Image
						src={isOpen ? 'images/hamclose.svg' : 'images/hamburgur.svg'}
						alt="menu toggle icon"
						width={30}
						height={30}
					/>
				</button>
				<div
					className={`${
						isOpen ? 'flex' : 'hidden md:flex'
					} absolute inset-0 top-16 z-20 flex-col items-center justify-center gap-16 border-t bg-white text-lg text-slate-600 md:static md:flex-row md:gap-8 md:border-none`}
				>
					<Link className={pathname === '/' ? 'text-blue-600' : ''} href="/">
						Home
					</Link>
					<Link
						className={pathname === '/about' ? 'text-blue-600' : ''}
						href="/about"
					>
						About Us
					</Link>
					<Link
						className={pathname === '/partner' ? 'text-blue-600' : ''}
						href="/partner"
					>
						Partner With Us
					</Link>
					<Link
						className={pathname === '/blog' ? 'text-blue-600' : ''}
						href="/blog"
					>
						Blog
					</Link>
					<Link
						className="rounded-md px-2 py-1 md:bg-blue-500 md:text-white"
						href="/download"
					>
						Download ZET
					</Link>
					<Link className="md:hidden" href="/download/googleplay">
						<Image src="images/googleplay.svg" alt="" width="120" height={50} />
					</Link>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
