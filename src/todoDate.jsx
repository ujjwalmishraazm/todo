 import { useEffect,useState } from "react";
export const TodoDate =()=>{
    const [time, setTime] = useState("");
    useEffect(() => {
        const interval = setInterval(() => {
          const now = new Date();
          const farmattedDate = now.toLocaleDateString();
          const farmattedtime = now.toLocaleTimeString();
          setTime(`${farmattedDate}- ${farmattedtime}`);
        }, 1000);
        return () => setInterval(interval);
      }, []);
    return(
        <>
         <h2 className="farmattedDate-time">{time}</h2>
        </>
    )
 }