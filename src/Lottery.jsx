import { useState } from "react";
import "./Lottery.css";
import { genTickit,sum} from "./Helper";
import Tickit from "./Tickit";

export default function Lottery({n,winningsum})
{
let [tickit,setTickit]=useState(genTickit(n));

let isWinning=sum(tickit)===winningsum;

let buyTickit=()=>{
    setTickit(genTickit(n))
}
    return (
        <div>
            <h1>Lottery Game</h1>
            <div className="tickit">
                <Tickit tickit={tickit}/>
            </div>
            <h3>{isWinning&&"congratulations ,you are won"}</h3>
            <button onClick={buyTickit}>create new tickit</button>
        </div>
    )
}