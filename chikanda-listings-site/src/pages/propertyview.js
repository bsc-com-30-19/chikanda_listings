import MainBar from "../components/propertyview/mainbar";
import SideBar from "../components/propertyview/sidebar";

const PropertyView = () =>{
    return(
        <div className="flex">
            <MainBar />
            <SideBar />
        </div>
    )
}

export default PropertyView;