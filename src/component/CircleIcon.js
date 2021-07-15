import * as React from 'react'
import '../styles/neonStyle.css'
import '../styles/circleIcons.css'
import { Link } from 'gatsby'
import { Styles } from '../styles/neonStyles'

import {Trans} from 'gatsby-plugin-react-i18next';


const About = () => (
    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" width="100%" height="100%" viewBox="-3 -3 71.48 73.33">
    <g id="Warstwa_2" data-name="Warstwa 2">
        <path  style={Styles().fill} d="M42.42,16.74c0,.32,0,.64,0,1,0,.72,0,.1,0-.05A11.56,11.56,0,0,1,42,19.18a9.18,9.18,0,0,1-.31.88c.06-.14.33-.66,0-.06a17.52,17.52,0,0,1-.93,1.57c-.5.75.34-.23-.07.08a4.52,4.52,0,0,0-.51.56,5.77,5.77,0,0,1-.44.42c-.1.1-.88.73-.17.19a10.73,10.73,0,0,1-1.27.84c-.18.1-.37.18-.54.28-.39.18-.37.18.05,0l-.43.16c-.5.16-1,.31-1.5.42-.22,0-.92.12-.1,0l-.8.06c-.55,0-1.08,0-1.62,0s.86.2-.11,0c-.3-.07-.61-.13-.91-.21l-.89-.29c-.18-.06-.58-.32.05,0-.45-.24-.91-.45-1.34-.73-.22-.13-.42-.3-.63-.43-.48-.28.59.58-.07-.07-.43-.43-.85-.87-1.27-1.3.48.49.14.2,0,0s-.34-.5-.5-.76l-.3-.53c-.07-.13-.47-1.06-.14-.22a11.06,11.06,0,0,1-.47-1.48c-.05-.2-.09-.41-.14-.61-.17-.73,0,.56-.05-.42a11.87,11.87,0,0,1,0-1.46c0-.17.18-1.18,0-.28.05-.2.08-.41.12-.62.12-.51.28-1,.44-1.49.31-.93-.37.61.11-.23.15-.27.28-.55.44-.81s.28-.42.41-.64.57-.66.06-.09c.34-.38.67-.75,1-1.09,0,0,.75-.67.32-.3s.34-.24.35-.25a13.88,13.88,0,0,1,1.6-.89c-.13.06-.71.25-.05,0l.89-.29L33,9s1-.18.43-.09.45,0,.46,0c.27,0,.54,0,.81,0s.54,0,.81,0c.88,0-.51-.16.26,0,.61.15,1.21.31,1.8.5.87.28-.32-.28.1,0a10.62,10.62,0,0,0,.94.51c.18.1.35.21.52.32s.33.23.49.36c-.36-.28-.37-.29,0,0l1.07,1.07c.68.69-.37-.61.17.2.16.25.34.5.49.76s.29.54.44.81c.39.67-.15-.58.11.23.2.6.35,1.19.51,1.8,0,.18.07.72,0-.05,0,.43.07.85.07,1.29a3.75,3.75,0,0,0,7.5,0A15.64,15.64,0,0,0,39.7,2.24,15.39,15.39,0,0,0,22.83,6.75a15.59,15.59,0,0,0-1.55,17.84A15.62,15.62,0,0,0,37.6,31.81c7.16-1.28,12.23-8,12.32-15.07A3.78,3.78,0,0,0,46.17,13,3.82,3.82,0,0,0,42.42,16.74Z" transform="translate(-1.78 -1.34)"/>
        <path  style={Styles().fill} d="M9.45,64.91q-.13-6.54-.16-13.1c0-1.11,0-2.22,0-3.33l0-.43c0-.25,0,.14,0,.16,0-.25.08-.5.13-.74a19.4,19.4,0,0,1,.93-3.16c-.25.65.26-.57.32-.7.2-.41.42-.81.64-1.2a26.13,26.13,0,0,1,1.48-2.28c.07-.1.45-.61.15-.22s.08-.09.15-.18l.7-.83c.44-.5.9-1,1.37-1.45A16.45,16.45,0,0,1,22,33.31a22.45,22.45,0,0,1,5.85-1c2.27-.15,4.54-.14,6.81-.14,2,0,3.91,0,5.86.13,1,.05,1.93.14,2.89.25.62.07-.54-.09.08,0l.72.11c.53.09,1.07.2,1.6.32a24.44,24.44,0,0,1,2.78.79c.12,0,1.39.57.79.3a16.8,16.8,0,0,1,1.64.83,11.94,11.94,0,0,1,3.6,2.84c.22.24.44.49.65.74.08.1.64.83.24.29s.28.4.39.55a27,27,0,0,1,2.56,4.5c-.06-.15-.23-.61,0,.09.11.28.22.56.32.85.18.53.35,1.07.49,1.62a11.74,11.74,0,0,1,.45,2.59c0,.67,0,1.35,0,2l-.09,13.94a3.75,3.75,0,0,0,7.5,0q0-6.73.08-13.47a26,26,0,0,0-1.1-8.35c-2.47-7.55-7.72-13.67-15.23-16.46-4.21-1.56-8.84-1.89-13.28-2a78.16,78.16,0,0,0-14.35.64A26.45,26.45,0,0,0,5.12,38.2,23.14,23.14,0,0,0,1.79,50.07c0,5,.06,9.9.16,14.84A3.79,3.79,0,0,0,5.7,68.66a3.82,3.82,0,0,0,3.75-3.75Z" transform="translate(-1.78 -1.34)"/>
        <path  style={Styles().fill} d="M5.66,68.66H63.4a3.75,3.75,0,1,0,0-7.5H5.66a3.75,3.75,0,1,0,0,7.5Z" transform="translate(-1.78 -1.34)"/>
        <path  style={Styles().fill} d="M40.64,39.47C38,37,34,37.26,30.75,38.32c-2.94,1-7.53,3-6.4,7a4.13,4.13,0,0,0,3.08,2.83,9.81,9.81,0,0,0,1.63.2,3.75,3.75,0,0,0,.47,0c-1,0-.56-.1-.17,0a2.75,2.75,0,0,0,.63.18c-.1,0-.8-.42-.28-.07-.71-.48-.37-.32-.16-.09s-.61-.86-.29-.36c.44.71-.26-.93,0-.11s0-1.06,0,0c0,.27,0,.54,0,.81-.05.78.18-1,0,0-.14.68-.32,1.35-.52,2-.4,1.25-.87,2.48-1.27,3.72-1,2.92-1.47,6.36,1,8.7s6.47,1.71,9.4.65c2.3-.83,5-1.94,6.76-3.76a4,4,0,0,0-2.72-6.85,4.48,4.48,0,0,0-.64,0c-.39,0-.78.1-1.16.15-.71.1,1-.09.24,0l-1,0c-.55,0-.24-.27.24.07l-.41-.1.49.21c-.65-.35.54.51.13.12s.55.85.28.35.21.57.21.54a1.83,1.83,0,0,0-.15-.52s.07,1.07.08.57c0-.15,0-.31,0-.46s0-.31,0-.47c0-.65-.19,1,0,.32.3-1.45.72-2.85,1.16-4.26,1.06-3.39,2-7.31-.69-10.22a3.75,3.75,0,0,0-5.3,5.3c.38.42-.61-.93-.21-.24.27.48-.36-1.07-.16-.28.15.59,0-1.12,0-.37,0,.18,0,.35,0,.53,0,.47-.3.83.06-.18a5.43,5.43,0,0,0-.13.68c-.09.43-.19.85-.31,1.27C34,48,33.33,49.82,33,51.7c-.47,2.54-.43,5.26,1.5,7.23a6.84,6.84,0,0,0,5,1.89,16.69,16.69,0,0,0,2.23-.23c1-.14-.73,0-.18,0,.79,0-.89-.25-.5-.1l-1.66-1c-1.32-1-1.23-3.11-.58-4.24-.17.29.81-.8.44-.57a1.22,1.22,0,0,0-.27.24c-.21.23.95-.68.19-.17-.2.14-.4.26-.61.38-.43.26-.88.49-1.33.72l-.75.35c-.26.12-.74.24.29-.12l-.54.21c-.54.21-1.08.39-1.64.55-.23.07-.47.13-.71.18l-.45.09c-.77.17.71,0,.32,0-.24,0-.48,0-.73,0s-1.05-.09-.23,0,0-.08-.15-.1c.62.08.89.4.56.22-.48-.28.76.66.39.29s.56.79.34.45-.19-.62.21.53c-.28-.8,0,.41,0,.4s0-.63,0-.68c0-.84-.2,1,0,.1a27,27,0,0,1,1-3.32c.83-2.38,1.84-5,1.63-7.52a6.9,6.9,0,0,0-3.11-5.51,7.36,7.36,0,0,0-2.86-1c-.59-.08-1.17-.16-1.76-.2-.16,0-.75-.09,0,0,.4.07.48.08.25,0,.7.37.92.45.65.25l1.34,1.35c.64.87.58,3.37-.47,4a1.16,1.16,0,0,0,.28-.26c-.54.72-.71.52-.25.23l.51-.3c.34-.18,1.58-.61.36-.2.48-.16.95-.36,1.45-.51a13.28,13.28,0,0,1,1.54-.37c.36-.07.82,0-.23,0,.25,0,.5,0,.75,0s.47,0,.71,0c.62,0-1-.26-.18,0s-.7-.39-.19-.11c.74.42-.6-.55-.18-.16a3.75,3.75,0,1,0,5.3-5.3Z" transform="translate(-1.78 -1.34)"/>
        <path  style={Styles().fill} d="M34.28,35.41a2.83,2.83,0,0,1,0,.41l.14-1a3,3,0,0,1-.22.78l.38-.9a2.93,2.93,0,0,1-.41.68l.59-.76a4,4,0,0,1-.5.51l.76-.59a3.11,3.11,0,0,1-.68.4l.89-.37a3.46,3.46,0,0,1-.78.21l1-.13a3,3,0,0,1-.84,0l1,.13a3.46,3.46,0,0,1-.78-.21l.89.37a3.11,3.11,0,0,1-.68-.4l.76.59a4,4,0,0,1-.5-.51l.59.76a2.93,2.93,0,0,1-.41-.68l.38.9a3,3,0,0,1-.22-.78l.14,1a2.89,2.89,0,0,1,0-.83l-.14,1a3.14,3.14,0,0,1,.22-.78l-.38.9a3.16,3.16,0,0,1,.41-.68l-.59.76a3.38,3.38,0,0,1,.5-.5l-.76.58a3.57,3.57,0,0,1,.68-.4l-.89.38a3,3,0,0,1,.78-.22l-1,.13a3.93,3.93,0,0,1,.84,0l-1-.13a3,3,0,0,1,.78.22l-.89-.38a3.57,3.57,0,0,1,.68.4l-.76-.58a3.38,3.38,0,0,1,.5.5l-.59-.76a3.16,3.16,0,0,1,.41.68l-.38-.9a3.14,3.14,0,0,1,.22.78l-.14-1a3,3,0,0,1,0,.42,3.92,3.92,0,0,0,1.1,2.65,3.75,3.75,0,0,0,6.4-2.65A9.64,9.64,0,0,0,41.62,34a3.25,3.25,0,0,0-.12-.52,6.27,6.27,0,0,0-.81-1.74,8.69,8.69,0,0,0-.84-1.06,7.55,7.55,0,0,0-1.08-.88A6.48,6.48,0,0,0,37.08,29a4.13,4.13,0,0,0-.5-.15,10.26,10.26,0,0,0-1.45-.18,2.9,2.9,0,0,0-.51,0,9,9,0,0,0-1.44.22,8.64,8.64,0,0,0-1.27.51,2.94,2.94,0,0,0-.46.25A6.77,6.77,0,0,0,30,30.84a9.62,9.62,0,0,0-.81,1.09,7.38,7.38,0,0,0-.58,1.28,6.47,6.47,0,0,0-.37,1.9,2.53,2.53,0,0,0,0,.55,10,10,0,0,0,.2,1.44,3.53,3.53,0,0,0,.15.46,8.32,8.32,0,0,0,.58,1.29A9.62,9.62,0,0,0,30,39.94a3.06,3.06,0,0,0,.35.37,6.24,6.24,0,0,0,1.55,1.1,8.69,8.69,0,0,0,1.27.52,9,9,0,0,0,1.44.23,6.81,6.81,0,0,0,2-.15,3.86,3.86,0,0,0,.58-.17,8.29,8.29,0,0,0,1.33-.59,8.73,8.73,0,0,0,1.14-.86A3.59,3.59,0,0,0,40,40a7.65,7.65,0,0,0,1.47-2.51,3.44,3.44,0,0,0,.15-.55,8.75,8.75,0,0,0,.18-1.53,3.8,3.8,0,0,0-1.1-2.66A3.75,3.75,0,0,0,38,31.66a3.8,3.8,0,0,0-2.65,1.09A4,4,0,0,0,34.28,35.41Z" transform="translate(-1.78 -1.34)"/>
    </g>
    <g id="Warstwa_2_kopia" data-name="Warstwa 2 kopia">
        <path class="cls-8" d="M45.55,16.74a11,11,0,1,1-20.49-5.66,11,11,0,0,1,20.49,5.66.63.63,0,0,0,1.25,0A12.27,12.27,0,1,0,24,23,12.28,12.28,0,0,0,46.8,16.74.63.63,0,0,0,45.55,16.74Z" transform="translate(-1.78 -1.34)"/>
        <path class="cls-8" d="M6.32,64.91q-.12-6.54-.16-13.1a21.69,21.69,0,0,1,1.2-8.33A22.67,22.67,0,0,1,21.17,30.29c4.36-1.35,9-1.29,13.49-1.28a54.68,54.68,0,0,1,12,.92A19.6,19.6,0,0,1,56.83,35.5a24.65,24.65,0,0,1,4.33,6.71A21,21,0,0,1,62.89,51c0,4.65-.06,9.29-.08,13.94a.63.63,0,0,0,1.25,0q0-6.73.08-13.47a23.14,23.14,0,0,0-1-7.52C61,37.49,56.52,32,50.1,29.65a37.81,37.81,0,0,0-12.45-1.87,74.45,74.45,0,0,0-13.52.53A23.49,23.49,0,0,0,7.81,39.78a20.09,20.09,0,0,0-2.9,10.29c0,5,.07,9.9.16,14.84a.63.63,0,0,0,1.25,0Z" transform="translate(-1.78 -1.34)"/>
        <path class="cls-8" d="M5.66,65.54H63.4a.63.63,0,0,0,0-1.25H5.66a.63.63,0,0,0,0,1.25Z" transform="translate(-1.78 -1.34)"/>
        <path class="cls-8" d="M38.43,41.68c-1.76-1.68-4.79-1-6.85-.35-1,.32-4.75,1.48-4.22,3.12.32,1,2.07.72,2.83.89a2.54,2.54,0,0,1,2.16,2.53c.09,2.5-1.18,5-1.94,7.33-.55,1.67-1.42,4.28.2,5.65s4.57.49,6.36-.15a22.15,22.15,0,0,0,3.33-1.5,7.65,7.65,0,0,0,2.05-1.46c.52-.61.37-1.42-.51-1.51-1.26-.13-2.52.58-3.76,0s-1.1-2-.93-3.08a30.19,30.19,0,0,1,1.17-4.26c.65-2.11,1.87-5.28.11-7.18-.55-.59-1.43.29-.88.88,1.27,1.38.11,4.18-.35,5.68-.63,2-1.58,4.29-1.36,6.46.25,2.47,2.43,3.18,4.64,2.92a4.56,4.56,0,0,0,1.27-.15c.08-.09-.41-.57-.3-.59-.08,0-.26.25-.32.3a11.4,11.4,0,0,1-2.22,1.34c-1.86.93-4.19,1.94-6.33,1.76s-1.7-2.19-1.29-3.7c.62-2.23,1.62-4.34,2.09-6.61.39-1.9.37-4.13-1.46-5.29A5.06,5.06,0,0,0,29.81,44c-.31,0-.62-.06-.93-.09s-.46-.2-.41.13.35-.05.64-.25a8.65,8.65,0,0,1,1.38-.73A13.85,13.85,0,0,1,34.21,42c1.08-.15,2.49-.22,3.34.58C38.13,43.12,39,42.24,38.43,41.68Z" transform="translate(-1.78 -1.34)"/>
        <path class="cls-8" d="M37.41,35.41a2.41,2.41,0,1,1-2-2.38,2.44,2.44,0,0,1,2,2.38.63.63,0,0,0,1.25,0A3.72,3.72,0,0,0,36.25,32a3.68,3.68,0,0,0-4,1.08A3.65,3.65,0,0,0,35.71,39a3.69,3.69,0,0,0,2.95-3.58A.63.63,0,0,0,37.41,35.41Z" transform="translate(-1.78 -1.34)"/>
    </g>
    </svg>
)

