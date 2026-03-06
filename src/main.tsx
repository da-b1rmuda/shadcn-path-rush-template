import { RouterRoot } from "@da_b1rmuda/path-rush/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterRoot />
	</StrictMode>,
);
