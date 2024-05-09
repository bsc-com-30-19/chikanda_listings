function NavBar(){
    return(
        <nav className="bg-p_cyan justify-between flex inline-flex w-full">
            <div className="p-1.5">Logo</div>
            <ul className="inline-flex">
                <li className="p-1.5">Search</li>
                <li className="p-1.5">Home</li>
                <li className="p-1.5">User</li>
            </ul>
        </nav>
    )
}

export default NavBar;