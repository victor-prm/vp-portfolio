import { Outlet } from "react-router";
import Header from "../components/Header";

export default function Layout() {
  return (
    <div>
      <Header></Header>
      <main>
        <Outlet /> {/* Nested routes render here */}
      </main>
      <footer>My Footer</footer>
    </div>
  );
}
