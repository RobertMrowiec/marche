import React, { useEffect, useState } from 'react';
import './App.css';
import { ReactComponent as USAMap } from './map.svg';

// We can do this task by multiple ways:
// 1. We can pass the parameter to svg, wrap it as React Component and there handle filling the color,
// 2. We can paste SVG here ( not expected cause it's big ) and add additional state (i.e. `al ${fill}`) to each class of SVG Paths and change that using state hooks

// 3. We can use default HTML DOM getElementBy... the following way and include map using { ReactComponent as SVGFile}:
// document.getElementsByClassName('ca')[0].classList.add('fill')
// At this point I selected this way and here's the result

const tempData = [
	'ca',
	'nv',
	'ky',
	'ny'
]

export const App: React.FC = () => {
	const [showError, setShowError] = useState<boolean>(false)
	const [errorMessage, setErrorMessage] = useState<string>('')
	const [fetchedStates, setFetchedStates] = useState<string[]>([])

	const fetchVisits = async () => {
		try {
			// const response = await fetch('https://randomuser.me/return_error')
			// if (!response.ok) {
			// 	throw response.statusText || "Error during fetching data"
			// }

			// const states = await response.json()
			setShowError(false);
			setFetchedStates(tempData)
		} catch (error: any) {
			setShowError(true);
			setErrorMessage(error)
		}
	}

	useEffect(() => fetchedStates.forEach(state => document.getElementsByClassName(state)[0].classList.add('fill')), [fetchedStates])

	return (
		<>
			<div className="form">
				<h1>User visits</h1>
				<select
					className="dropdown"
					id="visits-dropdown"
					name="visits-dropdown"
					onChange={fetchVisits}
				>
					<option value="0-250">0-250</option>
					<option value="250-500">250-500</option>
					<option value="500-1000">500-1000</option>
					<option value="1000+">1000+</option>
				</select>
				{showError && <p className="error">{errorMessage}</p>}
			</div>
			<USAMap />
		</>
	);
}
