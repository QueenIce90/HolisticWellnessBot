import React, { useState, useEffect } from 'react';
import NavBar from '../NavBar';

function HealthSearchPage({currentUser}) {
const [query, setQuery] = useState('');
const [deficiency, setDeficiency] = useState('');
const [treatment, setTreatment] = useState('');

useEffect(() => {
    const fetchData = async () => {
    try {
        const response = await fetch(`http://127.0.0.1:5555/healthconditions?query=${query}`);
        const data = await response.json();
        setDeficiency(data.deficiency);
        setTreatment(data.treatment);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
    };


    fetchData();
}, [query]);

const handleSearch = () => {
    setDeficiency('');
    setTreatment('');
};

return (
    <>
    <NavBar currentUser={currentUser}/>
    <div className="py-6 flex flex-col justify-center relative overflow-hidden sm:py-12">
    <div className="relative px-6 pt-10 pb-8 bg-white shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:mx-auto sm:rounded-lg sm:px-10">
        <div className="max-w-md mx-auto">
        <div className="divide-y divide-gray-300/50">
            <div className="py-8 text-base leading-7 space-y-6 text-gray-600">
            <input
                type="text"
                placeholder="Search health conditions"
                className="border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button
                className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={handleSearch}
            >
                Search
            </button>
            {deficiency && (
                <div className="pt-6">
                <h2 className="text-xl font-semibold">Deficiency</h2>
                <p>{deficiency}</p>
                </div>
            )}
            {treatment && (
                <div className="pt-6">
                <h2 className="text-xl font-semibold">Treatment</h2>
                <p>{treatment}</p>
                </div>
            )}
            </div>
        </div>
        </div>
    </div>
    </div>
    </>
);
}

export default HealthSearchPage;
