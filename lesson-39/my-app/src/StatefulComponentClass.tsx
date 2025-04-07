import React, { Component } from 'react';

interface StatefulComponentClassState {
    count: number;
}

class StatefulComponentClass extends Component<{}, StatefulComponentClassState> {
    constructor(props: {}) {
        super(props);
        this.state = { count: 0 };
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div>
                <h2>Stateful Component (Class)</h2>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}

export default StatefulComponentClass;