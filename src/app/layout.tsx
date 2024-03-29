import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AppProvider } from '@/contexts/SignatureContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Signature',
	description: 'Generated by Signature',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<AppProvider>
			<html lang="en">
				<body
					className={`${inter.className} bg-gradient-to-r from-red-50 to-cyan-50`}
				>
					{children}
				</body>
			</html>
		</AppProvider>
	);
}
