import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { decrease, increase, setDiff } from '../modules/counter';

const CounterContainer = () => {
    //useSelector()는 리덕스 스토어의 상태를 조회하는 Hook입니다.
    const { number, diff } = useSelector(state=>state.counter);
    const dispatch = useDispatch();
    //각 액션들을 디스패치하는함수
    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());
    const onSetDiff = (diff) => dispatch(setDiff(diff));
    return (
        <Counter
        number={number}
        diff={diff}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        onSetDiff={onSetDiff}
        />
        // <div>
        //     아무말 .....
        // </div>
    );
};

export default CounterContainer;