import { useState } from "react";
import Notification from "../components/NotificationSystem/Notification";
import Paginagation from "../components/NotificationSystem/pagination";

const notifications = [
    {id:0, text:"You have received a message from James Doe"},
    {id:1, text:"You have received a message from Jane Doe"},
    {id:2, text:"You have received a booking request"},
    {id:3, text:"You have received a message from Jane Doe"},
    {id:4, text:"You have received a message from James Doe"},
    {id:5, text:"You have received a message from James Doe"},
    {id:6, text:"You have received a booking request"},
    {id:7, text:"You have received a booking request"},
    {id:8, text:"You have received a booking request"},
    {id:9, text:"You have received a message from James Doe"},
    {id:10, text:"You have received a message from Jane Doe"},
]

const NotificationSystem = () => {
    const [currentp, setCurrentP] = useState(1);
    const [notifppage, setNotifpPage] = useState(3);

    const indexOfLastNotif = currentp * notifppage;
    const indexOfFirstNotif = indexOfLastNotif - notifppage;
    const currentNotifs = notifications.slice(indexOfFirstNotif, indexOfLastNotif);

    const paginate = (pagenumber) =>{
        setCurrentP(pagenumber)
    }

    return(<div className = "w-full">
        <div className = "p-[20px] " >
            <h1 className= " font-bold text-[32px]">Notifications</h1>
        <div className = "h-[200 px] w-[95%] overflow-y-scroll- mx-auto bg-p_colu px-[20px] py-[10px]">
        {currentNotifs.map((utext) => (<Notification text={utext.text} key={utext.id}/>))}
         </div>  
         <Paginagation notifPerPage={notifppage} totalNotifs={notifications.length} paginate={paginate} changenumperpage={setNotifpPage}/>
        </div>
       
        </div>)
}

export default NotificationSystem;

