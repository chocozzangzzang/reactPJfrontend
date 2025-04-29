import React from 'react'

const scales = {
    c : '섭씨',
    f : '화씨'
}

function TemperatureInput(props) {

    // const [temperature, setTemperature] = useState('');
    
    const handleTemperature = (event) => {
        // setTemperature(event.target.value);
        props.onChangeTemperature(event.target.value);
    };

    return (
        <fieldset>
            <legend>온도를 입력하세요(단위 : {scales[props.scale]}) : </legend>
            {/* <input value={temperature} onChange={handleTemperature} /> */}
            {/* 상위 컴포넌트의 값을 가져옴 */}
            <input value={props.temperature} onChange={handleTemperature}/>
        </fieldset>
    )

}

export default TemperatureInput