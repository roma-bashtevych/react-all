
import {useSelector, useDispatch} from "react-redux";
import './Counter.css'

export default function Counter() {
    const counter = useSelector((state) => state.counterValue)


    // console.log(counter)

    return (
        <div>
            <div>
                <h1 className={'counter-value'}>{counter}</h1>
            </div>
                 </div>
    )
}