const Contact = () => (
    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" width="100%" height="100%" viewBox="-3 -3 58.17 57.46">
        <g id="Warstwa_2" data-name="Warstwa 2">
            <path  style={Styles().fill} d="M16.06,25.6c.14-.43.3-.85.46-1.27-.34.87.06-.1.12-.23s.23-.48.36-.72A15.38,15.38,0,0,1,17.82,22c.15-.23.3-.45.46-.67-.49.66.21-.18.33-.31a6.28,6.28,0,0,1,.54-.49c-.65.52-.16.15,0,.05.47-.25-.85.21-.05.05l-.49.06c.33,0,.34,0,0,0l-.23,0c.39.12.33.09-.16-.08.71.57-.49-.64.17.11.13.16.3.32.44.47.27.33.3.35.09.08l.34.48c.88,1.28,1.7,2.61,2.48,4a14,14,0,0,1,1,1.84c-.18-.45,0,.17.06.21.08.25.14.5.2.76.09.45.1.51,0,.16a7.09,7.09,0,0,1,0,.8c.05-.62-.12.44-.13.49,0-.14.36-.63,0-.06-.14.24-.27.47-.42.69a9.33,9.33,0,0,0-1.58,3c-.76,3,.59,5.94,2.67,8.08a50.85,50.85,0,0,0,7.49,5.89c2.43,1.69,5.44,3.3,8.5,2.51a6.81,6.81,0,0,0,3.84-2.72,6.69,6.69,0,0,0,.68-1.15c.21-.45.37-.93.59-1.38-.44.91,0,.08,0-.07.2-.39.55-.54,0-.07.2-.15.48-.32-.2.13l-.42.18c.39-.09.23-.07-.5.06.54,0-.54-.08-.53-.08.62.15-.83-.52-.26-.13a3.72,3.72,0,0,0,.34.19c.44.25.85.54,1.28.81a30.66,30.66,0,0,0,7.72,3.42,5.43,5.43,0,0,0,1.15.35c.44,0-.87-.44-.35-.14s-.5-.47-.61-.59c-.46-.57.06.39-.32-.64.3.82-.07-.61,0,0v.15c.07-.51.05-.54,0-.1s-.14.41,0,0c-.08.16-.16.32-.25.47s-.32.52-.48.78c-.6,1,.22-.22-.2.3a15,15,0,0,1-1.4,1.48,6.82,6.82,0,0,0-.71.6s.9-.64.49-.38c-.15.09-.28.2-.43.29a10.64,10.64,0,0,1-.92.55c-.24.12-1.41.62-.46.25a19.75,19.75,0,0,1-3.48,1c-.07,0-.7.1-.17,0-.43,0-.85.08-1.28.11q-1.06,0-2.13,0l-.82-.06s-1.29-.16-.6,0c-.76-.12-1.53-.28-2.28-.47a25,25,0,0,1-3.48-1.17c.62.26-.07,0-.22-.11l-.77-.37c-.58-.29-1.15-.6-1.72-.93-.84-.49-1.66-1-2.46-1.57-.35-.25-.7-.49-1-.75-.18-.14-.38-.27-.55-.42.31.27.55.44.09.07-1.26-1-2.51-2-3.68-3.13-.75-.71-1.47-1.44-2.15-2.21-.42-.46-.82-.94-1.2-1.43.53.67-.13-.19-.19-.28-.2-.27-.39-.54-.57-.82a24.55,24.55,0,0,1-2-3.69c.3.68-.17-.45-.17-.47-.14-.36-.26-.71-.37-1.07a22.2,22.2,0,0,1-.58-2.27,18.73,18.73,0,0,1-.2-4.41c0-.16.1-.76,0,0,.06-.38.13-.76.21-1.13s.23-.88.36-1.31A3.77,3.77,0,0,0,13.44,21,3.82,3.82,0,0,0,8.83,23.6c-3.44,10.91,3.1,21.83,11.33,28.54A43.14,43.14,0,0,0,32,59.39a24.83,24.83,0,0,0,19-.22,15.1,15.1,0,0,0,4.21-2.91c2.51-2.41,4.85-5.94,4.18-9.58-.51-2.79-2.71-4-5.22-4.74a28.2,28.2,0,0,1-7-3.36c-2.52-1.51-5.58-1.51-7.71.71a6.82,6.82,0,0,0-1.24,1.82c-.21.45-.38.92-.59,1.38.38-.82.15-.33.06-.16l-.37.71c-.37.74.54-.48-.09.06.06-.05,1.12-.7.42-.35.55-.06.61-.08.18-.07.52.09.57.09.13,0l-.6-.19c.77.27-.28-.15-.37-.2a19.64,19.64,0,0,1-2-1.29c-1.34-.93-2.92-2.12-4-3-.6-.48-1.19-1-1.74-1.5-.2-.2-.39-.41-.58-.61-.4-.43.38.7-.08-.1-.11-.2-.44-1-.14-.11-.1-.29-.15-1-.11-.08,0-.5.24-.77-.07-.13.34-.69-.5.64.05-.11a10.55,10.55,0,0,0,1.71-10.09,28.35,28.35,0,0,0-2.83-5.4,22.48,22.48,0,0,0-3.35-4.57c-3-2.88-7.06-2.66-10.11,0-2.35,2.08-3.83,5.31-4.8,8.23a3.78,3.78,0,0,0,2.62,4.62A3.84,3.84,0,0,0,16.06,25.6Z" transform="translate(-7.89 -9.7)"/>
            <path  style={Styles().fill} d="M45.52,33.6A15.38,15.38,0,0,0,33.41,23.06a2.83,2.83,0,0,0-1.5-.06,2.78,2.78,0,0,0-1.39.44,3.76,3.76,0,0,0-1.35,5.13,3.61,3.61,0,0,0,2.24,1.72,12.17,12.17,0,0,1,3,.84l-.9-.38a11.85,11.85,0,0,1,2.59,1.53l-.76-.59a12.24,12.24,0,0,1,2,2l-.59-.76a11.9,11.9,0,0,1,1.59,2.71l-.38-.9c.12.29.23.59.33.88A4,4,0,0,0,40,37.84a3.84,3.84,0,0,0,2.89.37,3.79,3.79,0,0,0,2.62-4.61Z" transform="translate(-7.89 -9.7)"/>
            <path  style={Styles().fill} d="M53,32.72A21,21,0,0,0,31.21,16.06a3.82,3.82,0,0,0-3.75,3.75c.09,1.91,1.66,3.9,3.75,3.75.5,0,1,0,1.5,0s.79,0,1.18.06l.68.07-.48-.06.42.07a21.06,21.06,0,0,1,3.31.91c.73.25-.64-.33.12.05l.9.44a18.61,18.61,0,0,1,1.8,1.12l.38.28c-.34-.26-.34-.25,0,0s.47.42.69.63c.5.48,1,1,1.41,1.51l-.08-.1.31.44c.15.22.3.43.43.66a16.74,16.74,0,0,1,.84,1.49c.1.2.19.41.29.61.29.62-.34-.87,0,.07.15.4.29.81.41,1.22a16.41,16.41,0,0,1,.42,1.71,3.77,3.77,0,0,0,4.61,2.62A3.85,3.85,0,0,0,53,32.72Z" transform="translate(-7.89 -9.7)"/>
            <path  style={Styles().fill} d="M60.05,34.8a28.12,28.12,0,0,0-4.37-13,26.84,26.84,0,0,0-20.26-12,27.44,27.44,0,0,0-7.88.47,3.75,3.75,0,1,0,2,7.23l.68-.13.46-.07c.37-.07-.63.07-.55.08s.27,0,.39-.05a28.52,28.52,0,0,1,3.33-.13c.69,0,1.38.08,2.07.15.44,0-.09,0-.15,0l.52.08c.42.07.84.15,1.25.25a20.24,20.24,0,0,1,2.42.69,11.94,11.94,0,0,1,2,.84,23,23,0,0,1,2.52,1.51A10.13,10.13,0,0,1,46,22a22.32,22.32,0,0,1,1.68,1.69c.24.27.46.53.69.81s0,0-.06-.08c.13.18.27.36.39.54a24,24,0,0,1,2.12,3.67c.06.12.4.93.21.47s.12.32.16.44c.21.56.4,1.12.56,1.69a23.43,23.43,0,0,1,.67,2.87c0,.17,0,.35.09.52s-.13-1.1-.06-.43l.06.66a3.83,3.83,0,0,0,3.75,3.75c1.9-.09,3.92-1.66,3.75-3.75Z" transform="translate(-7.89 -9.7)"/>
            <path  style={Styles().fill} d="M41.91,38.35a3.75,3.75,0,1,0-3.75-3.75,3.8,3.8,0,0,0,3.75,3.75Z" transform="translate(-7.89 -9.7)"/>
        </g>
        <g id="Warstwa_2_kopia" data-name="Warstwa 2 kopia">
            <path class="cls-8" d="M13.05,24.77a15.22,15.22,0,0,1,3.35-6,3.32,3.32,0,0,1,2.68-1.22c1.31.19,2.24,1.53,2.93,2.53,1.67,2.41,4,5.46,4.16,8.49a5.47,5.47,0,0,1-1,3.5,7.11,7.11,0,0,0-1.27,2.26c-.47,1.91.57,3.71,1.87,5a46.14,46.14,0,0,0,6.86,5.41C34.35,46,36.58,47.46,38.75,47c2-.46,2.48-2.28,3.3-3.89,1.06-2.06,2.51-.93,3.94,0a27.26,27.26,0,0,0,7,3.11,3.94,3.94,0,0,1,1.82.73c.81.89.07,2.5-.4,3.34a12.08,12.08,0,0,1-3.85,4.19c-4.2,2.75-9.83,2.87-14.55,1.65a31.54,31.54,0,0,1-11.53-6,37.73,37.73,0,0,1-8.28-8.5C13,36.68,11.26,30.45,13.05,24.77c.24-.77-1-1.1-1.21-.34C8.73,34.31,15,43.92,22.36,49.93a38.44,38.44,0,0,0,10.47,6.44c5.21,2,11.37,2.43,16.55.1A12.55,12.55,0,0,0,53,54.06c1.64-1.58,3.7-4.09,3.38-6.54-.22-1.71-1.58-2.15-3-2.57a32.26,32.26,0,0,1-7.76-3.67c-1.31-.79-2.78-1-3.92.22-1.53,1.64-1.41,4.94-4.54,4.19a11.58,11.58,0,0,1-3.77-2c-1.58-1.1-3.13-2.27-4.63-3.47-1.82-1.46-4.68-3.81-3.15-6.43a12.21,12.21,0,0,0,1.7-3.11,7.85,7.85,0,0,0-.31-4.57,25.8,25.8,0,0,0-2.52-4.65,19.44,19.44,0,0,0-2.86-3.94C17,13.25,13,20.89,11.84,24.43,11.59,25.2,12.8,25.53,13.05,24.77Z" transform="translate(-7.89 -9.7)"/>
            <path class="cls-8" d="M42.51,34.43a12.33,12.33,0,0,0-9.93-8.35.64.64,0,0,0-.77.43.63.63,0,0,0,.43.77,11.14,11.14,0,0,1,9.06,7.48c.25.76,1.46.44,1.21-.33Z" transform="translate(-7.89 -9.7)"/>
            <path class="cls-8" d="M50,33.55A17.71,17.71,0,0,0,31.21,19.18c-.79.06-.8,1.31,0,1.25a17,17,0,0,1,11,3.05,16.6,16.6,0,0,1,6.56,10.41c.15.79,1.36.45,1.21-.34Z" transform="translate(-7.89 -9.7)"/>
            <path class="cls-8" d="M56.93,34.8A24,24,0,0,0,35.42,12.92a24.53,24.53,0,0,0-7,.36c-.78.16-.45,1.37.34,1.21a23,23,0,0,1,14.81,2A22.64,22.64,0,0,1,54.81,30.35a22.32,22.32,0,0,1,.87,4.45c.06.79,1.31.8,1.25,0Z" transform="translate(-7.89 -9.7)"/>
            <path class="cls-8" d="M41.91,35.22a.63.63,0,0,0,0-1.25.63.63,0,0,0,0,1.25Z" transform="translate(-7.89 -9.7)"/>
        </g>
    </svg>
)

