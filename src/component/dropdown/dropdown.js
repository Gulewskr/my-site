import React, { useState } from 'react';

/**
 * @typedef (object)
 * @property
 */

const SingleOption = ({ props: { value, label, handleOnClick } }) => (
    <div
        className="singleOption"
        role="button"
        tabIndex={'0'}
        onClick={handleOnClick}
        onKeyDown={handleOnClick}
    >
        <span>{label}</span>
    </div>
);

const Dropdown = ({ props: { options, placeholder }, children }) => {
    const [selectedOption, setSelectedOption] = useState(undefined);

    return (
        <div className="dropdown">
            <div className="dropdown_header">
                {selectedOption ? (
                    <div className="dropdown_title">{selectedOption.label}</div>
                ) : (
                    <div className="dropdown_placeholder">{placeholder}</div>
                )}
            </div>
            <div className="dropdown_body">
                {options.map(v => (
                    <SingleOption
                        value={v.value}
                        label={v.label}
                        tabindex="0"
                        handleOnClick={() => setSelectedOption(v)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Dropdown;
