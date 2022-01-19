import Slider from "../Slider/Slider";
import Range from "../Range/Range";
import s from "./home.module.css"

export default function Home(){

    return(
        <div className={s.homeContainer}> 
            <div className={s.containerLogo}>
                <img src="logomoodbot.png" alt="mood bot logo" className={s.moodLogo}/>
            </div>
            <div className={s.containerRange}>
                <Range/>
            </div>
            <div className={s.containerSlider}>
                <Slider />
            </div>
        </div>
    )
}