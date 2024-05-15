import Sidebar from "../components/propertysearch/sidebar";
import Propety from "../components/propertysearch/property";

const Propertysearch = () =>{
    return(
    <div className="flex h-[100vh] w-full p-[50px]">
        <Sidebar />
        <Propety />
    </div>
    )
}

export default Propertysearch;