const Projects = () => (
    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" width="100%" height="100%" viewBox="-3 -3 79.36 76.96">
        <g id="Warstwa_2_kopia" data-name="Warstwa 2 kopia">
            <path  style={Styles().fill} d="M55.35,63.68H14.68l3.75,3.75V4L14.68,7.72H55.35L51.6,4V67.43a3.75,3.75,0,0,0,7.5,0V4A3.8,3.8,0,0,0,55.35.22H14.68A3.8,3.8,0,0,0,10.93,4V67.43a3.8,3.8,0,0,0,3.75,3.75H55.35a3.75,3.75,0,0,0,0-7.5Z" transform="translate(2.17 -0.22)"/>
            <path  style={Styles().fill} d="M57.06,9.91,66.48,12,63.86,7.35q-5,23-10,46a3.75,3.75,0,0,0,7.24,2q5-23,10-46a3.81,3.81,0,0,0-2.62-4.61L59.06,2.68a3.82,3.82,0,0,0-4.62,2.61,3.81,3.81,0,0,0,2.62,4.62Z" transform="translate(2.17 -0.22)"/>
            <path  style={Styles().fill} d="M16.15,49.77Q10.66,29.5,5.19,9.24L2.57,13.85l10.73-3a3.81,3.81,0,0,0,2.62-4.61,3.8,3.8,0,0,0-4.61-2.62L.58,6.62A3.81,3.81,0,0,0-2,11.23l11,40.53a3.75,3.75,0,0,0,7.24-2Z" transform="translate(2.17 -0.22)"/>
            <rect  style={Styles().fill} x="21.29" y="52.87" width="2" height="2" rx="1"/>
            <rect  style={Styles().fill} x="27.58" y="40.44" width="24.72" height="1.71" rx="0.85"/>
            <path  style={Styles().fill} d="M48.28,31.25H23a5.2,5.2,0,0,0-.79,0s.25,0,.3.05a4.25,4.25,0,0,0,.39.25c.37.17-.18-.38,0,0,.1.2.26.7.3.62.14-.24,0-.94,0-1.22V15.57a14.74,14.74,0,0,0,0-2.82c.25.11-.62,1.05-.29.71s-.51.53-.71.29c0,0,.13,0,.15,0a5.34,5.34,0,0,0,1.13,0H46.7c.43,0,.88,0,1.3,0,0,0,.23,0,.26,0s.19.45-.14,0a4.65,4.65,0,0,0-.55-.28c-.29-.14.15.3,0,0-.33-.68-.3-.91-.3-.18V28.06a29.52,29.52,0,0,0,0,4s0,.19,0,.2c-.2-.13.34-.74.4-.83-.21.3-.4.14,0,0s.3-.17.6-.19a3.75,3.75,0,0,0,0,7.5,6.71,6.71,0,0,0,6.5-7V13.52c0-3.18-1.54-6.18-4.83-7a15.11,15.11,0,0,0-3.86-.22H32.76c-3.46,0-6.93-.07-10.4,0a6.65,6.65,0,0,0-6.67,6.57c0,1.33,0,2.68,0,4v13.6c0,2.25.08,4.33,1.69,6.16s3.74,2.15,6,2.15H48.28a3.75,3.75,0,0,0,0-7.5Z" transform="translate(2.17 -0.22)"/>
            <text  style={Styles().fill} transform="translate(25.4 29.44)">R<tspan class="cls-4" x="11.36" y="0">G</tspan></text>
            <path  style={Styles().fill} d="M20.12,48.78h0a1,1,0,0,1,0-2h0a1,1,0,1,1,0,2Z" transform="translate(2.17 -0.22)"/>
            <path  style={Styles().fill} d="M20.12,42.47h0a1,1,0,0,1,0-2h0a1,1,0,1,1,0,2Z" transform="translate(2.17 -0.22)"/>
            <path  style={Styles().fill} d="M49.28,48.63h-23a.85.85,0,1,1,0-1.7h23a.85.85,0,0,1,0,1.7Z" transform="translate(2.17 -0.22)"/>
            <rect  style={Styles().fill} x="27.58" y="53.02" width="24.72" height="1.71" rx="0.85"/>
            <rect  style={Styles().fill} x="21.82" y="59.13" width="30.48" height="1.71" rx="0.85"/>
        </g>
        <g id="Warstwa_2_kopia_2" data-name="Warstwa 2 kopia 2">
            <path class="cls-8" d="M55.35,66.8H14.68l.62.63V4l-.62.62H55.35L54.73,4V67.43a.63.63,0,0,0,1.25,0V4a.64.64,0,0,0-.63-.63H14.68a.64.64,0,0,0-.63.63V67.43a.64.64,0,0,0,.63.62H55.35A.63.63,0,0,0,55.35,66.8Z" transform="translate(2.17 -0.22)"/>
            <path class="cls-8" d="M57.89,6.89,67.31,9l-.43-.77q-5,23-10,46c-.17.78,1,1.12,1.2.33q5-23,10-46a.63.63,0,0,0-.43-.77l-9.42-2c-.79-.17-1.12,1-.34,1.2Z" transform="translate(2.17 -0.22)"/>
            <path class="cls-8" d="M13.13,50.6l-11-40.53-.44.77,10.73-3a.63.63,0,0,0-.33-1.21l-10.73,3A.64.64,0,0,0,1,10.4q5.48,20.27,11,40.53a.62.62,0,0,0,1.2-.33Z" transform="translate(2.17 -0.22)"/>
            <rect class="cls-8" x="21.29" y="52.87" width="2" height="2" rx="1"/>
            <rect class="cls-8" x="27.58" y="40.44" width="24.72" height="1.71" rx="0.85"/>
            <path class="cls-8" d="M48.28,34.38H23c-1.47,0-2.85-.43-2.93-2.22-.17-3.41,0-6.87,0-10.28,0-3-.19-6.11,0-9.13.12-2.07,1.86-2.13,3.4-2.13H46.7c1.19,0,2.57-.19,3.33,1,.63.94.37,2.56.37,3.64v6.17c0,3.55.14,7.12,0,10.67a2.21,2.21,0,0,1-2.12,2.33c-.8,0-.81,1.29,0,1.24,2.22-.13,3.37-1.81,3.37-3.9V13.52c0-1.78-.58-3.54-2.53-4a12.78,12.78,0,0,0-3-.11H32.76c-3.46,0-6.93-.07-10.4,0a3.48,3.48,0,0,0-3.54,3.45c-.05,1.33,0,2.68,0,4v13.6c0,1.37-.17,2.82.77,3.95s2.35,1.23,3.76,1.23H48.28A.62.62,0,0,0,48.28,34.38Z" transform="translate(2.17 -0.22)"/>
            <text class="cls-8" transform="translate(25.4 29.44)">R<tspan class="cls-4" x="11.36" y="0">G</tspan></text>
            <path class="cls-8" d="M20.12,48.78h0a1,1,0,0,1,0-2h0a1,1,0,1,1,0,2Z" transform="translate(2.17 -0.22)"/>
            <path class="cls-8" d="M20.12,42.47h0a1,1,0,0,1,0-2h0a1,1,0,1,1,0,2Z" transform="translate(2.17 -0.22)"/>
            <path class="cls-8" d="M49.28,48.63h-23a.85.85,0,1,1,0-1.7h23a.85.85,0,0,1,0,1.7Z" transform="translate(2.17 -0.22)"/>
            <rect class="cls-8" x="27.58" y="53.02" width="24.72" height="1.71" rx="0.85"/>
            <rect class="cls-8" x="21.82" y="59.13" width="30.48" height="1.71" rx="0.85"/>
        </g>
    </svg>
)

