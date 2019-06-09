import * as React from 'react';

export interface Props {
    name: string;
    enthusiasmLevel?: number;
}

interface State1 {
    currentEnthusiasm: number;
    value ?: number;
}

class Hello extends React.Component<Props, State1> {

    public state: State1 = {
        currentEnthusiasm: this.props.enthusiasmLevel || 1
    };

    onIncrement = () => {
        this.updateEnthusiasm(this.state.currentEnthusiasm + 1, this.state.value);
    };

    onDecrement = () => {
        this.updateEnthusiasm(this.state.currentEnthusiasm - 1, this.state.value);
    };

    updateEnthusiasm(currentEnthusiasm: number, value: number = 0) {
        this.setState({currentEnthusiasm: currentEnthusiasm, value:currentEnthusiasm+1});
    }

    render() {
        const {name} = this.props; // equivalent to const name = this.props.name;

        if (this.state.currentEnthusiasm <= 0) {
            throw new Error('You could be a little more enthusiastic. :D');
        }

        return (
            <div className="hello">
                <div className="greeting">
                    Hello {name + getExclamationMarks(this.state.currentEnthusiasm) + this.state.value}
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
