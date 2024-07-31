import { increment, decrement } from "../model/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../app/store";

const Counter = () => {

    const dispatch = useDispatch<AppDispatch>();
    const count = useSelector((state: RootState) => state.counter.value)

    return(
        <>
            <div>
                <br />
                <br />
                {count}
                <br />
                <br />
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>

        </>
    )
}

export default Counter;