const Skills = () => (
    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" width="100%" height="100%" viewBox="-3 -3 56.83 61.47">
        <g id="Warstwa_1_kopia" data-name="Warstwa 1 kopia">
            <path  style={Styles().fill} d="M45.82,17.81a8.76,8.76,0,0,0,1-3.39,4.46,4.46,0,0,0-1-2.68A6,6,0,0,1,45,10.53l.51,1.9,0-.2L45,14.13c-.67,1.11-.33.43,0,.06s1-.68-.07,0l-1.89.51.19,0-1.89-.51a16.91,16.91,0,0,1,1.77,1.28,4.51,4.51,0,0,0,4.24.05l1-.46c1.47-.64,2.78-1.37,3.22-3.12A17.52,17.52,0,0,1,52,9.72l-1,1.65.14-.12-1.65,1c-1.33.33-.61.09-.07.09s1.21.22-.06-.09l-1.66-1,.15.12-1-1.65a13,13,0,0,1,.35,2.16c.4,1.77,1.75,2.49,3.21,3.13,1.71.75,3.5,1.55,5.28.41a14.44,14.44,0,0,1,1.77-1.28l-1.89.51.19,0L54,14.16c-1.11-.68-.44-.33-.07,0s.69,1,0-.06l-.51-1.9v.2l.51-1.9a13.73,13.73,0,0,1-1.27,1.78c-1,1.51-.57,3,.05,4.5.69,1.67,1.36,3.42,3.38,3.88a13,13,0,0,1,2.16.35l-1.66-1,.13.15-1-1.66c-.33-1.32-.09-.61-.09-.06s-.22,1.2.09-.07l1-1.66-.13.15,1.66-1a15.44,15.44,0,0,1-2.16.35c-2,.45-2.69,2.2-3.38,3.87-.62,1.48-1,3-.05,4.51a13.63,13.63,0,0,1,1.27,1.77l-.51-1.89v.19l.51-1.89c.67-1.11.33-.44,0-.07s-1,.68.07,0l1.89-.52-.19,0,1.89.51a14.35,14.35,0,0,1-1.77-1.27c-1.78-1.14-3.57-.35-5.28.4-1.46.64-2.81,1.37-3.21,3.13a13,13,0,0,1-.35,2.16l1-1.65-.15.13,1.66-1c1.32-.32.61-.09.06-.09s-1.2-.22.07.09l1.65,1-.14-.13,1,1.65a15.44,15.44,0,0,1-.35-2.16c-.43-1.76-1.74-2.49-3.22-3.13l-1-.45a4.53,4.53,0,0,0-4.25,0,18.64,18.64,0,0,1-1.78,1.28l1.89-.51-.19,0,1.89.52c1.11.67.44.33.07,0s-.68-1,0,.07l.52,1.89,0-.19L45,26.46a13.54,13.54,0,0,1,1.28-1.78c.95-1.49.57-3,0-4.49-.68-1.68-1.36-3.43-3.38-3.88A14,14,0,0,1,40.7,16l1.65,1-.13-.15,1,1.65c.32,1.33.09.62.09.08s.22-1.2-.09.07l-1,1.66.12-.15-1.65,1a6.15,6.15,0,0,1,1.55-.28,4.66,4.66,0,0,0,3.19-2.07c1.19-1.58.3-4.26-1.34-5.13A3.85,3.85,0,0,0,39,14.92l-.13.17,1.34-1.34c1.37-.59.18-.22-.3-.15-.32.05-.65.07-1,.15-2.35.53-3.13,2.72-3.13,4.85s.9,4.2,3.16,4.67a11.81,11.81,0,0,1,2.14.36L38.84,21.9c0,.07-.4-1-.2-.6l.12.29.31.77a6.71,6.71,0,0,0,.32.78,1.19,1.19,0,0,0,.08.2A22.66,22.66,0,0,0,39.75,21a5.67,5.67,0,0,0-1,1.29,4.1,4.1,0,0,0-.44,4c.74,1.75,2.91,3.67,4.84,3.63a4.51,4.51,0,0,0,2.68-1c.41-.31,1.84-1.11.4-.53h-2c-.7-.11-.88-.43-.32-.19l.79.34c.47.21,1.76,1,.57.05l-1-1.65a12.14,12.14,0,0,1,.36,2.17c.51,2.29,2.68,3.13,4.77,3.13s4.26-.83,4.77-3.13a13.1,13.1,0,0,1,.36-2.17l-1,1.65c-.08.07-.76.41-.49.41a.62.62,0,0,0,.22-.1c.28-.1.55-.24.82-.36l.75-.33c.52-.22.58.05-.28.18h-2c-1.36-.55-.28,0,.11.3a9,9,0,0,0,.79.59c2,1.29,4.13.37,5.63-1.13s2.41-3.62,1.13-5.63c-.18-.27-.4-.52-.59-.78s-.87-1.48-.31-.11v2a4.88,4.88,0,0,1,.44-1.21l.32-.77c.22-.53.47-.4-.07.31l-2.24,1.73A11.85,11.85,0,0,1,60,23.27c2.29-.51,3.13-2.68,3.13-4.77s-.83-4.26-3.13-4.77a12.77,12.77,0,0,1-2.17-.36l2.24,1.72c-.06-.07.42,1,.2.61a1.6,1.6,0,0,1-.1-.23c-.12-.27-.23-.56-.35-.84a4.88,4.88,0,0,1-.44-1.21v2c-.56,1.37,0,.29.31-.1s.41-.52.59-.79c1.28-2,.36-4.13-1.13-5.63s-3.63-2.41-5.63-1.13a9,9,0,0,0-.79.59c-.39.3-1.47.85-.11.31h2c.26,0,1,.46.35.2l-.82-.36c-.46-.2-1.75-1-.55-.05l1,1.66a13.05,13.05,0,0,1-.36-2.18c-.51-2.29-2.67-3.13-4.77-3.13s-4.25.83-4.77,3.13a12.1,12.1,0,0,1-.36,2.18l1-1.66c1.21-.95-.11-.15-.57.05L44,8.82l-.29.12c-.37.15,0-.2.54-.28h2c.07,0,.79.48.59.21a1.71,1.71,0,0,0-.27-.2l-.65-.49a4.54,4.54,0,0,0-2.66-1c-2-.05-4.17,1.84-4.93,3.64s.1,3.77,1.38,5.21c.69.78.19-3.2-.3-2.21-.12.24-.21.51-.31.75l-.52,1.28c-.74,1.82.8,4.2,2.62,4.61A3.86,3.86,0,0,0,45.82,17.81Z" transform="translate(-12.34 -3.89)"/>
            <path  style={Styles().fill} d="M50.43,18.5c0,.21,0,.43,0,.65l.14-1a5.57,5.57,0,0,1-.34,1.21l.38-.9a5.39,5.39,0,0,1-.63,1.06l.58-.76a5.68,5.68,0,0,1-.77.78l.75-.59a5,5,0,0,1-1.05.63l.9-.38a5.34,5.34,0,0,1-1.21.34l1-.13a5.65,5.65,0,0,1-1.3,0l1,.13a5.06,5.06,0,0,1-1.21-.34l.9.38A5.39,5.39,0,0,1,48.45,19l.76.59a5.75,5.75,0,0,1-.78-.78l.59.76a5.39,5.39,0,0,1-.63-1.06l.38.9a5.06,5.06,0,0,1-.34-1.21l.13,1a5.65,5.65,0,0,1,0-1.3l-.13,1a5.34,5.34,0,0,1,.34-1.21l-.38.9A5,5,0,0,1,49,17.48l-.59.75a5.68,5.68,0,0,1,.78-.77l-.76.58a5.39,5.39,0,0,1,1.06-.63l-.9.38a5.57,5.57,0,0,1,1.21-.34l-1,.14a4.72,4.72,0,0,1,1.3,0l-1-.14a5.91,5.91,0,0,1,1.21.34l-.9-.38a5,5,0,0,1,1.05.63l-.75-.58a5.6,5.6,0,0,1,.77.77l-.58-.75a5,5,0,0,1,.63,1.05l-.38-.9a5.91,5.91,0,0,1,.34,1.21l-.14-1c0,.21,0,.43,0,.65a3.91,3.91,0,0,0,1.09,2.65,3.75,3.75,0,0,0,6.41-2.65,8.36,8.36,0,0,0-1.42-4.66,9,9,0,0,0-4.35-3.35,8.39,8.39,0,0,0-9,2.39,9.4,9.4,0,0,0-1.63,2.76,8.4,8.4,0,0,0,.65,7.16A8.31,8.31,0,0,0,45.66,26a9.74,9.74,0,0,0,3.16.88,8.69,8.69,0,0,0,2.49-.17,7.36,7.36,0,0,0,2.46-1,7.64,7.64,0,0,0,2-1.61,8.81,8.81,0,0,0,2.19-5.66,3.75,3.75,0,0,0-7.5,0Z" transform="translate(-12.34 -3.89)"/>
        </g>
        <g id="Warstwa_4_kopia_2" data-name="Warstwa 4 kopia 2">
            <path  style={Styles().fill} d="M49.66,28c0,.29,0,.59-.06.89,0,.48.13-.58,0,.13-.1.46-.18.92-.31,1.37s-.21.7-.33,1.05-.31.72-.07.22c-.12.25-.23.49-.36.73A25.69,25.69,0,0,1,47,34.79c-.27.39-.54.79-.82,1.18,0,.08-.56.73-.26.36s-.36.41-.34.39c-1.19,1.37-2.79,2.49-3.61,4.15a10.31,10.31,0,0,0-1,3.76c0,.33,0,.65,0,1s-.2,2,0,.54A4.15,4.15,0,0,0,41.35,49a3.82,3.82,0,0,0,2.24,1.72c1.78.41,4.31-.54,4.61-2.62a16.32,16.32,0,0,0,.26-2.88c0-.71-.13.3,0-.07.06-.21.1-.43.16-.64s.11-.32.15-.48c.12-.47-.38.77-.07.23s-.51.47-.18.2a4.17,4.17,0,0,0,.36-.37c.3-.3.61-.58.91-.87a25.69,25.69,0,0,0,2.58-3A22,22,0,0,0,57.16,28a3.77,3.77,0,0,0-3.75-3.75A3.84,3.84,0,0,0,49.66,28Z" transform="translate(-12.34 -3.89)"/>
            <path  style={Styles().fill} d="M28.4,47.18c-.06-2.18.07-4.36-1.06-6.31a21.1,21.1,0,0,0-3.13-3.67c-.26-.28-.52-.57-.79-.85l-.72-.79c-.42-.48.24.36-.13-.15a19.24,19.24,0,0,1-1.63-2.95c.4.83-.05-.16-.13-.38l-.21-.58a18,18,0,0,1-.53-2c0-.17-.22-1.56-.15-.8-.05-.52-.09-1-.1-1.55a14.82,14.82,0,0,1,.17-3,16.9,16.9,0,0,1,.39-1.71c.1-.38.22-.76.34-1.13.06-.18.12-.36.19-.54s.44-1,.08-.23a19.57,19.57,0,0,1,1.45-2.71c.11-.18.81-1.14.52-.77a15.69,15.69,0,0,1,1.34-1.48c.37-.37.76-.7,1.15-1,.66-.56-.49.33.06,0a22.72,22.72,0,0,1,2.6-1.57,15.25,15.25,0,0,1,3.78-1.24c.26-.06.53-.1.79-.15-.69.12.38,0,.43,0,.48,0,1-.06,1.44-.07a14.92,14.92,0,0,1,6.08,1.31c1.82.75,4.21-.82,4.62-2.62a3.86,3.86,0,0,0-2.62-4.61C33.07,1.47,21.52,5.37,16,14a23.49,23.49,0,0,0-.48,24.27A25,25,0,0,0,19.38,43a16.11,16.11,0,0,1,1.23,1.25c-.22-.28.17.26.17.26a4.91,4.91,0,0,1,.28.5c-.26-.68-.34-.86-.24-.53.21.64.11-.13,0-.22a5.39,5.39,0,0,1,0,1.06c0,.62,0,1.24,0,1.86a3.75,3.75,0,0,0,7.5,0Z" transform="translate(-12.34 -3.89)"/>
            <path  style={Styles().fill} d="M44.82,43.4H24.59a3.75,3.75,0,1,0,0,7.5H44.82a3.75,3.75,0,0,0,0-7.5Z" transform="translate(-12.34 -3.89)"/>
            <path  style={Styles().fill} d="M23.3,44.52a6.09,6.09,0,0,0-1.12,1.32,6.22,6.22,0,0,0-.73,1.57,2.13,2.13,0,0,0-.1.42,8.36,8.36,0,0,0-.17,1.32,5.86,5.86,0,0,0,.24,1.77,6.51,6.51,0,0,0,2.9,3.71,2.78,2.78,0,0,0,1.39.44,3.32,3.32,0,0,0,2.77-.73,2.91,2.91,0,0,0,1-1.06,3.79,3.79,0,0,0,.38-2.89,3.87,3.87,0,0,0-1.73-2.24L27.86,48l.75.59a3.08,3.08,0,0,1-.51-.51l.59.75a2.08,2.08,0,0,1-.32-.54l.37.9a2.88,2.88,0,0,1-.17-.64l.13,1a3.42,3.42,0,0,1,0-.64l-.13,1a2.66,2.66,0,0,1,.18-.67l-.38.9a3,3,0,0,1,.32-.55l-.59.76a3.38,3.38,0,0,1,.5-.5,4.14,4.14,0,0,0,1.1-2.65,4.14,4.14,0,0,0-1.1-2.66A3.75,3.75,0,0,0,26,43.43l-1,.13a3.8,3.8,0,0,0-1.66,1Z" transform="translate(-12.34 -3.89)"/>
            <path  style={Styles().fill} d="M43,47.64H26.21a3.75,3.75,0,1,0,0,7.5H43a3.75,3.75,0,0,0,0-7.5Z" transform="translate(-12.34 -3.89)"/>
            <path  style={Styles().fill} d="M24.3,48.74a6.12,6.12,0,0,0-1.13,1.31,6.56,6.56,0,0,0-.72,1.57,3,3,0,0,0-.11.43,9.56,9.56,0,0,0-.16,1.31,6,6,0,0,0,.24,1.78,6.48,6.48,0,0,0,2.9,3.7,2.7,2.7,0,0,0,1.39.45,2.84,2.84,0,0,0,1.5-.07,2.74,2.74,0,0,0,1.27-.67,2.8,2.8,0,0,0,1-1,3.8,3.8,0,0,0,.38-2.89,3.91,3.91,0,0,0-1.73-2.24l-.25-.17.76.59a3.58,3.58,0,0,1-.51-.52l.58.76a2.9,2.9,0,0,1-.31-.54l.37.9a2.88,2.88,0,0,1-.17-.64l.13,1a3.32,3.32,0,0,1,0-.63l-.13,1a2.55,2.55,0,0,1,.18-.67l-.38.89a3,3,0,0,1,.32-.54l-.59.76a3,3,0,0,1,.5-.51,2.78,2.78,0,0,0,.78-1.2,2.88,2.88,0,0,0,.32-1.45A2.85,2.85,0,0,0,30.38,50a2.75,2.75,0,0,0-.78-1.21A3.76,3.76,0,0,0,27,47.64l-1,.14a3.64,3.64,0,0,0-1.65,1Z" transform="translate(-12.34 -3.89)"/>
            <path  style={Styles().fill} d="M41.21,51.86h-14a3.75,3.75,0,1,0,0,7.5h14a3.75,3.75,0,0,0,0-7.5Z" transform="translate(-12.34 -3.89)"/>
        </g>
        <g id="Warstwa_1" data-name="Warstwa 1">
            <path class="cls-8" d="M42.81,17c.26-.65.57-1.3.8-2a1.53,1.53,0,0,0-.41-1.62,4.34,4.34,0,0,0-.68-.9.62.62,0,0,1-.15-.2c.08.24,0,.15.21,0s.48-.65.75-.76c-.31.13.14.29.39.48.56.42,1.15,1.09,1.93.88a13.72,13.72,0,0,0,1.81-.78c.59-.26,1-.43,1.2-1.12a11.16,11.16,0,0,0,.16-1.14c0-.29.25-.77-.06-.63a4.26,4.26,0,0,1,1.07,0c.14,0,.38.07.27-.05s0,.16-.05.2a4.39,4.39,0,0,0,.39,2.1c.35.53,1.27.74,1.81,1s1.26.7,1.94.34,1-.9,1.58-1.19c0,0-.27-.12-.12,0a6.09,6.09,0,0,1,.44.44,2.45,2.45,0,0,0,.36.36c.27.18,0,.1.09,0-.29.58-.88,1-1.19,1.58s.06,1.35.33,2,.44,1.49,1.12,1.74a6.22,6.22,0,0,0,2,.3c.19,0,.12.05,0-.14a1.62,1.62,0,0,1,0,.44c0,.2,0,.42,0,.62s-.11.3.1.19a10.3,10.3,0,0,1-1.95.28c-.71.18-.87.83-1.12,1.43s-.77,1.36-.63,2a4.32,4.32,0,0,0,1.2,1.76.59.59,0,0,1,.15.2c-.07-.22.12-.19-.15,0s-.5.69-.81.81c.32-.12-.07-.24-.31-.42s-.62-.5-1-.72a1.53,1.53,0,0,0-1.67.05,8.63,8.63,0,0,0-1.95.9c-.57.46-.52,1.38-.61,2.05,0,.27-.23.59.08.45-.29.14-.82-.05-1.14,0s-.21-.1-.11.1a.53.53,0,0,1,0-.25,5.73,5.73,0,0,0-.18-1.29,1.43,1.43,0,0,0-.9-1.29,18.6,18.6,0,0,0-2-.87c-.75-.26-1.14.1-1.72.53l-.88.67c-.15.11.13.09.09.06a2.59,2.59,0,0,1-.4-.41,3.41,3.41,0,0,0-.43-.42c-.23-.15,0-.17-.09,0a5.06,5.06,0,0,1,.6-.8c.39-.52.9-1,.71-1.71a12.94,12.94,0,0,0-.83-2.05c-.33-.69-.74-.79-1.45-.89a5.9,5.9,0,0,0-1.17-.17c-.06,0-.29-.08-.14.06s0-.19,0-.36-.11-.76,0-1c-.18.33.36.09.62.05.76-.11,1.48-.08,2-.73s-.6-1.27-1.07-.63c-.14.18-1.56.15-1.94.26-.9.27-.83,1.08-.83,1.84s0,1.45.9,1.67c.36.08.74.1,1.1.15.15,0,1,.24.71-.05a2.92,2.92,0,0,1,.36.89,3.9,3.9,0,0,1,.49,1.2c0,.35-.87,1.13-1.14,1.56-.45.77,0,1.29.56,1.81S43,27,43.79,26.54a6.47,6.47,0,0,0,.78-.6c.13-.09,1-.68.61-.64.21,0,.7.3.88.38a10.31,10.31,0,0,1,1.18.52c.29.17.13,0,.23.3a12.38,12.38,0,0,1,.2,1.36A1.21,1.21,0,0,0,49,29.07c.66,0,1.7.17,2.12-.48s.13-1.5.39-2.15c.1-.25,0-.13.31-.28l1.35-.59a2.81,2.81,0,0,1,.47-.21c.29-.08-.12-.05,0,0,.33.22.64.48,1,.72.62.47,1.18.87,1.91.28.44-.36,1.23-1,1.3-1.63s-.69-1.41-1.08-1.93c-.2-.26-.24-.25-.22-.42A5.35,5.35,0,0,1,57,21.17c.07-.18.16-.36.23-.55s.15-.14,0-.09a5.6,5.6,0,0,1,1-.14c.74-.11,1.59-.09,1.79-1a4.36,4.36,0,0,0,0-2c-.31-.79-1.32-.74-2-.83-.09,0-.83-.11-.67,0s0-.07-.08-.25-.18-.43-.28-.65a4.08,4.08,0,0,1-.46-1.11A2.66,2.66,0,0,1,56.8,14c.4-.52,1.18-1.21,1-1.95a4.05,4.05,0,0,0-1.3-1.49c-.78-.62-1.39-.07-2,.41a6.6,6.6,0,0,1-.85.65c.06,0,.31.09,0,0a6,6,0,0,1-.58-.26c-.41-.18-.85-.33-1.24-.54s-.2,0-.27-.38c-.11-.63,0-1.63-.47-2.15s-1.56-.4-2.19-.36c-.85.07-1,.63-1.16,1.37a5.41,5.41,0,0,1-.18,1.27c-.09.24,0,.15-.34.29l-1.14.5c-.19.08-.39.16-.57.25s-.16,0,0,0c-.58-.31-1-.88-1.59-1.2-.88-.47-1.45.29-2,.85s-.83,1-.39,1.74c.3.48,1.11,1.17,1.06,1.59a8.85,8.85,0,0,1-.83,2C41.3,17.39,42.51,17.72,42.81,17Z" transform="translate(-12.34 -3.89)"/>
            <path class="cls-8" d="M53.55,18.5a4.08,4.08,0,1,1-3.34-4,4.11,4.11,0,0,1,3.34,4,.63.63,0,0,0,1.25,0,5.41,5.41,0,0,0-3.47-5,5.33,5.33,0,0,0-6.44,7.72A5.33,5.33,0,0,0,54.8,18.5.63.63,0,0,0,53.55,18.5Z" transform="translate(-12.34 -3.89)"/>
        </g>
        <g id="Warstwa_4" data-name="Warstwa 4">
            <path class="cls-8" d="M52.79,28a18.43,18.43,0,0,1-5,10.93c-1,1.15-2.47,2.11-3.13,3.52s-.49,3-.71,4.53c-.12.79,1.09,1.13,1.2.33.22-1.51,0-3.22.78-4.59a8.92,8.92,0,0,1,1.58-1.67,22.53,22.53,0,0,0,2.09-2.38c2.42-3.21,4.18-6.6,4.4-10.67,0-.8-1.21-.8-1.25,0Z" transform="translate(-12.34 -3.89)"/>
            <path class="cls-8" d="M25.27,47.18c0-1.58.19-3.32-.63-4.73a17.36,17.36,0,0,0-2.64-3,18.65,18.65,0,0,1-4.95-9.12c-1.61-7.94,2.16-16.47,9.48-20.12a18,18,0,0,1,14.93-.51c.75.31,1.07-.9.34-1.2a19.17,19.17,0,0,0-23.14,7.09,20.33,20.33,0,0,0-.48,21.11,21.42,21.42,0,0,0,3.41,4.13,7.78,7.78,0,0,1,2.24,2.86A13.4,13.4,0,0,1,24,47.18a.63.63,0,0,0,1.25,0Z" transform="translate(-12.34 -3.89)"/>
            <path class="cls-8" d="M44.82,46.52H24.59a.63.63,0,0,0,0,1.25H44.82a.63.63,0,0,0,0-1.25Z" transform="translate(-12.34 -3.89)"/>
            <path class="cls-8" d="M25.51,46.73a3.17,3.17,0,0,0-1.07,3.36,3.26,3.26,0,0,0,1.46,1.84.63.63,0,0,0,.63-1.08l-.17-.11c-.14-.09.09.08,0,0l-.17-.15L26,50.39l-.07-.09c.09.12,0,0,0,0a1.75,1.75,0,0,1-.16-.27s-.07-.14,0-.07,0-.1,0-.12a1.67,1.67,0,0,1-.08-.32c0-.18,0,.1,0-.09v-.35s0-.14,0,0a2.22,2.22,0,0,1,.09-.37l.06-.18c0,.08,0,0,0-.05a3,3,0,0,1,.18-.3c.09-.15-.06.06,0-.08l.13-.14a1.87,1.87,0,0,1,.3-.26.65.65,0,0,0,0-.89.66.66,0,0,0-.89,0Z" transform="translate(-12.34 -3.89)"/>
            <path class="cls-8" d="M43,50.77H26.21a.63.63,0,0,0,0,1.25H43a.63.63,0,0,0,0-1.25Z" transform="translate(-12.34 -3.89)"/>
            <path class="cls-8" d="M26.51,51a3.16,3.16,0,0,0-1.08,3.35,3.36,3.36,0,0,0,1.46,1.85.63.63,0,0,0,.64-1.08L27.36,55c-.14-.1.09.08,0,0l-.17-.15a1.37,1.37,0,0,1-.17-.17l-.07-.09c.09.11,0,0,0,0s-.11-.18-.16-.27-.07-.15,0-.08,0-.09,0-.11-.06-.22-.09-.33,0,.1,0-.08v-.35s0-.15,0-.06a2.49,2.49,0,0,1,.09-.37l.06-.17c0,.07,0,0,0-.06a2.38,2.38,0,0,1,.18-.3c.09-.15-.07.06,0-.07l.13-.15.29-.26a.62.62,0,0,0,0-.88.64.64,0,0,0-.88,0Z" transform="translate(-12.34 -3.89)"/>
            <path class="cls-8" d="M41.21,55h-14a.63.63,0,0,0,0,1.25h14a.63.63,0,0,0,0-1.25Z" transform="translate(-12.34 -3.89)"/>
        </g>
    </svg>
)

const CircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" width="100%" height="100%" viewBox="-2 -2 74.22 74.15">
        <g id="Warstwa_2" data-name="Warstwa 2">
            <path  style={Styles().fill} d="M67.11,40c0,.76,0,1.52-.09,2.27,0,.4-.07.8-.11,1.21,0,.05-.07.61,0,.18l0,.35a30.73,30.73,0,0,1-1.07,4.43c-.22.69-.47,1.36-.73,2s.23-.51,0,0l-.2.45c-.16.35-.33.7-.51,1A30.26,30.26,0,0,1,62,55.93c-.08.12-.6.82-.39.54l-.52.65c-.49.58-1,1.15-1.53,1.7s-1,1-1.53,1.47l-.74.65-.37.31-.4.31-.54.39-1,.65c-.64.42-1.29.81-2,1.19s-1.26.67-1.91,1c-.17.07-1.16.49-.47.22l-1.09.41a30,30,0,0,1-4.36,1.23L44,66.84l-.51.08c.06,0,.59-.08.15,0-.81.09-1.61.16-2.42.19a33.72,33.72,0,0,1-4.71-.17c-.74-.07-.17,0,0,0L36,66.84l-1-.18c-.83-.17-1.65-.37-2.47-.6s-1.38-.42-2.06-.67L29.52,65c-.4-.16.08,0,.13.06l-.75-.34A31.23,31.23,0,0,1,25,62.6l-.82-.55-.53-.38s-.48-.36-.14-.11L23,61.15c-.34-.28-.67-.57-1-.86A29.55,29.55,0,0,1,19,57.12l-.52-.65c.21.28-.31-.42-.39-.54-.45-.62-.86-1.26-1.26-1.92s-.72-1.23-1-1.87c-.18-.34-.34-.69-.51-1S14.77,50,15,50.63a31.05,31.05,0,0,1-1.38-4.29q-.27-1.08-.45-2.16c0-.23-.07-.45-.11-.68,0,.06.08.59,0,.15s-.09-.8-.12-1.21a30.58,30.58,0,0,1,0-4.88c0-.35.06-.69.1-1,0-.05.07-.61,0-.18s0-.24.05-.35c.13-.78.29-1.56.48-2.33A31.05,31.05,0,0,1,15,29.37c-.23.59.06-.11.15-.32s.33-.7.51-1c.34-.69.71-1.36,1.11-2s.75-1.21,1.16-1.79c.19-.27.39-.53.58-.79-.43.58.29-.37.43-.53A30.55,30.55,0,0,1,22,19.71c.52-.48,1.07-.93,1.63-1.37-.56.43.24-.17.42-.29L25,17.4a30.38,30.38,0,0,1,4-2.23c.21-.09.91-.38.32-.15l.93-.36c.78-.29,1.58-.54,2.39-.77s1.41-.37,2.13-.51l1-.19.51-.08c.44-.07-.53.05.19,0a33.66,33.66,0,0,1,4.71-.17c.75,0,1.5.09,2.25.17s-.37-.08.36.05c.45.07.9.15,1.34.24a30,30,0,0,1,4.36,1.23l1.09.41c-.59-.23.11.06.32.15.7.32,1.39.67,2.06,1s1.24.72,1.84,1.1c.32.21.64.42.95.64l.4.29.27.2.65.52c.25.21.5.42.74.64.57.51,1.12,1,1.65,1.58s1,1.12,1.53,1.7c.21.25.42.51.62.77-.45-.58.28.4.39.55A29.91,29.91,0,0,1,64.32,28c.15.29.3.59.44.89s.48,1.13.22.47c.29.72.55,1.45.79,2.19A30.73,30.73,0,0,1,66.84,36c0,.17,0,.34.08.51,0-.15-.08-.72,0,0,0,.35.07.69.1,1,.07.81.09,1.62.1,2.44a3.75,3.75,0,0,0,7.5,0A35.06,35.06,0,0,0,51.69,7.43a34.75,34.75,0,0,0-38.24,10.4,35.28,35.28,0,0,0-8,19.73A34.47,34.47,0,0,0,10.31,57.8,34.6,34.6,0,0,0,74.12,45.66,38.38,38.38,0,0,0,74.61,40a3.75,3.75,0,0,0-7.5,0Z" transform="translate(-5.39 -5.4)"/>
        </g>
        <g id="Warstwa_2_kopia" data-name="Warstwa 2 kopia">
            <path class="cls-8" d="M70.23,40A30.54,30.54,0,0,1,50.37,68.41a30.24,30.24,0,0,1-36.28-44A30.53,30.53,0,0,1,46,10.36a30.54,30.54,0,0,1,23.84,24.8A31.37,31.37,0,0,1,70.23,40a.63.63,0,0,0,1.25,0A31.8,31.8,0,0,0,50.86,10.45,31.49,31.49,0,0,0,13,56.22a31.49,31.49,0,0,0,58.1-11.39A33.93,33.93,0,0,0,71.48,40,.63.63,0,0,0,70.23,40Z" transform="translate(-5.39 -5.4)"/>
        </g>
    </svg>
)

