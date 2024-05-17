import Notification from "../components/NotificationSystem/Notification";
const NotificationSystem = () => {
    return(<div className="w-full">
        <div className=" ">
        <div className="h-[200px] w-[600px] overflow-y-scroll mx-auto">
            <Notification/>
            <Notification/>
            <Notification/>
            <Notification/>
            <Notification/>
        </div>
        </div>
        NotificationSystem
        </div>)
}

export default NotificationSystem;

