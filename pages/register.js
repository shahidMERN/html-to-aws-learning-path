import { useState } from "react";
//====================================
const Register = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.table({ name, email, password });
	};
	return (
		<>
			<h1 className="text-center bg-warning square">Register Page</h1>
			<div className="container col-md-4 offset-md-4 p-b-5">
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						className="form-control mb-4 p-4"
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder="Enter name"
						requred="true"
					/>

					<input
						type="email"
						className="form-control mb-4 p-4"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="Enter Email"
						requred="true"
					/>

					<input
						type="password"
						className="form-control mb-4 p-4"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder="Enter Password"
						requred="true"
					/>

					<button type="submit" class="btn btn-block btn-primary">
						Submit
					</button>
				</form>
			</div>
		</>
	);
};

export default Register;

/**
 * collec user's name, email and password
 * to register with us
 * then send to backend server to
 * save in data base
 * for future user login
 * */
/**
 * col-md-4 for 4 column medium bootstrap class for 12 column grid system
 * offset-md-4 for medium offset
 * pb-5 for padding bottom 5
 * e.preventDefault for stop the app to reload page by default.
 * */