const CircleContact = () => {
    
    return(
        <div className="circle c-d">
            <div className="crcl-bg"/>
            <div className="i-col-info"><Trans>contact</Trans></div>
            <div className="crcl"><CircleIcon /></div>
            <div className="crcl-c"><Contact /></div>
        </div>
    )
}

const CircleSkills = () => {
    
    return(
        <div className="circle">
            <div className="crcl-bg"/>
            <div className="i-col-info"><Trans>skills</Trans></div>
            <div className="crcl"><CircleIcon /></div>
            <div className="crcl-c"><Skills /></div>
        </div>
    )
}

const CircleProject = () => {
    
    return(
        <div className="circle c-d">
            <div className="crcl-bg"/>
            <div className="i-col-info"><Trans>proj</Trans></div>
            <div className="crcl"><CircleIcon /></div>
            <div className="crcl-c"><Projects /></div>
        </div>
    )
}

const CircleAbout = () => {

    return(
        <div className="circle">
            <div className="i-col-info"><Trans>about</Trans></div>
            <div className="crcl"><CircleIcon /></div>
            <div className="crcl-bg"/>
            <div className="crcl-c"><About /></div>
        </div>
    )
}

const CircleIcons = () => {
    return <>
        <div className="i-col"><Link to="contact"><CircleContact /></Link></div>
        <div className="i-col"><Link to="skills"><CircleSkills /></Link></div>
        <div className="i-col"><Link to="projects"><CircleProject /></Link></div>
        <div className="i-col"><Link to="about"><CircleAbout /></Link></div>
    </>
}

export { CircleContact, CircleSkills, CircleProject, CircleAbout, CircleIcon }
export default CircleIcons;