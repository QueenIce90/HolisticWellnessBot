import React from 'react';
import './App.css';
import './normal.css';
import './style.css';
import './Navigation';

class Home extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      result: '', // Initialize result in state
    };
}

handleSubmit = (e) => {
    e.preventDefault();
    const healthCondition = document.getElementById('healthCondition').value;
    let result = '';

    // Perform API call or database query to get vitamin and nutrient deficiency information based on health condition
    // Replace the following code with your actual implementation
    if (healthCondition === 'diabetes') {
    result = 'Vitamin B12 deficiency';
    } else if (healthCondition === 'hypertension') {
    result = 'Potassium deficiency';
    } else if (healthCondition === 'anemia') {
    result = 'Iron deficiency';
    } else {
    result = 'No deficiency found';
    }

    this.setState({ result });
};

handleDarkLightModeChange = (e) => {
    const isChecked = e.target.checked;
    const body = document.body;
    if (isChecked) {
    body.classList.add('dark-mode');
    } else {
    body.classList.remove('dark-mode');
    }
};

render() {
    return (
    <div>
        <form id="searchForm" onSubmit={this.handleSubmit}>
        <div className="form-group">
            <input
            className="form-control"
            id="healthCondition"
            placeholder="Enter your health condition"
            type="text"
            />
        </div>
        <button className="btn btn-primary" type="submit">
            Search
        </button>
        </form>
        <div id="result">Vitamin and Nutrient Deficiency: {this.state.result}</div>

        <div className="custom-control custom-switch">
        <input
            type="checkbox"
            className="custom-control-input"
            id="darkLightMode"
            onChange={this.handleDarkLightModeChange}
        />
        <label className="custom-control-label" htmlFor="darkLightMode">
            Dark/Light Mode
        </label>
        </div>
    </div>
    );
}
}

export default Home;
