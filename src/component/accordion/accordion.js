import React, { useState } from "react";
import { Icon } from "@components";

import './accordion.css';

import ArrowIcon from "@icons/down-arrow.svg";  
import classcat from "classcat";

const Accordion = ({data, title, isInitiallyOpen}) => {
    const [isOpen, setIsOpen] = useState(!!isInitiallyOpen);

    return (<div className="accordion">
          <div className="accordion_header">
            <div className="accordion_header_title">
              {title}
            </div>
            <button
              className={classcat({
                "accordion_header_control": true,
                "open": isOpen
              })}
              onClick={() => setIsOpen(!isOpen)}
              >
                <Icon><ArrowIcon /></Icon>
            </button>
          </div>
          <div className={classcat({
                "accordion_body": true,
                "open": isOpen
              })}
          >
            {data}
          </div>
        </div>)
}

export default Accordion;