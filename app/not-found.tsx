import Link from 'next/link';

export default function NotFound() {
	return (
		<div className="grid place-items-center gap-8 py-20">
			<h2 className="text-4xl">Not Found</h2>
			<p>
				This page is in development, visit back soon!
				<span className="text-red-600"> Error code: 404</span>
			</p>
			<Link className="rounded-md bg-blue-500 px-3 py-2 text-white" href="/">
				back to homepage
			</Link>
		</div>
	);
}
