'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Navbar() {
	const pathname = usePathname();
	return (
		<nav className="border-b">
			<div className="container flex h-20 items-center justify-between">
				<div>
					<Image
						src="zet_logo.svg"
						alt="Zet logo image"
						width={90}
						height={40}
					/>
				</div>
				<div className="flex items-center gap-8 text-lg text-slate-600">
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
						className="rounded-md bg-blue-500 px-2 pt-1 text-white"
						href="/download"
					>
						Download ZET
					</Link>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
