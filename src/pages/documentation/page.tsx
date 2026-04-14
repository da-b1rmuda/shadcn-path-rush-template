import { Documentation } from "@da_b1rmuda/dock-rush/client";

const Logo = () => {
	return <img src="/logo.png" alt="logo" />;
};

function Dock() {
	return (
		<Documentation
			title="RUSH"
			folderPath="./public/docs"
			logo=<Logo />
			useToggleTheme
			useSearch
			useToc
			useBreadcrumbs
			usePrevNext
			showVersion={false}
			headerLinks={[
				{ type: "gitea", href: "https://git.web2bizz.ru/da_b1rmuda" },
				{ type: "telegram", href: "https://t.me/fortochka9" },
			]}
			footer={{
				bottomText: "© Все права защищены - Rush Framework, 2026",
			}}
		/>
	);
}

export default Dock;
