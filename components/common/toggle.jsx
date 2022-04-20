import React from "react";

const ToggleSwitch = ({ label }) => {
    return (
        <div className="toggle-switch">
            <input type="checkbox" className="toggle-switch-checkbox" name={label} id={label} />
            <label className="toggle-switch-label" htmlFor={label}>
                <span className="inner" />
                <span className="switch" />
            </label>
        </div>
    );
};

export default ToggleSwitch;