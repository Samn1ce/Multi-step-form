import { NavLink } from "react-router-dom"

function HomeView() {
    return(
        <main className="flex gap-2 flex-col justify-center items-center h-screen bg-[url('./assets/bg-sidebar-desktop.svg')">
            <h1 className="text-3xl font-bold">Welcome To YAPSVILLE</h1>
            <NavLink to="/layout">
                <button className="w-40 h-10 border rounded border-focus">Create Account</button>
            </NavLink>
        </main>
    )
}

export default HomeView