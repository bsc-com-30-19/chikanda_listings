import Notification from "../components/NotificationSystem/Notification";
const NotificationSystem = () => {
    return(<div className = "w-full">
        <div className = "p-[20px] " >
            <h1 className= " font-bold text-[32px]">Notifications</h1>
        <div className = "h-[200 px] w-[95%] overflow-y-scroll- mx-auto bg-p_colu px-[20px] py-[10px]">
        <Notification/>
        <Notification/>
        <Notification/>
        <Notification/>
        <Notification/> 
         </div>  
        </div>
       
        </div>)
}

export default NotificationSystem;

