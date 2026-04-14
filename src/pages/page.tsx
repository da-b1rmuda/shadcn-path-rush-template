import { Blocks, Layers, Route, Sparkles, Terminal } from "lucide-react";

type PackageStatus = "stable" | "beta" | "in design" | "planned" | "research";

type PackageInfo = {
	name: string;
	tag: string;
	status: PackageStatus;
	version: string;
	description: string;
	update: string;
	docs: string;
	repo: string;
	color: string;
	featured?: boolean;
};

const statusStyles: Record<PackageStatus, string> = {
	stable: "border-emerald-400/20 bg-emerald-500/10 text-emerald-100",
	beta: "border-sky-400/20 bg-sky-500/10 text-sky-100",
	planned: "bg-sky-500/10 text-sky-300 border-sky-500/20",
	"in design": "border-fuchsia-400/20 bg-fuchsia-500/10 text-fuchsia-100",
	research: "bg-violet-500/10 text-violet-300 border-violet-500/20",
};

const packages = [
	{
		name: "path-rush",
		version: "0.8.0",
		status: "stable",
		update: "Nested zones and multi-root routing are in active refinement.",
		description:
			"File-based routing for Vite-first apps with a clean DX and scalable route composition.",
		docs: "#",
		repo: "#",
		color: "from-orange-500 to-rose-500",
		tag: "Routing",
	},
	{
		name: "image-rush",
		version: "0.6.2",
		status: "stable",
		update:
			"Cache strategy improvements and stronger responsive image presets.",
		description:
			"Image optimization, caching, and delivery primitives for modern frontend apps.",
		docs: "#",
		repo: "#",
		color: "from-sky-500 to-cyan-400",
		tag: "Media",
	},
	{
		name: "pwa-rush",
		version: "0.5.4",
		status: "stable",
		update:
			"Manifest generation and offline behavior presets continue to improve.",
		description:
			"Lightweight PWA integration for installability, caching, and offline-ready UX.",
		docs: "#",
		repo: "#",
		color: "from-violet-500 to-fuchsia-500",
		tag: "PWA",
	},
	{
		name: "dock-rush",
		version: "0.4.9",
		status: "stable",
		update:
			"Markdown-driven docs generation now supports cleaner navigation patterns.",
		description:
			"Documentation generation from Markdown with a fast setup and predictable content flow.",
		docs: "#",
		repo: "#",
		color: "from-emerald-500 to-lime-400",
		tag: "Docs",
	},
	{
		name: "module-rush",
		version: "0.1.0-alpha",
		status: "in design",
		update:
			"Feature-based module generation, public API boundaries, and Path-rush integration are being designed.",
		description:
			"A modular architecture layer for scalable apps with generators, structure, and dependency boundaries.",
		docs: "#",
		repo: "#",
		color: "from-amber-500 to-yellow-400",
		tag: "Architecture",
		featured: true,
	},
	{
		name: "data-rush",
		version: "0.1.0-alpha",
		status: "planned",
		update:
			"Core ideas focus on server state, local state, persistence, and optimistic flows.",
		description:
			"Unified data layer for state, cache, persistence, and backend sync without heavy boilerplate.",
		docs: "#",
		repo: "#",
		color: "from-blue-600 to-indigo-500",
		tag: "Data",
	},
	{
		name: "api-rush",
		version: "0.1.0-alpha",
		status: "planned",
		update:
			"Client generation and backend contract integration are under exploration.",
		description:
			"Typed API integration and generation layer designed to work tightly with the Rush ecosystem.",
		docs: "#",
		repo: "#",
		color: "from-cyan-500 to-blue-500",
		tag: "API",
	},
	{
		name: "config-rush",
		version: "0.1.0-alpha",
		status: "planned",
		update:
			"Unified config loading, schema validation, and client/server separation are the current focus.",
		description:
			"A single config system for env, build-time values, runtime config, and typed access.",
		docs: "#",
		repo: "#",
		color: "from-pink-500 to-rose-500",
		tag: "Config",
	},
	{
		name: "auth-rush",
		version: "0.1.0-alpha",
		status: "planned",
		update: "Session orchestration and guard-oriented flows are being scoped.",
		description:
			"Authentication primitives built to fit cleanly into routing, data, and app-level state.",
		docs: "#",
		repo: "#",
		color: "from-slate-600 to-slate-400",
		tag: "Auth",
	},
	{
		name: "form-rush",
		version: "0.1.0-alpha",
		status: "planned",
		update:
			"Schema-driven forms and deep Data-rush integration are part of the initial concept.",
		description:
			"Declarative forms with validation, submission flow, and integrated async behavior.",
		docs: "#",
		repo: "#",
		color: "from-purple-600 to-violet-500",
		tag: "Forms",
	},
	{
		name: "app-rush",
		version: "0.1.0-alpha",
		status: "planned",
		update:
			"Project generation and app composition patterns are still being mapped out.",
		description:
			"App scaffolding and composition tooling for assembling Rush-powered products faster.",
		docs: "#",
		repo: "#",
		color: "from-red-500 to-orange-500",
		tag: "App",
	},
	{
		name: "sync-rush",
		version: "0.1.0-alpha",
		status: "research",
		update:
			"Real-time sync, offline queueing, and conflict resolution remain long-term R&D topics.",
		description:
			"A future-facing sync layer for real-time data, offline-first behavior, and multi-client consistency.",
		docs: "#",
		repo: "#",
		color: "from-indigo-500 to-purple-600",
		tag: "Sync",
	},
] satisfies PackageInfo[];

