import React, { useState } from 'react';
// Assuming you have your Tailwind setup in index.css

function Auth() {
    const [isLogin, setIsLogin] = useState(true);
    const [credentials, setCredentials] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    const toggleAuthMode = () => {
        setIsLogin(!isLogin);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isLogin) {
            // Handle login logic
            console.log('Logging in with:', credentials.email, credentials.password);
        } else {
            // Handle sign up logic
            console.log('Signing up with:', credentials.name, credentials.email, credentials.password);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h2 className="text-2xl font-bold mb-6">{isLogin ? 'Student Login' : 'Student Sign Up'}</h2>
            <form onSubmit={handleSubmit} className="bg-white p-8 shadow-md rounded-lg w-80">
                {!isLogin && (
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={credentials.name}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                )}
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Gmail ID:</label>
                    <input
                        type="email"
                        name="email"
                        value={credentials.email}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700 transition duration-300"
                >
                    {isLogin ? 'Login' : 'Sign Up'}
                </button>
            </form>
            <button
                onClick={toggleAuthMode}
                className="mt-4 text-blue-500 hover:underline"
            >
                {isLogin ? 'Switch to Sign Up' : 'Switch to Login'}
            </button>
        </div>
    );
}

export default Auth;
