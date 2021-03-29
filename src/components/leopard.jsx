import React from 'react';
import project from "../project/index.js";

class Leopard extends React.Component {
	componentDidMount() {
		project.attach("#project");

		document.querySelector("#greenFlag").addEventListener("click", () => {
			project.greenFlag();
		});
	}

	render() {
    return (
      <div style={{"float": "right"}}>
        <button id="greenFlag">Green Flag</button>
				<div id="project"></div>
      </div>
    );
  }
}

export default Leopard;