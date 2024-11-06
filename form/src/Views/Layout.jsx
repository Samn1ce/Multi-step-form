import { Outlet, NavLink } from "react-router-dom";

function Layout() {
    return(
        <main className="w-full h-screen flex justify-center items-center bg-main">
            <div className="w-2/3 p-3 bg-white rounded-lg h-3/4 flex">
                {/* SIDE NAV */}
                <div className="flex flex-col gap-5 p-5 w-[30%] h-full bg-[url('./assets/bg-sidebar-desktop.svg')] bg-cover bg-center rounded-lg">
                    {/* "YOUR INFO" nav */}
                    <NavLink to="/" className="flex items-center gap-4">
                        {({ isActive }) => (
                            <div className="flex items-center gap-4">
                                <div className={`flex justify-center items-center w-8 h-8 border-1 font-bold border-zinc-200 rounded-full ${isActive ? 'bg-blue-200' : 'text-zinc-200'}`}>1</div>
                                {/* DETAIL */}
                                <div>
                                    <p className="text-xs text-zinc-600 font-bold">STEP 1</p>
                                    <h3 className="text-base font-bold text-white">YOUR INFO</h3>
                                </div>
                            </div>
                        )}
                    </NavLink>
                    {/* "SELECT PLAN" */}
                    <NavLink to="/select-plan" className="flex items-center gap-4">
                        {({ isActive }) => (
                            <>
                                <div className={`flex justify-center items-center w-9 h-9 border font-bold border-zinc-200 ${isActive ? 'bg-blue-200' : 'text-zinc-200'} rounded-full`}>
                                    2
                                </div>
                                {/* DETAIL */}
                                <div>
                                    <p className="text-xs text-zinc-600 font-bold">STEP 2</p>
                                    <h3 className="text-base font-bold text-white">SELECT PLAN</h3>
                                </div>
                            </>
                        )}
                    </NavLink>
                    {/* ADD ONS */}
                    <NavLink to="/add-ons" className="flex items-center gap-4">
                        {({ isActive }) => (
                            <>
                                <div className={`flex justify-center items-center w-9 h-9 border-1 font-bold border-zinc-200 ${isActive ? 'bg-blue-200 text-black' : 'text-zinc-200'} rounded-full`}>3</div>
                                {/* DETAIL */}
                                <div>
                                    <p className="text-xs text-zinc-600 font-bold">STEP 3</p>
                                    <h3 className="text-base font-bold text-white">ADD ONS</h3>
                                </div>
                            </>
                        )}
                    </NavLink>
                    {/* SUMMARY */}
                    <NavLink to="summary" className="flex items-center gap-4">
                        {({ isActive }) => (
                            <>
                                <div className={`flex justify-center items-center w-9 h-9 border-1 font-bold border-zinc-200 ${isActive ? 'bg-blue-200' : 'text-zinc-200'} rounded-full`}>4</div>
                                {/* DETAIL */}
                                <div>
                                    <p className="text-xs text-zinc-600 font-bold">STEP 4</p>
                                    <h3 className="text-base font-bold text-white">SUMMARY</h3>
                                </div>
                            </>
                        )}
                    </NavLink>
                </div>
                {/*  */}
                <div className="w-3/4 flex justify-center items-center p-3">
                    <Outlet />
                </div>
            </div>
        </main>
    );
};

export default Layout