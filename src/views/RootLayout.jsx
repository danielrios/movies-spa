import { Header } from "../components/Header.jsx";
import { Outlet } from "react-router-dom";

export function RootLayout() {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
}
