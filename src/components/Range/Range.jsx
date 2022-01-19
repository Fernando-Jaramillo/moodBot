import { updateMood } from "../../actions"
import { useDispatch, useSelector } from "react-redux";
import { getQuote } from "../../actions";
import { useNavigate } from "react-router-dom"
import s from "./range.module.css"

export default function Range(){

    const dispatch = useDispatch();
    let moodBody = useSelector(state => state.quoteBody);
    let moodNumber = useSelector(state => state.quoteBody.mood)
    let navigate = useNavigate();

    function handleOnChange(e){
        dispatch(updateMood(e.target.value))
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(getQuote(moodBody));
        navigate("/response")
        dispatch(updateMood("5"))
    }
    // this formula let us get the percentage of the slider to chanhe its colors according to the move of the pointer
    let colorSilder = moodNumber * 25 -25

    return (
        <div>
            <div className={s.rangeContainer}>
                <form onSubmit={(e) => handleOnSubmit(e)}>
                    <div>I AM FEELING...</div>
                    <input type="range"
                    min="1"
                    max="5"
                    onChange={(e) => handleOnChange(e)}
                    className={s.rangeSlider}
                    style={{
                        background: `linear-gradient(90deg, rgb(255, 238, 0) ${colorSilder}%, rgb(240, 0, 0) ${colorSilder}%)`,
                    }}
                    />
                    <div className={s.buttonContainer}>
                        <button type="submit">Next</button>
                    </div>
                </form>
            </div>
        </div>
    );
}