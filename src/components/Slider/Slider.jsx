import { useSelector } from "react-redux";
import s from "./slider.module.css"

export default function Slider(){
    let mood = useSelector((state) => state.quoteBody.mood);
    return(
        <div>
            <div className={s.face}>
                { (mood === "5")? 
                        <img src="face5.png" alt="happy face of a robot"/> : (
                    (mood === "4")?  
                        <img src="face4.png" alt="smiling face of a robot" className={s.next}/> : (
                    (mood === "3")? 
                        <img src="face3.png" alt="neutral face of a robot" className={s.next}/> : (
                    (mood === "2")? 
                        <img src="face2.png" alt="sad face of a robot" className={s.next}/> : 
                        <img src="face1.png" alt="angry face of a robot" className={s.next}/>
                )))}
            </div>
        </div>
    )
}