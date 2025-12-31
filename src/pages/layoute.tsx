interface LayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
	return (
		<div>
			<header>
				<nav>
					<a href="/">Главная</a>
					<a href="/about">О нас</a>
				</nav>
			</header>
			<main>{children}</main>
			<footer>
				<p>&copy; 2025 Мой сайт</p>
			</footer>
		</div>
	);
}
