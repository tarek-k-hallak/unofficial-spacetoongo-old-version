export default function ToggleHamburger(hs1, hs2, hs3, isToggleWindow, sidenav) {

    if (!isToggleWindow) {
        hs1.current.classList.add("opacity-80", "rotate-45", "translate-y-3")
        hs2.current.classList.add("opacity-0")
        hs3.current.classList.add("opacity-80", "-rotate-45", "-translate-y-4")
        sidenav.current.classList.remove("-translate-x-full")
    }
    else {
        hs1.current.classList.remove("opacity-80", "rotate-45", "translate-y-3")
        hs2.current.classList.remove("opacity-0")
        hs3.current.classList.remove("opacity-80", "-rotate-45", "-translate-y-4")
        sidenav.current.classList.add("-translate-x-full")
    }
}
