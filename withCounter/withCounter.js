import React, { Component } from "react";

export default function withCounter(WrappedComponent, incrementNumber) {
	class WithCounter extends Component {
		constructor(props) {
			super(props);
			this.state = { count: 0 };
		}
		incrementCount = () => {
			// this.setState({ count: this.state.count + 1 });
			this.setState((prevState) => {
				return { count: prevState.count + incrementNumber };
			});
		};
		render() {
			return (
				<WrappedComponent
					count={this.state.count}
					incrementCount={this.incrementCount}
				/>
			);
		}
	}
	return WithCounter;
}
