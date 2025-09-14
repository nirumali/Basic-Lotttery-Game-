import TickitNum from "./TickitNum"
import "./Tickit.css"
export default function Tickit({tickit})
{
    return (<div className="Tickit">
         <p>tickit</p>
        {
           
            tickit.map((num,index)=>(
                <TickitNum n={num} key={index}/>
            ))
        }
    </div>)
}