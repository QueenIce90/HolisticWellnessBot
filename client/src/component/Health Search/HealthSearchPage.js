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
    <div className='health-search'>
    <h2> NutriSearch: Explore Health Conditions and Nutritional Solutions</h2>
    <h4>Introducing NutriSearch, our innovative feature on the Health Search Page that allows you to delve into a comprehensive list of health conditions. Gain insights into the specific vitamin and nutrient deficiencies associated with each condition and discover a curated selection of foods that can help treat and alleviate those health concerns.</h4>
    
</div>

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
    <h5 className='text-center'>Key Features:

Condition-Specific Information: Access detailed information about various health conditions, understanding the nutritional aspects related to each.

Nutrient Deficiency Insights: Learn about the specific vitamins and nutrients commonly associated with each health condition, helping you address deficiencies effectively.

Food Remedies: Explore a curated list of foods known for their therapeutic properties in treating and managing specific health conditions.

Personalized Health Guidance: Receive personalized recommendations based on your unique health needs, empowering you to make informed dietary choices.

NutriSearch is your go-to tool for a holistic approach to health, providing valuable insights into the nutritional aspects of various conditions and guiding you towards a well-balanced and nourishing lifestyle. Stay tuned for the launch of this empowering feature on our Health Search Page!</h5>
    </>
);
}

export default HealthSearchPage;
