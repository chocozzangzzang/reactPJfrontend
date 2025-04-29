import React from 'react'

class ConfirmButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isConfirmed : false,
        };

        // 함수형으로 정의할 때는 bind를 쓰지만, arrow function은 쓸 필요 없음
        // this.handleConfirm = this.handleConfirm.bind(this);
    }

    // 클래스 필드
    // handleConfirm() {
    //     this.setState((prevState) => ({
    //         isConfirmed : !prevState.isConfirmed,
    //     }));
    // }

    // arrow function
    // handleConfirm = () => {
    //     this.setState((prevState) => ({
    //         isConfirmed : !prevState.isConfirmed,
    //     }))
    // }

    render() {
        return (
            <button 
                onClick={this.handleConfirm}
                disabled={this.state.isConfirmed}
            > 
                {this.state.isConfirmed? "확인됨" : "확인완료"}
            </button>
        );
    }

}

export default ConfirmButton;