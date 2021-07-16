import * as React from 'react'
import '../styles/neonStyle.css'
import { useColor } from './neonColor';

const NeonTextON = (props) => {
    const {c} = useColor();
    var sB = c;
    var sF = "#eecee3";
    var v = props.v;

    if(v !== true && props.h === true ){
        v = true;
        sF = "#a8a8a8";
        //sB = "#921B5B";
    }

    if(v === false){
        sF = "#818181"; 
    }

    return (
        <svg width="90%" height="95%" display="block" margin="auto" background="yellow">
            {v && 
            <g id="Warstwa_1_kopia" data-name="Warstwa 1 kopia">
                <text class="cls-T cls-B" stroke={sB} x="50%" y="60%" text-anchor="middle"><tspan class="cls-2">{props.content}</tspan></text>
            </g>}
            <g id="Warstwa_1" data-name="Warstwa 1">
                <text class="cls-T" fill={sF} x="50%" y="60%" text-anchor="middle"><tspan class="cls-2">{props.content}</tspan></text>
            </g>
            {v && <line class="cls-B" stroke={sB} x1="0" y1="80%" x2="100%" y2="80%"/>}
            <line stroke={sF} x1="2%" y1="80%" x2="98%" y2="80%"/>
        </svg>
    );
}

const NeonTextSimple = (props) => {
    var sF = "#eecee3";
    const {c} = useColor();

    return (
        <svg preserveAspectRatio="none"  width="100%" height="100%">
            <g id="Warstwa_1_kopia" data-name="Warstwa 1 kopia">
                <text class="cls-T cls-B" stroke={c} x="50%" y="60%" text-anchor="middle"><tspan class="cls-2">{props.content}</tspan></text>
            </g>
            <g id="Warstwa_1" data-name="Warstwa 1">
                <text class="cls-T" fill={sF} x="50%" y="60%" text-anchor="middle"><tspan class="cls-2">{props.content}</tspan></text>
            </g>
        </svg>
    );
}

export { NeonTextSimple };
export default NeonTextON;