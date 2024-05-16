const PropertyManage = () =>{
    return(
        <div className="flex flex-row w-full h-screen items-start justify-start">
            Main content
            <NavLink to="/Room">Rooms</NavLink>
            <NavLink to="/Toilet">Toilets</NavLink>
        </div>
        
    )
}

export default PropertyManage;