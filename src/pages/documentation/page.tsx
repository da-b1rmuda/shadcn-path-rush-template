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
			headerLinks={[
				{ type: "github", href: "https://github.com/your-org/dock-rush" },
			]}
			footer={{
				bottomText: "© 2026 Rush",
			}}
			useBuilder
		/>
	);
}

export default Dock;
