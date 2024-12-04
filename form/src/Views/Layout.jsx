import { Outlet, NavLink } from "react-router-dom";
import { useState } from "react";

function Layout() {
  return (
    <main className="w-full h-screen flex justify-center items-center bg-main">
      <div className="w-full md:w-2/3 pb-3 md:p-3 md:bg-white rounded-lg h-full md:h-3/4 flex flex-col justify-between md:justify-normal md:flex-row relative">
        {/* SIDE NAV */}
        <div className="w-full flex flex-row justify-center py-5 items-start md:flex-col gap-5 md:p-5 md:w-[30%] h-32 md:h-full bg-[url('./assets/bg-sidebar-mobile.svg')] md:bg-[url('./assets/bg-sidebar-desktop.svg')] bg-cover bg-center md:rounded-lg">
          {/* "YOUR INFO" nav */}
          <NavLink
            to="your-info"
            className="flex items-center gap-4 navlink-disabled"
          >
            {({ isActive }) => (
              <div className="flex items-center gap-4">
                <div
                  className={`flex justify-center items-center w-8 h-8 border-1 font-bold border-zinc-200 rounded-full ${
                    isActive ? "bg-blue-200" : "text-zinc-200"
                  }`}
                >
                  1
                </div>
                {/* DETAIL */}
                <div className="hidden md:block">
                  <p className="text-xs text-zinc-600 font-bold">STEP 1</p>
                  <h3 className="text-base font-bold text-white">YOUR INFO</h3>
                </div>
              </div>
            )}
          </NavLink>
          {/* "SELECT PLAN" */}
          <NavLink
            to="select-plan"
            className="flex items-center gap-4 navlink-disabled"
          >
            {({ isActive }) => (
              <>
                <div
                  className={`flex justify-center items-center w-9 h-9 border font-bold border-zinc-200 ${
                    isActive ? "bg-blue-200" : "text-zinc-200"
                  } rounded-full`}
                >
                  2
                </div>
                {/* DETAIL */}
                <div className="hidden md:block">
                  <p className="text-xs text-zinc-600 font-bold">STEP 2</p>
                  <h3 className="text-base font-bold text-white">
                    SELECT PLAN
                  </h3>
                </div>
              </>
            )}
          </NavLink>
          {/* ADD ONS */}
          <NavLink
            to="add-ons"
            className="flex items-center gap-4 navlink-disabled"
          >
            {({ isActive }) => (
              <>
                <div
                  className={`flex justify-center items-center w-9 h-9 border-1 font-bold border-zinc-200 ${
                    isActive ? "bg-blue-200 text-black" : "text-zinc-200"
                  } rounded-full`}
                >
                  3
                </div>
                {/* DETAIL */}
                <div className="hidden md:block">
                  <p className="text-xs text-zinc-600 font-bold">STEP 3</p>
                  <h3 className="text-base font-bold text-white">ADD ONS</h3>
                </div>
              </>
            )}
          </NavLink>
          {/* SUMMARY */}
          <NavLink
            to="summary"
            className="flex items-center gap-4 navlink-disabled"
          >
            {({ isActive }) => (
              <>
                <div
                  className={`flex justify-center items-center w-9 h-9 border-1 font-bold border-zinc-200 ${
                    isActive ? "bg-blue-200" : "text-zinc-200"
                  } rounded-full`}
                >
                  4
                </div>
                {/* DETAIL */}
                <div className="hidden md:block">
                  <p className="text-xs text-zinc-600 font-bold">STEP 4</p>
                  <h3 className="text-base font-bold text-white">SUMMARY</h3>
                </div>
              </>
            )}
          </NavLink>
        </div>
        {/*  */}
        <div className="md:w-3/4 left-1/2 -translate-x-1/2 top-16 absolute md:relative md:top-auto md:left-auto md:translate-x-0 bg-white w-11/12 rounded-lg md:rounded-none flex justify-center items-center p-3">
          <Outlet />
        </div>
        <div className="md:hidden flex justify-between items-baseline">
          <button className="p-3 text-button rounded-md font-bold hover:bg-hover transition-all">
            Go Back
          </button>
          <button className="p-3 bg-button rounded-md text-zinc-100 font-bold hover:bg-hover transition-all">
            Next Step
          </button>
        </div>
      </div>
    </main>
  );
}

export default Layout;
