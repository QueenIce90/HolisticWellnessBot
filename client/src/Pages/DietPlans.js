// DietPlans.js
import React, { useEffect, useState } from 'react';
import NavBar from "../components/NavBar";

const DietPlans = () => {
    const [holisticInfo, setHolisticInfo] = useState('');
    const healthCondition = 'anxiety';  // Set your desired health condition

    useEffect(() => {
        fetch('http://localhost:5000/get_holistic_info', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ health_condition: healthCondition }),
        })
        .then(response => response.json())
        .then(data => {
            // Update your state with the information
            setHolisticInfo(JSON.stringify(data.result, null, 2));
        })
        .catch(error => {
            console.error('Error:', error);
            setHolisticInfo('An error occurred while fetching data.');
        });
    }, []);  // The empty dependency array ensures useEffect runs only once on component mount

    return (
        <section id="diet-plans">
            <NavBar />
            <h2>Holistic Wellness Information</h2>
            <pre>{holisticInfo}</pre>
        </section>
    );
}

export default DietPlans;
