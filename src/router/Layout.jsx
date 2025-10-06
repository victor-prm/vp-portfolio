import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div>
      <header>My Header</header>
      <main>
        <Outlet /> {/* Nested routes render here */}
      </main>
      <footer>My Footer</footer>
    </div>
  );
}
