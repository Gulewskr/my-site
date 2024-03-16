import React, { useState } from "react";

/**
 * @typedef (object)
 * @property 
 */

const SingleOption = ({props: {value, label, handleOnClick}}) => <div className="singleOption" onClick={handleOnClick}>
        <span>{label}</span>
    </div>

export default Dropdown = ({props: {options, placeholder}, children }) => {
    const [selectedOption, setSelectedOption] = useState(undefined);

    return (
        <div className="dropdown">
            <div  className="dropdown_header">
                {selectedOption ? 
                <div className="dropdown_title">{selectedOption.label}</div> :    
                <div className="dropdown_placeholder">{placeholder}</div>     
            }
            </div>
            <div  className="dropdown_body">
                {
                    options.map(v => {
                        <SingleOption
                            value={v.value}
                            label={v.label}
                            handleOnClick={() => setSelectedOption(v)}
                        />  
                    })
                }
            </div>
        </div>
    )
}