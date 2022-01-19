import { useDispatch, useSelector } from "react-redux";
import { restartQuote } from "../../actions/index";
import { Link } from "react-router-dom";
import s from "./response.module.css";

export default function Response() {
    let quote = useSelector(state => state.moodQuote)
    const dispatch = useDispatch();
    let handleOnClick = () => {
        dispatch(restartQuote());
    }
    return(
        <div className={s.responseContainer}>
            <div className={s.logoContainer}>
            {/* <div className={s.leftSide}> */}
                <img src="logomoodbot.png" alt="mood bot logo" className={s.moodLogo}/>
            </div>
            <div className={s.goBackContainer}>    
                <p className={s.bodyFont}>I CHANGE MY MOOD IF I WANT, OK?</p>
                <div className={s.buttonContainer}>
                    <Link to="/"><button onClick={ handleOnClick }>BACK</button></Link>
                </div>
            </div>
            <div className={s.screenContainer}>
                <img src="screen.png" alt="screen" className={s.screen}/>
                <p className={s.quote}>{quote}</p>
            </div>
        </div>
    )
}