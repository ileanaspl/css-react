import { useState } from 'react';
import './App.scss';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="card">
			<div className="up">
				<img src="./src/assets/currents.jpg" alt="" />
				<div className="text">
					<h1>Tame Impala</h1>
					<h2>
						Currents <br /> (2015)
					</h2>
				</div>
			</div>
			<hr />
			<div className="down">
				<h3>Rate this album</h3>
				<h3>⭐⭐⭐⭐⭐</h3>
			</div>
		</div>
	);
}

export default App;