const heroFeatures = [
	{
		title: "Routing that scales",
		description: "Nested zones, multi-root apps, and predictable composition.",
		icon: Route,
		accent: "from-orange-500/25 to-rose-500/10",
	},
	{
		title: "Docs as a system",
		description:
			"Markdown-first docs with fast navigation and clean structure.",
		icon: Blocks,
		accent: "from-emerald-500/20 to-lime-400/10",
	},
	{
		title: "Modern foundation",
		description: "Vite-first, modular by default, focused on DX and speed.",
		icon: Sparkles,
		accent: "from-sky-500/20 to-cyan-400/10",
	},
] as const;

export default function RushLandingPage() {
	return (
		<div className="min-h-screen bg-[#070b14] text-white">
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute left-1/2 top-[-120px] h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-fuchsia-600/15 blur-3xl" />
				<div className="absolute right-[8%] top-[220px] h-[280px] w-[280px] rounded-full bg-cyan-500/10 blur-3xl" />
				<div className="absolute left-[5%] top-[520px] h-[260px] w-[260px] rounded-full bg-orange-500/10 blur-3xl" />
				<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_36%)]" />
			</div>

			<main className="relative mx-auto flex w-full max-w-7xl flex-col gap-20 px-6 py-8 md:px-10 lg:px-12">
				<header className="sticky top-4 z-20">
					<div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl shadow-2xl shadow-black/20">
						<div className="flex items-center gap-3">
							<div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/10 shadow-inner shadow-white/5">
								<img src="/logo.png" alt="logo" />
							</div>
							<div>
								<div className="text-sm font-semibold tracking-[0.1em] text-white/90">
									RUSH
								</div>
								<div className="text-xs text-white/50">Framework ecosystem</div>
							</div>
						</div>

						<nav className="hidden items-center gap-2 md:flex">
							<a
								href="#packages"
								className="rounded-xl px-3 py-2 text-sm text-white/70 transition hover:bg-white/5 hover:text-white"
							>
								Пакеты
							</a>
						</nav>

						<div className="flex items-center gap-2">
							<a
								href="/documentation"
								className="inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
							>
								Документация
							</a>
							<a
								href="#"
								className="inline-flex items-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-white/90"
							>
								Открыть Gitea
							</a>
						</div>
					</div>
				</header>

				<section className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] ">
					<div className="space-y-8">
						<div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium tracking-[0.22em] text-white/70 backdrop-blur">
							VITE-FIRST • MODULAR • DX-DRIVEN
						</div>

						<div className="space-y-5">
							<h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-white md:text-7xl">
								Быстро создавайте приложения с экосистемой RUSH, построенной
								вокруг чистой архитектуры.
							</h1>
							<p className="max-w-2xl text-lg leading-8 text-white/65 md:text-xl">
								Rush объединяет маршрутизацию, изображения, PWA, документацию,
								модули, данные, формы, конфигурацию и инструменты разработки в
								единую систему. Минимализм по умолчанию. Масштабируемость по
								задумке.
							</p>
						</div>

						<div className="flex flex-wrap items-center gap-3">
							<a
								href="/documentation"
								className="inline-flex items-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-white/10 transition hover:-translate-y-0.5 hover:bg-white/90"
							>
								Открыть документацию
							</a>
							<a
								href="#packages"
								className="inline-flex items-center rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
							>
								Изучить пакеты
							</a>
						</div>

						<div className="grid gap-4 sm:grid-cols-3">
							{[
								{
									label: "Реализовано",
									value: "4+",
									hint: "Маршрутизация, медиа, документация, PWA",
								},
								{
									label: "В планах",
									value: "8",
									hint: "Данные, формы, модули, авторизация",
								},
								{
									label: "Основная идея",
									value: "1",
									hint: "Единая платформа для разработчиков",
								},
							].map((stat) => (
								<div
									key={stat.label}
									className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
								>
									<div className="text-3xl font-semibold tracking-[-0.04em] text-white">
										{stat.value}
									</div>
									<div className="mt-2 text-sm font-medium text-white/80">
										{stat.label}
									</div>
									<div className="mt-1 text-sm leading-6 text-white/50">
										{stat.hint}
									</div>
								</div>
							))}
						</div>
					</div>

					<div className="relative">
						<div className="pointer-events-none absolute -inset-10 rounded-[3rem] bg-gradient-to-br from-fuchsia-500/10 via-transparent to-cyan-500/10 blur-2xl" />
						<div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl shadow-black/40">
							<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.10),transparent_45%)]" />
							<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-60" />

							<div className="relative space-y-6 p-6">
								<div className="flex items-center justify-between gap-4">
									<div className="flex items-center gap-3">
										<div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-black/30">
											<Terminal className="h-5 w-5 text-white/80" />
										</div>
										<div>
											<div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
												Quickstart
											</div>
											<div className="text-sm font-semibold text-white/90">
												Install & ship fast
											</div>
										</div>
									</div>

									<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs font-medium text-white/60">
										<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(52,211,153,0.15)]" />
										stable
									</div>
								</div>

								<div className="rounded-2xl border border-white/10 bg-black/35 p-4">
									<pre className="overflow-x-auto text-[12px] leading-5 text-white/70">
										<code>
											{`pnpm add @da_b1rmuda/path-rush @da_b1rmuda/dock-rush

// routes.ts
export const routes = createRoutes({
  // zones, layouts, groups...
})`}
										</code>
									</pre>
								</div>

								<div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
									{heroFeatures.map((feature) => {
										const Icon = feature.icon;
										return (
											<div
												key={feature.title}
												className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/25 p-4 transition hover:border-white/20 hover:bg-white/[0.06]"
											>
												<div
													className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${feature.accent} opacity-0 transition group-hover:opacity-100`}
												/>
												<div className="relative flex items-start gap-3">
													<div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
														<Icon className="h-5 w-5 text-white/75" />
													</div>
													<div className="space-y-1">
														<div className="text-sm font-semibold text-white/90">
															{feature.title}
														</div>
														<div className="text-xs leading-5 text-white/55">
															{feature.description}
														</div>
													</div>
												</div>
											</div>
										);
									})}
								</div>

								<div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-black/25 px-4 py-3">
									<div className="flex items-center gap-3 text-xs text-white/55">
										<Layers className="h-4 w-4 text-white/60" />
										<span>Composable packages, predictable surface area.</span>
									</div>
									<a
										href="#packages"
										className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70 transition hover:text-white"
									>
										Browse packages
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section id="packages" className="space-y-8">
					<div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
						<div className="space-y-3">
							<div className="text-sm font-semibold uppercase tracking-[0.22em] text-white/45">
								Пакеты
							</div>
							<h2 className="text-3xl font-semibold tracking-[-0.03em] text-white md:text-5xl">
								Единая экосистема. Чёткая структура пакетов.
							</h2>
						</div>
					</div>

					<div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
						{packages.map((pkg) => (
							<article
								key={pkg.name}
								className={`group relative overflow-hidden rounded-[1.75rem] border p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08] ${pkg.featured ? "border-amber-400/20 bg-amber-500/[0.06]" : "border-white/10 bg-white/5"}`}
							>
								<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50" />
								<div className="flex items-start justify-between gap-4">
									<div
										className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${pkg.color} shadow-lg`}
									/>
									<span
										className={`rounded-full border px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] ${statusStyles[pkg.status] || "bg-white/5 text-white/70 border-white/10"}`}
									>
										{pkg.status}
									</span>
								</div>

								<div className="mt-6 flex items-center justify-between gap-3">
									<div>
										<h3 className="text-xl font-semibold tracking-[-0.02em] text-white">
											{pkg.name}
										</h3>
										<p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/40">
											{pkg.tag}
										</p>
									</div>
									<div className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-medium text-white/60">
										v{pkg.version}
									</div>
								</div>

								<p className="mt-4 text-sm leading-7 text-white/65">
									{pkg.description}
								</p>

								<div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4">
									<div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/35">
										Последнее обновление
									</div>
									<div className="mt-2 text-sm leading-6 text-white/60">
										{pkg.update}
									</div>
								</div>
							</article>
						))}
					</div>
				</section>
				<footer className="relative mt-4 border-t border-white/10 py-8">
					<div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
						<div className="flex items-center gap-3">
							<div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 shadow-inner shadow-white/5">
								<img src="/logo.png" alt="logo" />
							</div>
							<div>
								<div className="text-sm font-semibold tracking-[0.1em] text-white/90">
									RUSH
								</div>
								<div className="text-xs text-white/45">Framework ecosystem</div>
							</div>
						</div>

						<div className="flex flex-wrap items-center gap-3 text-sm text-white/55">
							<a
								href="#"
								className="rounded-xl px-3 py-2 transition hover:bg-white/5 hover:text-white"
							>
								Документация
							</a>
							<a
								href="#"
								className="rounded-xl px-3 py-2 transition hover:bg-white/5 hover:text-white"
							>
								Gitea
							</a>
						</div>
					</div>

					<div className="mt-6 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
						<div>
							© 2026 Rush. Создан для быстрой и модульной фронтенд-разработки.
						</div>
						<div>{packages.length} пакетов в экосистеме</div>
					</div>
				</footer>
			</main>
		</div>
	);
}
