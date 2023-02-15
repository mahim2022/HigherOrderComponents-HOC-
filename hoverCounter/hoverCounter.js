import React, { Component } from "react";
import withCounter from "../withCounter/withCounter";

class HoverCounter extends Component {
	render() {
		const { count, incrementCount } = this.props;
		console.log(count);

		return (
			<div style={{ width: "100" }} onClick={incrementCount}>
				Hovered:{count}
			</div>
		);
	}
}

export default withCounter(HoverCounter, 10);
