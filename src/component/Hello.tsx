import * as React from 'react';

export interface Props {
    name: string;
    enthusiasmLevel?: number;
}

interface State {
    currentEnthusiasm: number;
    temp: String;
}

class Hello extends React.Component<Props, State> {

    public state: State = {
        currentEnthusiasm: this.props.enthusiasmLevel || 1,
        temp : "rahulK"
    };

    onIncrement = () => {
        this.updateEnthusiasm(this.state.currentEnthusiasm + 1, this.state.temp);
    };

    onDecrement = () => {
        this.updateEnthusiasm(this.state.currentEnthusiasm - 1, this.state.temp);
    };

    updateEnthusiasm(currentEnthusiasm: number, name: String) {
        this.setState({temp:""});
        this.setState({currentEnthusiasm: currentEnthusiasm, temp:name+""+currentEnthusiasm});
    }

    render() {
        const {name} = this.props; // equivalent to const name = this.props.name;

        if (this.state.currentEnthusiasm <= 0) {
            throw new Error('You could be a little more enthusiastic. :D');
        }

        return (
            <div className="hello">
                <div className="greeting">
                    Hello {name + getExclamationMarks(this.state.currentEnthusiasm) + this.state.temp}
                </div>
                <button onClick={this.onDecrement}>-</button>
                <button onClick={this.onIncrement}>+</button>
            </div>
        );
    }
}
export default Hello;
function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}


/*

function Hello({ name, enthusiasmLevel = 1 }: Props) {
    if (enthusiasmLevel <= 0) {
        throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
        <div className="hello">
            <div className="greeting">
                Hello {name + getExclamationMarks(enthusiasmLevel)}
            </div>
        </div>
    );
}

export default Hello;

// helpers

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}
*/
