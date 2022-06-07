import React, { useEffect, useState } from "react";
import "./App.css";
import { ReactComponent as USAMap } from "./map.svg";
import { changeStyleOfElement, FormattedStateData, matchingStates, StateData, sumVisits } from "./helper";

export const App: React.FC = () => {
	const [selectedValue, setSelectedValue] = useState<string>("0-250");
	const [showError, setShowError] = useState<boolean>(false);
	const [errorMessage, setErrorMessage] = useState<string>("");
	const [formattedJSON, setFormattedJSON] = useState<FormattedStateData[]>([]);

	useEffect(() => {
		(async function fetchVisits() {
			try {
				const response = await fetch("http://localhost:8000");
	
				if (!response.ok) {
					throw (response.statusText || "Error during fetching data");
				}
	
				const states: StateData[] = await response.json();
				setFormattedJSON(sumVisits(states));
			} catch (error: any) {
				setShowError(true);
				setErrorMessage(error);
			}
		})();
	}, [])

	useEffect(() => {
		const [from, to] = selectedValue.split('-');
		const statesToFill = matchingStates(formattedJSON, +from, +to);
	
		changeStyleOfElement(statesToFill, 'add');
	}, [formattedJSON, selectedValue]);

	const _removePreviousFill = () => {		
		const [from, to] = selectedValue.split('-');
		const statesToFill = matchingStates(formattedJSON, +from, +to);

		changeStyleOfElement(statesToFill, 'remove');
	}

	return (
		<>
			<div className="form">
				<h1>User visits</h1>
				<select
					className="dropdown"
					id="visits-dropdown"
					name="visits-dropdown"
					onChange={(e) => {
						_removePreviousFill();
						setSelectedValue(e.target.value);
					}}
				>
					<option value="0-250">0-250</option>
					<option value="250-500">250-500</option>
					<option value="500-1000">500-1000</option>
					<option value="1000">1000+</option>
				</select>
				{showError && <p className="error">{errorMessage}</p>}
			</div>
			<USAMap />
		</>
	);
}
