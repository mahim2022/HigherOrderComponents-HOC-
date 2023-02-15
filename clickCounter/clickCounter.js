import React, { Component } from "react";
import withCounter from "../withCounter/withCounter";

export class ClickCounter extends Component {
	render() {
		const { count, incrementCount } = this.props;

		return (
			<div>
				<button onClick={incrementCount}>Click Counter:{count}</button>
			</div>
		);
	}
}

export default withCounter(ClickCounter, 5);
