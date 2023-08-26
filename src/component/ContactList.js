import React, {useState} from 'react'
//import '../styles/neonStyle.css'
import '../styles/contactList.css'
//import { Styles } from '../styles/neonStyles'

const GHIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" width="100%" height="100%" viewBox="-3 -3 49.83 54.8">
        <g id="Warstwa_3_kopia" className="neon-blur" data-name="Warstwa 3 kopia">
            <path d="M31.26,54.59c-.86,1.29-1.06,1.66-.61,1.11l.59-.76a5.57,5.57,0,0,0,.69-1.38,6.26,6.26,0,0,0,.38-2.31,22.42,22.42,0,0,0-.26-4.18,4.14,4.14,0,0,0-4-3.32,7.85,7.85,0,0,0-1.89.31c-.77.18.89-.07.25,0l-.72.06c-.32,0-.65,0-1,0-.78,0,.85.2,0,0-.28-.07-.55-.12-.82-.2s-.93-.46-.21-.05c-.18-.1-.89-.6-.26-.07l-.23-.21c-.25-.28-.28-.3-.08-.05a5.51,5.51,0,0,1,.26.54,12.06,12.06,0,0,0-1.84-3.78,8.24,8.24,0,0,0-1.46-1.76,7,7,0,0,0-1.3-.92c-.16-.09-.33-.17-.49-.24q-1.47-.8,1,1.91l-.51,1.89-.28.35-1.65,1c.62-.24-.5,0-.61,0,.36,0,.46.17.14,0l.33.18c.4.25.42.26.08,0l.19.21c-.29-.39-.37-.47-.22-.24a5.3,5.3,0,0,0,1,1.49,11.42,11.42,0,0,0,1.46,1.57A9,9,0,0,0,26.63,48c2.26-.25,4.37-.62,5.36-3a4.55,4.55,0,0,0,.38-1.71c0-.15.18-.82,0-.45-.1.18-.11.85-.43.89.1,0,.38-.36.47-.47a4.18,4.18,0,0,0,.5-5.56c-1.09-1.47-2.69-1.7-4.38-1.84a6.83,6.83,0,0,1-3.07-.65c-.26-.15-.52-.31-.77-.48.54.36,0,0-.18-.15-.4-.39-.78-.79-1.14-1.21.65.76-.08-.15-.23-.39s-.32-.54-.46-.82a7.61,7.61,0,0,1-.53-1.49c-.07-.29-.13-.59-.18-.89.15.84,0,0,0-.21a12.34,12.34,0,0,1,.17-3,14.89,14.89,0,0,1,.51-1.88c.06-.2.39-.88.05-.19,0,0,.38-.73.39-.72s-.59.76-.07.11a9.94,9.94,0,0,0,.75-1,5.8,5.8,0,0,0,.78-2.84,16,16,0,0,0-.72-3.82c.21.91,0-.23,0-.4,0,.59-.08.31,0,.08.23-.86.41-.49-.38.34l-1.62.7c-.42-.07-.48-.07-.18,0,.79.46,2,.83,3,1.51a6.61,6.61,0,0,0,6.19,1.11c.45-.17.86-.37,1.29-.56.72-.32-.62.15,0,0s1-.27,1.53-.39c.26-.06.73,0-.2,0,.27,0,.53-.05.79-.06a10,10,0,0,1,2.19.06,14.87,14.87,0,0,0,1.5.42c.53.06-.76-.36-.11,0,.27.13.55.24.82.36a6.29,6.29,0,0,0,4.06.33,8.37,8.37,0,0,0,2.72-1.36,10.27,10.27,0,0,1,1.44-.82A7.09,7.09,0,0,0,48.38,17c-.48.41-1.68-.17-2.07-.57,0,0-.72-1-.38-.52.13.18.11.91.07.15a8.42,8.42,0,0,1,0,.87c0,.5.32-.6-.08.19a7.57,7.57,0,0,0-.35,1,5.66,5.66,0,0,0-.06,3.31A10.46,10.46,0,0,0,47,23.89c.23.35.41.74.65,1.07.38.54-.43-.25-.13-.32a7.2,7.2,0,0,1,.24.68A11.83,11.83,0,0,1,48.1,27c.11.63,0-.9,0,.27,0,.33,0,.66,0,1A5.34,5.34,0,0,1,48,29.84c-.08.35-.18.7-.29,1,0,.1-.42,1-.17.47a15.35,15.35,0,0,1-1.12,2c-.59.94.4-.36-.34.45-.25.29-.51.56-.78.83,0,0-.94.78-.38.37-.3.22-.62.38-.93.59-.85.58.31-.06-.24.14a6.28,6.28,0,0,1-1.2.33c.63-.11-.17,0-.33,0-.42,0-.83,0-1.25,0a8.64,8.64,0,0,0-2.2.3,4,4,0,0,0-2,6.28,5.41,5.41,0,0,0,.54.6c.31.24.62.48.94.71l-.36-.27c.54.81-.43-.73.23.25-.19-.47-.24-.57-.17-.29s0,.17,0-.27c-.05,1,0,2.1,0,3.16-.11,1.75-.35,3.55-.35,5.3,0,2.38,1.39,3.73,3.15,5L39.29,55.5l.05.08L39,52.69c.43-2.06,1.09-1.84,2-2.25s.37-.12.22-.1a3.5,3.5,0,0,0-.56.13c-1,.21.44,0,.07,0l-.94.1c-1.52.13-3,.19-4.56.2s-3.06,0-4.58-.13l-.49,0c-.44,0-.36-.27.36,0a4.64,4.64,0,0,0-.76-.13,3.87,3.87,0,0,0-.53-.15c-.39,0,1,.48.6.25a3.29,3.29,0,0,1,1.5,2A3.78,3.78,0,0,0,26.65,50,3.83,3.83,0,0,0,24,54.59c.65,2.88,3.94,3.31,6.35,3.53a51.09,51.09,0,0,0,7,.1,22.39,22.39,0,0,0,5.89-.69c2.34-.79,3.95-3.35,2.54-5.73a4.37,4.37,0,0,0-1.5-1.52c-1.2-.7.86,1.27.68,1.57a5.75,5.75,0,0,0,.14-1.61c0-.63.06-1.26.09-1.89a39.08,39.08,0,0,0,.13-5,7.23,7.23,0,0,0-1.1-3.68A7.44,7.44,0,0,0,43,38.31c-.27-.24-.57-.46-.86-.67s-.26-.19,0,0a1.86,1.86,0,0,1,.64.72l.51,1.89v-.1l-.51,1.89.05-.1-1.35,1.34c.07,0-1.17.3-1.17.3a2.7,2.7,0,0,1,.59,0c.48,0,1,0,1.44-.06a11.79,11.79,0,0,0,3.67-.72,14,14,0,0,0,5.79-4.31,16.61,16.61,0,0,0,3.32-14.33,13.15,13.15,0,0,0-1.89-4.28q-.22-.35-.48-.69c-.35-.48-.47-1-.23.27s.15.84.36.25c.09-.25.19-.5.26-.76a10.06,10.06,0,0,0,.31-2.19c.12-2.51-.86-5.28-3.12-6.58-2.49-1.42-5.6,0-7.88,1.17a18.37,18.37,0,0,0-1.77,1.14c-.71.5.42-.09-.07,0,.1,0,.87,0,.29-.06.2,0,.92.19.34,0s.79.38.36.16l-.4-.19c-.49-.22-1-.44-1.52-.62a14.69,14.69,0,0,0-4.21-.71,14.82,14.82,0,0,0-5.72.81c-.5.19-1,.4-1.49.63s.81-.14,0,0c1.1-.16.65-.06.38-.08.9.06.59.1.34,0-.58-.15.4.13.39.18l-.46-.29a17.65,17.65,0,0,0-5.49-2.69,5.45,5.45,0,0,0-6.86,4.24,10.35,10.35,0,0,0-.12,3.51c.13,1,.53,1.9.63,2.86C17,19.62,17,20,17,20.15c0,.64.15-1.42.52-1.36-.24,0-.83,1-1,1.22a13.1,13.1,0,0,0-1.36,3.23A16.74,16.74,0,0,0,16.7,36.88a14.13,14.13,0,0,0,4.8,4.74,12.21,12.21,0,0,0,4.13,1.46c.85.14,1.69.23,2.54.29l.64.05-.47-.08q1.39.34-1.58-1.33l-.51-1.89c0-1.39,1.46-2.85.37-1.66a6.41,6.41,0,0,0-1,1.29A5.84,5.84,0,0,0,25,41.36a12,12,0,0,0-.16,1.34c0,.7.08.44.3-.77l1.35-1.34c.06-.05.5-.07.51-.11a4.51,4.51,0,0,1-.58.06c-.34,0-.69.08-1,.1a4.93,4.93,0,0,0-.55,0c-.38.1.37,0,.39,0-.23,0-.5-.21-.11,0-.21-.11-.39-.23-.58-.35,0,0,.45.38.14.11L24,39.82s-.51-.52-.26-.24-.15-.22-.2-.29c-.16-.26-.32-.52-.49-.77A8.32,8.32,0,0,0,16.77,35,4.58,4.58,0,0,0,12,40.67a4.86,4.86,0,0,0,2.3,3c.19.11.41.2.61.29s.52.11.25.08.18.26,0-.09.09.15.14.23c.25.41.5.82.73,1.25.08.15.15.32.24.48.28.5-.17-.63-.1-.21a5.46,5.46,0,0,0,.81,1.83c1.78,2.91,5.63,4.19,8.9,4.07a13.41,13.41,0,0,0,2.6-.33,1.63,1.63,0,0,0,.37-.08c.85-.19.21-.59-1.94-1.2q-2.37-2.34-2-1s0-.94-.09-.58a2.57,2.57,0,0,0,0,.48c0,.47,0,1,0,1.43,0,.27,0,.55,0,.82s-.16.57.05.19c.39-.73-.23.3,0-.18.05-.09.41-.6.27-.45a4.17,4.17,0,0,0-1.12,2c-.32,1.93.51,4.13,2.62,4.61C28.46,57.62,30.91,56.65,31.26,54.59Z" transform="translate(-11.79 -9.49)"/>
        </g>
        <g id="Warstwa_3_kopia_2" className="neon-line" data-name="Warstwa 3 kopia 2">
            <path d="M28.25,53.75c.07-.42.66-.89.81-1.36A7.54,7.54,0,0,0,29.14,50c0-.78.21-2.23-.42-2.86s-1.71-.06-2.44,0a8.25,8.25,0,0,1-3.45-.38,4.13,4.13,0,0,1-2.68-2.64,8.29,8.29,0,0,0-2.36-3.56c-.36-.26-.85-.37-1.19-.64-.85-.68,0-.65.49-.53A4,4,0,0,1,19.48,41a10.69,10.69,0,0,0,3,3.19A5,5,0,0,0,26,45c1.21-.12,3.05,0,3.28-1.57a6.93,6.93,0,0,1,.09-1.2,2.54,2.54,0,0,1,.72-1,1.58,1.58,0,0,0,.59-1c0-1.06-1.36-1.1-2.12-1.16a10.1,10.1,0,0,1-6-2,10.31,10.31,0,0,1-2.39-2.91,12.77,12.77,0,0,1-.42-10.58c.44-1.16,1.59-2.12,1.68-3.39.1-1.66-.9-3.12-.65-4.81.16-1.15.66-1.69,1.87-1.34a12.53,12.53,0,0,1,3,1.4,7.23,7.23,0,0,0,2.63,1.38c1.19.18,2.05-.44,3.14-.8a12,12,0,0,1,4.77-.45A10,10,0,0,1,39,16.2a8,8,0,0,0,1.39.57,3.77,3.77,0,0,0,2.9-.73A13.84,13.84,0,0,1,45.05,15c.71-.35,2.19-1.22,3.05-1s1,1.55,1,2.27a9,9,0,0,1-.62,2.88c-.36,1.32.38,2,1.06,3.06A9.69,9.69,0,0,1,51,25.48a12.15,12.15,0,0,1-3.5,11.33,8.09,8.09,0,0,1-5.29,2.35c-.81,0-2.7-.26-3.15.7s1.34,1.75,1.7,2.51c.52,1.09.29,2.8.23,4s-.13,2.12-.18,3.17a10.51,10.51,0,0,0-.12,2.85,2.7,2.7,0,0,0,1.42,1.68c.09,0,0-.8,0-.77a.93.93,0,0,1-.26.09c-.71,0-1.54.26-2.27.32-1.1.1-2.22.15-3.33.18a38.9,38.9,0,0,1-6.74-.23c-.34,0-.66-.14-1-.2s-.33-.23-.29,0c-.18-.78-1.38-.45-1.21.33C27.33,55,30,55,30.89,55a57.49,57.49,0,0,0,7.54,0,28.46,28.46,0,0,0,3-.31A2.62,2.62,0,0,0,43,54.21a.71.71,0,0,0,.13-.83c-.09-.2-.24-.25-.38-.4a2.06,2.06,0,0,1-.85-1.48c-.05-2.11.37-4.27.39-6.39,0-1.37.06-2.82-.82-4-.1-.14-1.05-1.2-1.25-1.11l-.12.49.28,0a3,3,0,0,0,.59,0c.55,0,1.09,0,1.63-.06,3.74-.3,6.68-3,8.39-6.16a13,13,0,0,0,.76-10.65A13.44,13.44,0,0,0,50,20.65c-.61-.86-.09-1.62.16-2.53a6.54,6.54,0,0,0,.14-2.57c-.17-1.18-.74-2.63-2.08-2.84-1.49-.24-3.51.92-4.73,1.67s-2,1.54-3.34,1a13.73,13.73,0,0,0-5.05-1.15,12.43,12.43,0,0,0-4.49.71c-1.14.43-2,1-3.12.24-1.88-1.16-6.53-4.58-7.77-1a7.31,7.31,0,0,0,.15,4.34,2.6,2.6,0,0,1-.24,2.59,7.28,7.28,0,0,0-.94,1.62,14.42,14.42,0,0,0-.28,10.69,10.92,10.92,0,0,0,5.82,6.06,11.8,11.8,0,0,0,3,.68c.47,0,1,.07,1.42.11l.51,0c.34,0,.16-.17,0,0a3.81,3.81,0,0,0-1,1.39,6.54,6.54,0,0,0-.16,1c-.16.94-.68.87-1.55,1a4.72,4.72,0,0,1-4.28-1.27c-1.2-1.11-1.78-2.69-3.23-3.54-.93-.55-2.94-1.38-3.77-.22-1.12,1.56.91,2.28,1.83,2.94,1.29.91,1.69,2.63,2.35,4A5.23,5.23,0,0,0,22.5,48a9.18,9.18,0,0,0,3.33.47,6.7,6.7,0,0,0,1.72-.21,2.22,2.22,0,0,1,.46-.11c-.52,0-.15-.28-.2,0a5,5,0,0,0,.05,1,13,13,0,0,1,.05,2.71c-.13.64-.76,1-.87,1.6C26.91,54.21,28.12,54.55,28.25,53.75Z" transform="translate(-11.79 -9.49)"/>
        </g>
    </svg>
);
const FBIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" width="100%" height="100%" viewBox="-3 -3 66.76 66.79">
        <g id="Warstwa_3_kopia" className="neon-blur" data-name="Warstwa 3 kopia">
            <path d="M57.79,58.51H12.35a.66.66,0,0,1-.14,0c.33,0,.4.18.14,0-.41-.23.07.15.11.11s-.55-.31-.07.05a2.5,2.5,0,0,1-.46-.46c.18.23.12.26.14.08s0-.09.06.13c-.21-.71,0-.17,0,0V29.84c0-5.66,0-11.32,0-17,0,.13-.21.7,0,0-.18.62.18-.29-.2.21a2.86,2.86,0,0,1,.46-.46c-.17.13-.34.16-.08.13s0,0-.12.07c.22-.07.61,0,0,0h.37c.83.05,1.68,0,2.51,0H51.4c2.08,0,4.19.1,6.26,0h.13c-.09,0-.5-.21-.14,0s-.08-.13-.11-.1c.32.2.38.21.18,0s-.15-.13,0,0a1.62,1.62,0,0,1,.34.35c-.51-.67,0,.05-.06.07s-.33-.52-.11-.11,0,0,0-.15V13c0,.66,0,1.34,0,2V38.14c0,6.61-.25,13.27,0,19.88v.41c0-.11.21-.47,0-.13s.15-.07.11-.11-.45.73.06.06c-.19.25-.73.55-.24.25-.18.11-.59.18,0,0-.2.06-.64,0,0,0a3.75,3.75,0,1,0,0,7.5,7.73,7.73,0,0,0,7.58-7.61c0-.63,0-1.26,0-1.89V19.33c0-2.12.06-4.26,0-6.39a7.63,7.63,0,0,0-6.23-7.51,17.39,17.39,0,0,0-2.59-.15H33.38c-6.94,0-13.89,0-20.83,0A7.89,7.89,0,0,0,5.84,8.76a8.47,8.47,0,0,0-1.21,4.79V57.64a9,9,0,0,0,1,4.62A7.78,7.78,0,0,0,12.5,66c6.84.07,13.67,0,20.51,0H57.79a3.75,3.75,0,0,0,0-7.5Z" transform="translate(-4.63 -5.26)"/>
            <path d="M40.49,62.26,40.65,48c0-1.77.16-3.59.06-5.36a4.83,4.83,0,0,0-5.12-4.68c-1.36,0-2.73,0-4.09,0-2.31,0,2.33,1.79,2.22,2.75a15,15,0,0,0,0-1.64c0-1.39.09-2.81,0-4.19-.12-2-4.19,2.32-2.64,2.46.63,0,1.28,0,1.91,0a17.19,17.19,0,0,0,4.24-.16c4.33-1.12,3.53-6.32,3.58-9.74a8.73,8.73,0,0,1,.47-3.34c0-.13.35-.9.11-.36.09-.22.21-.44.32-.65s.3-.49.45-.73c.33-.51-.57.53.1-.13l.42-.43c.53-.59-.38.11,0,0s.59-.36.88-.48c-.5.21.35-.09.44-.12s.35-.07.51-.12c.72-.21-.86,0-.43,0A8.26,8.26,0,0,0,45.19,21c.34,0,.66,0,1,0l4.76.11a12.71,12.71,0,0,0,1.38,0c-4.17.37-2.77-4.43-2.87-2.46,0,.33,0,.66,0,1v2.59c0,.31,0,.62,0,.93,0,1.5-.49-1.07,1.23-1.92l1.9-.51c-2,.26-4.09-.25-6.12.28a7,7,0,0,0-4.37,3.32c-1.08,2-.75,4.32-.73,6.47a11.93,11.93,0,0,0,.2,3.1,4.86,4.86,0,0,0,4.89,3.35c1.08,0,2.17,0,3.26,0H52c.88-.07-.32.94-1.69-.67l-1-1.65c-.27-.7.22-1.94.07-1.12l-.12.75-.36,2.26a18.79,18.79,0,0,1-.59,3.35l1-1.65c1.16-1.41,2.57-.59,1.65-.65a4.51,4.51,0,0,0-.52,0H48.47a22.17,22.17,0,0,0-2.94.06,4.7,4.7,0,0,0-4.13,4.67c0,.51,0,1,0,1.53V62.26a3.75,3.75,0,0,0,7.5,0V49.35c0-2.1.07-4.21,0-6.31,0-.16,0-.31,0-.46-.09-.8-4.24,2.7-2.73,2.85.23,0,.47,0,.71,0,1.31,0,2.61,0,3.92,0a4.8,4.8,0,0,0,4.88-3.69c.25-1.18.38-2.4.57-3.59a35.75,35.75,0,0,0,.54-3.57c.18-3-2.5-4.77-5.2-4.77H47.54a13.08,13.08,0,0,0-1.4,0c-1.49.15,2.6,4.2,2.75,2.82a3.49,3.49,0,0,0,0-.56l0-4a3.15,3.15,0,0,0,0-1c.09.19-.23,1.14,0,.44-.32,1-.33.74-.18.48.34-.56-.59.64-.12.15s-.55.38-.1.1-.57.37-.11.06-.71,0,.21,0h.91c1,0,1.91.06,2.86,0,3-.11,4.66-2.45,4.66-5.25,0-3.39.74-8.25-3.62-9.26a17.26,17.26,0,0,0-3.52-.2L46,13.52c-3.28,0-6.75.86-9,3.37-2.7,3-3.59,6.81-3.65,10.73l-.06,4.09a3.94,3.94,0,0,0,0,1c-.13-.48,3.56-2.71,2.64-2.87a4.07,4.07,0,0,0-.78,0c-1.3,0-2.6,0-3.89,0a4.79,4.79,0,0,0-5,4.68c-.1,2.07-.1,4.22,0,6.29a4.83,4.83,0,0,0,5.12,4.65h3.92a3.42,3.42,0,0,0,.64,0c.67-.16-2.79-2.49-2.69-2.84a3.49,3.49,0,0,0,0,.46c-.07.8,0,1.65,0,2.46L33,61.05v1.21A3.78,3.78,0,0,0,36.74,66a3.82,3.82,0,0,0,3.75-3.75Z" transform="translate(-4.63 -5.26)"/>
        </g>
        <g id="Warstwa_3_kopia_2"  className="neon-line" data-name="Warstwa 3 kopia 2">
            <path d="M57.79,61.64H16.28c-1.75,0-4.63.47-6.1-.72C8.5,59.56,9,56.51,9,54.59V29.84c0-5.65-.21-11.34,0-17,.13-3.56,3.6-3.21,6.08-3.21H51.4c2.09,0,4.18-.05,6.26,0A3.28,3.28,0,0,1,61,13c0,.67,0,1.34,0,2V38.14c0,6.62.07,13.25,0,19.88a3.33,3.33,0,0,1-3.2,3.62c-.8,0-.8,1.29,0,1.25a4.53,4.53,0,0,0,4.45-4.49c0-.63,0-1.26,0-1.89V19.33c0-2.13.06-4.26,0-6.39a4.52,4.52,0,0,0-3.93-4.5,14.73,14.73,0,0,0-1.76,0H33.38c-6.94,0-13.89-.05-20.83,0-3.07,0-4.79,2.23-4.79,5.15V57.64a5.75,5.75,0,0,0,.6,3,4.66,4.66,0,0,0,4.14,2.2c6.84.07,13.67,0,20.51,0H57.79A.63.63,0,0,0,57.79,61.64Z" transform="translate(-4.63 -5.26)"/>
            <path d="M37.36,62.26l.14-12.42.08-6.52a3.05,3.05,0,0,0-.18-1.47c-.51-1-1.62-.8-2.54-.8a21,21,0,0,1-3.72,0c-.87-.17-.54-1.38-.54-2.13V35.06c0-1.11.75-.88,1.69-.88,1.59,0,5.15.75,5.32-1.59.16-2.18,0-4.39.1-6.57.2-3.72,2.38-7.57,6.37-8a44.38,44.38,0,0,1,6.21,0c.65,0,2.09-.27,2.29.48a6.3,6.3,0,0,1,0,1.44v2.15a6.55,6.55,0,0,1,0,1.4c-.19.73-1.15.45-1.8.45-1.73,0-3.78-.23-5.18,1-1.58,1.4-1.12,3.56-1.11,5.45a8.82,8.82,0,0,0,.13,2.81c.39,1,1.41,1,2.32,1h3.92a4.43,4.43,0,0,1,1.26,0c.47.2.27.52.21.93l-.6,3.79c-.12.71,0,2-.81,2.15a6.57,6.57,0,0,1-1.47,0H47.29c-1,0-2.18-.17-2.64.92a3.4,3.4,0,0,0-.13,1.35V62.26a.63.63,0,0,0,1.25,0V49.35c0-2.06-.21-4.26,0-6.31.08-.75.33-.74,1.11-.74,1.31,0,2.61,0,3.92,0a1.68,1.68,0,0,0,1.86-1.39c.26-1.18.39-2.4.58-3.59a21.37,21.37,0,0,0,.43-2.74c0-1.29-1-1.65-2.08-1.65H47.54a5,5,0,0,1-1.4,0c-.47-.16-.38-.44-.38-.86l0-4a2.53,2.53,0,0,1,.6-2.11c1.46-1.46,4.14-.62,6-.77,1.26-.11,1.53-1.06,1.53-2.13v-4c0-1-.09-2.05-1.32-2.28a17.24,17.24,0,0,0-2.69-.08L46,16.65c-2.49,0-5.07.52-6.81,2.45-2.13,2.37-2.69,5.46-2.73,8.52l-.07,4.09a3.15,3.15,0,0,1,0,1c-.23.4-.89.25-1.27.25-1.3,0-2.6,0-3.89,0-1,0-1.75.46-1.85,1.56a32,32,0,0,0,0,3.25c0,1-.1,2,0,3,.11,1.17.95,1.51,2,1.52,1.3,0,2.61,0,3.92,0,.77,0,1,0,1.07.75s0,1.65,0,2.46l-.18,15.54v1.21a.63.63,0,0,0,1.25,0Z" transform="translate(-4.63 -5.26)"/>
        </g>
    </svg>
);
const LIIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" width="100%" height="100%" viewBox="-3 -3 45.94 49.15">
        <g id="Warstwa_2_kopia" className="neon-blur"  data-name="Warstwa 2 kopia">
            <path d="M16,27.18V51.65a3.75,3.75,0,0,0,7.5,0V27.18a3.75,3.75,0,0,0-7.5,0Z" transform="translate(-14.6 -12.25)"/>
            <path d="M29.31,27.18V51.65a3.75,3.75,0,1,0,7.5,0V27.18a3.75,3.75,0,0,0-7.5,0Z" transform="translate(-14.6 -12.25)"/>
            <path d="M54.51,51.65V37.34c0-2,.23-4.06-.49-5.94a11.92,11.92,0,0,0-3.22-4.83A10.84,10.84,0,0,0,39,24.81a11.57,11.57,0,0,0-6,6.9,3.77,3.77,0,0,0,2.62,4.61A3.83,3.83,0,0,0,40.2,33.7c.29-.82-.45.82,0,0A12.16,12.16,0,0,1,41,32.43c-.52.73,0,0,.19-.14s.84-.64.26-.27c.32-.2.63-.37,1-.55s.12.19-.28.12a4.15,4.15,0,0,0,.73-.24c.2-.05,1-.09.28-.08a7.23,7.23,0,0,1,1.14,0c-.49-.07.57.2.56.2-.61-.19.22.11.34.18s.85.68.18.07c.29.26.59.52.86.81s.14,0,.4.55c.09.16.54,1.1.22.31.1.25.17.5.26.75.18.53.09-.83,0,.34-.19,1.86,0,3.85,0,5.72V51.65a3.75,3.75,0,0,0,7.5,0Z" transform="translate(-14.6 -12.25)"/>
            <g>
            <circle cx="5.13" cy="5.13" r="1.38"/>
            <path d="M17.37,17.38a1.11,1.11,0,0,1,0,.19l.14-1a1.4,1.4,0,0,1-.1.35l.38-.89a1.44,1.44,0,0,1-.19.31l.59-.76-.23.23.76-.59a1.92,1.92,0,0,1-.31.18l.89-.37a2,2,0,0,1-.35.1l1-.14a1.28,1.28,0,0,1-.39,0l1,.14a2,2,0,0,1-.35-.1l.89.37a1.92,1.92,0,0,1-.31-.18l.76.59a2.5,2.5,0,0,1-.23-.23l.59.76A1.44,1.44,0,0,1,21.7,16l.38.89a1.4,1.4,0,0,1-.1-.35l.14,1a1.21,1.21,0,0,1,0-.38l-.14,1a1.61,1.61,0,0,1,.1-.36l-.38.9a1.23,1.23,0,0,1,.19-.31l-.59.76a1.67,1.67,0,0,1,.23-.23l-.76.59a1.44,1.44,0,0,1,.31-.19l-.89.38a1.4,1.4,0,0,1,.35-.1l-1,.13a2.54,2.54,0,0,1,.39,0l-1-.13a1.4,1.4,0,0,1,.35.1l-.89-.38a1.44,1.44,0,0,1,.31.19L17.94,19a1.67,1.67,0,0,1,.23.23l-.59-.76a1.23,1.23,0,0,1,.19.31l-.38-.9a1.61,1.61,0,0,1,.1.36l-.14-1a1.37,1.37,0,0,1,0,.19,2.88,2.88,0,0,0,.32,1.45,2.78,2.78,0,0,0,.78,1.2,2.78,2.78,0,0,0,1.2.78,2.88,2.88,0,0,0,1.45.32l1-.13a3.73,3.73,0,0,0,1.66-1l.59-.75a3.84,3.84,0,0,0,.51-1.9.41.41,0,0,0,0-.11c0-.36-.08-.72-.14-1.08a1.89,1.89,0,0,0,0-.23,1,1,0,0,0,0-.1c-.13-.33-.26-.67-.42-1a.82.82,0,0,0-.12-.2,8.48,8.48,0,0,0-.63-.82l-.07-.08-.08-.08c-.26-.23-.55-.43-.83-.64a.81.81,0,0,0-.18-.12l-.09,0a9.24,9.24,0,0,0-1-.41,1,1,0,0,0-.23-.07c-.35-.07-.72-.11-1.07-.15h-.37c-.35,0-.72.08-1.07.15l-.13,0-.1,0c-.32.12-.65.26-1,.4a1.05,1.05,0,0,0-.21.12,4.74,4.74,0,0,0-1.08.87,8.48,8.48,0,0,0-.63.82l-.06.09a.41.41,0,0,0-.05.09c-.16.31-.29.65-.42,1a1.72,1.72,0,0,0-.07.21.36.36,0,0,0,0,.11,9.85,9.85,0,0,0-.15,1.09,1,1,0,0,0,0,.25c0,.35.08.72.14,1.07,0,0,0,.09,0,.13s.05.14.07.21c.12.31.26.66.41,1l.06.11.06.09c.2.28.41.56.63.82a1.29,1.29,0,0,0,.16.17c.25.23.55.44.83.65l.08.06.21.11c.3.15.65.29,1,.41l.11,0a.35.35,0,0,0,.11,0,9.67,9.67,0,0,0,1.08.15.91.91,0,0,0,.23,0h.12c.36,0,.74-.09,1.09-.15a1.12,1.12,0,0,0,.26-.08,9.59,9.59,0,0,0,1-.41l.12-.06.1-.07c.28-.2.57-.42.83-.64l.18-.18c.22-.26.44-.55.64-.83l.07-.11a.54.54,0,0,0,.07-.13,9.59,9.59,0,0,0,.41-1,1.09,1.09,0,0,0,.07-.24c.07-.36.11-.74.15-1.09,0-.06,0-.11,0-.16a2.75,2.75,0,0,0-.33-1.44,3.31,3.31,0,0,0-2-2,2.75,2.75,0,0,0-1.44-.33l-1,.14a3.68,3.68,0,0,0-1.65,1l-.59.76A3.7,3.7,0,0,0,17.37,17.38Z" transform="translate(-14.6 -12.25)"/>
            </g>
        </g>
        <g id="Warstwa_2_kopia_2"  className="neon-line" data-name="Warstwa 2 kopia 2">
            <path d="M19.11,27.18V51.65a.63.63,0,0,0,1.25,0V27.18a.63.63,0,0,0-1.25,0Z" transform="translate(-14.6 -12.25)"/>
            <path d="M32.43,27.18V51.65a.63.63,0,0,0,1.25,0V27.18a.63.63,0,0,0-1.25,0Z" transform="translate(-14.6 -12.25)"/>
            <path d="M51.39,51.65V37.34c0-1.7.25-3.5-.38-5.11a8.8,8.8,0,0,0-2.42-3.45C44.25,25,37.78,27.34,36,32.54c-.27.76.94,1.09,1.2.33a6.65,6.65,0,0,1,11.19-2.55,6.15,6.15,0,0,1,1.76,4.16c0,1.91,0,3.82,0,5.72V51.65a.63.63,0,0,0,1.25,0Z" transform="translate(-14.6 -12.25)"/>
            <circle cx="5.13" cy="5.13" r="1.38"/>
        </g>
    </svg>
);
const UWIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" width="100%" height="100%" viewBox="-3 -30 63.94 75.67">
        <g id="Warstwa_2_kopia" className="neon-blur" data-name="Warstwa 2 kopia">
            <path d="M6,27.67v9.06c0,4-.46,7.83,2,11.28a13.72,13.72,0,0,0,9.42,5.88,13.26,13.26,0,0,0,10.82-3.64,10.79,10.79,0,0,0,3.31-7.83c0-1.39,0-2.79,0-4.19l.06-10.56a3.78,3.78,0,0,0-3.75-3.75,3.82,3.82,0,0,0-3.75,3.75l0,8.06,0,5.15c0,.49,0,1,0,1.48v.28a1.4,1.4,0,0,0,0,.29c0,.06,0,.55,0,.13s-.07.25-.1.34-.09.28-.13.42c0-.06.3-.56.08-.21s-.36.61-.54.91c.32-.53,0,0-.21.2s-.23.23-.34.34-.57.48-.24.22-.42.28-.56.36c-.33.2-.67.37-1,.54.58-.27-.12,0-.35.09l-.48.13c-.08,0-.77.18-.33.09s-.09,0-.16,0q-.36,0-.72,0c-.24,0-1-.09-.38,0a7.93,7.93,0,0,1-1-.23c-.16,0-.32-.12-.48-.15-.52-.1.43.25,0,0s-.68-.34-1-.54-.79-.56-.29-.16a10.68,10.68,0,0,1-1.54-1.54c.41.5.06.05-.1-.21a6.79,6.79,0,0,1-.41-.75c.21.44-.09-.31-.14-.46s-.06-.3-.11-.45c-.17-.5.06.55.06.58a4.51,4.51,0,0,0,0-.9V27.67a3.75,3.75,0,0,0-7.5,0Z" transform="translate(-5.99 -23.91)"/>
            <path d="M35,45.11l-1.85,12-.27,1.71a4.13,4.13,0,0,0,.38,2.89,3.87,3.87,0,0,0,2.24,1.73c1.79.41,4.3-.55,4.62-2.62l1.85-12,.26-1.72a4.14,4.14,0,0,0-.37-2.89,3.86,3.86,0,0,0-2.24-1.72c-1.79-.41-4.3.55-4.62,2.62Z" transform="translate(-5.99 -23.91)"/>
            <path d="M43.41,40.91c.26-1.36.55-2.71.77-4.08,0-.2.29-.79,0-.09a16.57,16.57,0,0,1,1-1.86c.14-.24.3-.47.44-.7.5-.85-.44.35.3-.4a4.61,4.61,0,0,1,1.54-1.17c-.62.33.15,0,.29-.1l.64-.17a4.54,4.54,0,0,1,1.75-.14c.07,0,1.28.19.49,0l.65.14c.29.07.58.15.86.24s1.09.45.39.12.29.16.37.21a8.16,8.16,0,0,1,.88.56c-.15-.11-.44-.42.06.07.26.25.52.48.77.74,0,0,.74.94.32.36A10.39,10.39,0,0,1,56,36.58c-.29-.66.14.47.15.49.07.24.13.49.19.73,0,.05.15,1.23.1.5a11.23,11.23,0,0,1,0,1.16,6.52,6.52,0,0,1-.74,2.82c-.17.31-.37.61-.56.92-.53.88.43-.38-.28.36a13.08,13.08,0,0,1-1.25,1.22c.58-.48-.29.19-.35.24l-.59.35c-.08,0-1.09.51-.33.2a8.13,8.13,0,0,1-1.27.4,4.79,4.79,0,0,1-2.46,0,8.35,8.35,0,0,1-1.07-.35c.68.28-.38-.21-.42-.23a16.74,16.74,0,0,1-1.76-1.1l-.79-.58c-.58-.42-.07-.06,0,0-.61-.49-1.21-1-1.77-1.54s-.89-.9-1.3-1.37c-.25-.28-.49-.57-.71-.86.4.52-.21-.29-.28-.4a25.22,25.22,0,0,1-2.23-3.87c-.14-.29-.28-.59-.41-.89.26.6,0,0-.09-.28-.22-.56-.42-1.13-.6-1.7-.35-1.1-.64-2.22-.88-3.35-.09-.44-.17-.88-.25-1.32s-.29-2-.08-.45c-.26-1.94-1.54-3.85-3.75-3.75-1.81.08-4,1.66-3.75,3.75A35.21,35.21,0,0,0,33.89,43c4.06,6,11,11.8,18.72,10.29,7.9-1.55,12.8-10.05,10.92-17.69A14.31,14.31,0,0,0,47.45,24.9c-4.49.66-7.85,3.87-9.69,7.9a25.63,25.63,0,0,0-1.58,6.12,3.83,3.83,0,0,0,2.62,4.61C40.64,44,43,43,43.41,40.91Z" transform="translate(-5.99 -23.91)"/>
        </g>
        <g id="Warstwa_2_kopia_2" className="neon-line"  data-name="Warstwa 2 kopia 2">
            <path d="M9.15,27.67v9.06c0,3.37-.53,6.78,1.53,9.7A10.15,10.15,0,0,0,26,48a7.6,7.6,0,0,0,2.39-5.62l0-4.19.06-10.56a.63.63,0,0,0-1.25,0l0,8.06,0,5.15a13.37,13.37,0,0,1-.2,3.35c-.83,2.92-3.84,4.89-6.72,5.33A9,9,0,0,1,12,46.15a7,7,0,0,1-1.62-4.4V27.67a.63.63,0,0,0-1.25,0Z" transform="translate(-5.99 -23.91)"/>
            <path d="M38,45.94,36.17,58l-.26,1.72c-.12.78,1.08,1.12,1.2.33L39,48l.26-1.71c.12-.78-1.08-1.12-1.2-.33Z" transform="translate(-5.99 -23.91)"/>
            <path d="M40.4,40.08c.25-1.35.43-2.74.76-4.08a10.07,10.07,0,0,1,4.69-6.09c4.92-2.43,10.71.33,12.85,5.09a10.26,10.26,0,0,1-6.77,14c-5.57,1.37-11.11-3.67-14.06-7.88a30.51,30.51,0,0,1-5-13.44c-.1-.79-1.36-.8-1.25,0a31.92,31.92,0,0,0,4.94,13.77c3.19,4.7,9,10,15.19,8.86a11.5,11.5,0,0,0,8.73-13.85,11.18,11.18,0,0,0-12.23-8.54c-3.77.52-6.3,3.1-7.82,6.47a23.22,23.22,0,0,0-1.27,5.37c-.14.79,1.06,1.12,1.21.33Z" transform="translate(-5.99 -23.91)"/>
        </g>
    </svg>
);
const CWIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" width="100%" height="100%" viewBox="-3 -3 66.71 67.45">
        <g id="Warstwa_2_kopia" className="neon-blur" data-name="Warstwa 2 kopia">
            <path d="M34.88,30.51a23.81,23.81,0,0,1-2.67-.08c.77.05.2,0-.24-.05s-.71-.15-1-.24-.75-.21-1.12-.33l-.49-.18c-.61-.23.11.07-.26-.12a10.91,10.91,0,0,1-3.29-2.33c-.38-.38-.73-.79-1.08-1.2.63.74-.13-.23-.25-.41-.23-.36-.42-.75-.63-1.12,0,0-.27-.53-.1-.17s-.11-.29-.15-.38c-.14-.42-.27-.84-.37-1.27l-.12-.58c-.11-.65,0,.45,0-.19a12.69,12.69,0,0,1,0-1.51c0-.1.07-.86,0-.4s0-.15,0-.19c.09-.38.17-.77.28-1.15s.23-.72.36-1.07c-.26.72.13-.26.25-.49a16.84,16.84,0,0,1,1-1.63,2.07,2.07,0,0,1,.28-.4s-.58.7-.17.23c.17-.2.33-.4.5-.59s.43-.47.66-.69l.18-.16c.5-.46.09-.1.34-.28a13.68,13.68,0,0,1,1.47-.89l.52-.25c.59-.26-.75.21.34-.11.49-.15,1-.31,1.47-.42l.56-.11c.38-.07-.32,0,.34,0s1-.06,1.55,0l.78,0c.18,0,.58.08.17,0a15.28,15.28,0,0,1,3.46,1c1.82.75,4.21-.81,4.62-2.62.5-2.18-.67-3.8-2.62-4.61a17.39,17.39,0,0,0-21.36,6.79A16.16,16.16,0,0,0,16.2,25.54a18.15,18.15,0,0,0,7.22,9.38A19,19,0,0,0,34.88,38a3.75,3.75,0,1,0,0-7.5Z" transform="translate(-4.72 -4.18)"/>
            <path d="M37.87,32.4a11.53,11.53,0,0,1-.66-1c-.15-.26-.3-.52-.43-.78s-.54-1.26-.24-.46a17.61,17.61,0,0,1-.81-2.65c0-.24-.09-.47-.13-.71-.1-.62,0,.52,0-.12a16.69,16.69,0,0,1,0-2,4,4,0,0,1,.12-1c0-.21.09-.41.13-.61s.16-.62.26-.93c.05-.16.1-.32.16-.48s.31-.83.12-.34.34-.68.42-.84a12.5,12.5,0,0,1,.84-1.34c-.31.44.58-.65.66-.74a8.4,8.4,0,0,1,1.16-1c.44-.28.89-.54,1.35-.79.08,0,.66-.29.13-.08.22-.09.46-.17.69-.24A12.22,12.22,0,0,1,43,15.88l.66-.12c-.82.18.14,0,.29,0a15.1,15.1,0,0,1,2.33,0l.51,0c.69,0-.24,0-.29,0a3.73,3.73,0,0,1,1,.17c.32.07.64.14,1,.23l.47.16c.69.21.24.08.08,0,.3.13.61.28.9.44s.75.43,1.1.67l.52.36c-.6-.44-.16-.12,0,0,.64.59,1.21,1.22,1.81,1.85-.65-.69.19.28.35.53s.44.69.64,1,.32.6.47.9c.06.12.11.25.17.38.29.57-.08-.07-.1-.28.08.67.53,1.38.68,2.05a3.75,3.75,0,1,0,7.23-2C61.25,16,56,10.18,49.75,8.74a18.75,18.75,0,0,0-13.08,1.53,16.82,16.82,0,0,0-8.21,11.38,19.15,19.15,0,0,0,2.93,14.53,3.86,3.86,0,0,0,5.13,1.35,3.78,3.78,0,0,0,1.35-5.13Z" transform="translate(-4.72 -4.18)"/>
            <path d="M38.62,35.39c.08-.26.18-.5.27-.76s-.44.9,0,.11c.16-.31.31-.63.48-.94a16.63,16.63,0,0,1,1.12-1.74c-.5.68.18-.18.36-.37a13.8,13.8,0,0,1,1-1c.07-.07.61-.49.27-.24s.24-.15.32-.21a14.25,14.25,0,0,1,1.26-.73,11.53,11.53,0,0,1,2.86-.85c-.37,0,.44,0,.51,0h.78l.75,0c.11,0,.87.1.41,0s.26.05.36.08l.64.14q.66.16,1.32.39c.37.13,1.1.47.3.09l.74.35q.46.24.9.51a10.86,10.86,0,0,0,1,.67s-.74-.64-.26-.19l.35.3c.3.26.58.53.85.81s.53.58.79.88-.33-.48,0,0l.37.54a13.5,13.5,0,0,1,.7,1.21c0,.08.36.75.2.39s.2.55.22.63a13.92,13.92,0,0,1,.41,1.57c.16.76.06.35,0,.16,0,.26,0,.51.06.76a12.94,12.94,0,0,1,0,1.65c0,.11-.11.85,0,.39s-.1.43-.12.52c-.12.54-.27,1.07-.44,1.59l-.22.6c-.23.68.17-.28,0,.09-.41.76-.76,1.53-1.22,2.26-.18.28-.36.56-.55.83l-.23.31c-.36.52.11-.19.23-.29a7.45,7.45,0,0,0-.57.67A3.75,3.75,0,1,0,60,51.92a21.12,21.12,0,0,0,4.71-8.41A17.31,17.31,0,0,0,61.55,27.8C56.26,21.14,46.07,19,38.78,23.68a18.14,18.14,0,0,0-7.4,9.72A3.79,3.79,0,0,0,34,38a3.85,3.85,0,0,0,4.62-2.62Z" transform="translate(-4.72 -4.18)"/>
            <path d="M35.42,38.33l.79-.2.67-.12c.8-.16-.72,0,.2,0,.69,0,1.37-.07,2.07,0,.19,0,1.26.13.52,0a11.72,11.72,0,0,1,1.43.3A8.13,8.13,0,0,1,45,40.51a10.35,10.35,0,0,1,1,1.1c-.36-.47.09.18.2.34s.37.62.54.93c.07.13.56,1.18.33.64s.08.25.13.39.13.38.19.57.14.48.2.73.13.55.19.83c0,.1.08.64,0,.25a10.09,10.09,0,0,1-.62,5.2c-.06.18-.13.37-.2.55.19-.48-.06.1-.09.16-.21.4-.41.79-.64,1.16-.1.16-.76,1.08-.35.56a11,11,0,0,1-.91,1c-.28.28-.58.55-.89.81s0,0,.09,0l-.57.39a14.46,14.46,0,0,1-2.15,1.18c.56-.25-.56.19-.77.25a14.72,14.72,0,0,1-1.58.42l-.54.11c-.67.13.13,0-.29,0s-1,.09-1.5.1-1,0-1.54,0l-.58,0c-.64,0,0,0-.36,0A21,21,0,0,1,31,57.21a3.77,3.77,0,0,0-4.62,2.62A3.84,3.84,0,0,0,29,64.44c8.94,3,20.3.29,24.54-8.8,3.92-8.42,1.13-19.56-7.75-23.58a18.18,18.18,0,0,0-12.39-1,3.75,3.75,0,1,0,2,7.23Z" transform="translate(-4.72 -4.18)"/>
            <path d="M31.76,36.53c.19.27.37.55.54.83s.28.48.4.72.6,1.43.28.53a19.08,19.08,0,0,1,.75,2.44c.05.23.1.46.13.69-.1-.64,0,0,0,.1,0,.65,0,1.3,0,1.95,0,.05-.1.71,0,.24a8.58,8.58,0,0,1-.18.85,11,11,0,0,1-.5,1.57c.22-.52-.37.68-.43.78s-.24.4-.36.6-.58.82-.28.42-.3.35-.3.35l-.38.42c-.24.25-.49.49-.75.73-.11.1-.52.56-.67.56s.8-.57.33-.26c-.09.06-.18.14-.28.2a12.75,12.75,0,0,1-1.1.7l-.77.41c-.62.3.36-.13-.26.12A13.2,13.2,0,0,1,26.4,52l-.74.16c-.27,0-.82.11-.26.06a16.1,16.1,0,0,1-2.69,0l-.54,0c-.21,0-.65-.2-.12,0s-.31-.06-.5-.1c-.39-.08-.76-.18-1.14-.29-.16-.05-1.39-.54-.7-.23a12.27,12.27,0,0,1-1.44-.75c-.36-.22-.69-.46-1-.69.68.44-.21-.18-.4-.36a18.71,18.71,0,0,1-1.73-1.83c.57.66-.07-.11-.25-.38s-.4-.6-.59-.91c-.34-.57-.63-1.16-.92-1.75-.46-1,.19.55,0,0l-.21-.54c-.07-.22-.15-.43-.21-.65A3.81,3.81,0,0,0,8.3,41.06a3.8,3.8,0,0,0-2.62,4.61C7.47,52,12.76,57.73,19.25,59.23c9.15,2.13,19.28-2.92,21.65-12.36a17.64,17.64,0,0,0-2.66-14.12,3.86,3.86,0,0,0-5.13-1.35c-1.63,1-2.53,3.47-1.35,5.13Z" transform="translate(-4.72 -4.18)"/>
            <path d="M31.64,33.08c-.16.26-.34.51-.51.76-.43.63.24-.26.08-.08s-.33.4-.5.6c-.41.46-.83.9-1.28,1.32-.25.23-.52.45-.78.68s.11-.08.15-.11c-.22.16-.44.32-.67.47A16.46,16.46,0,0,1,26,37.92c-.39.18,0,0,0,0l-.54.19a14,14,0,0,1-1.4.42c-.47.12-.94.21-1.41.3-.84.17.47,0-.26,0-.44,0-.87.07-1.31.07s-.83,0-1.25,0,0,0,.05,0l-.59-.11a8.07,8.07,0,0,1-2.56-.91c-.26-.14-.49-.31-.75-.45,0,0-.51-.36-.24-.15s-.2-.17-.2-.17l-.54-.48c-.29-.28-.55-.58-.82-.88s0,.07.07.12c-.13-.16-.25-.34-.37-.51a15.26,15.26,0,0,1-1-1.75l-.21-.47s.25.71.15.33-.2-.53-.29-.8-.21-.7-.29-1.06l-.06-.28c0-.09,0-.18-.05-.28-.1-.61,0,.5,0-.12a14.76,14.76,0,0,1,0-1.49c0-.24,0-.49,0-.74.06-.62-.1.51,0-.1s.21-1,.35-1.45c.07-.24.16-.48.23-.71.2-.59-.2.42.05-.15a11,11,0,0,1,3.52-4.55c1.55-1.31,1.34-4,0-5.3a3.83,3.83,0,0,0-5.31,0A17.42,17.42,0,0,0,6.83,38.13a16,16,0,0,0,11.29,8,20.08,20.08,0,0,0,12.16-2,20.57,20.57,0,0,0,7.84-7.29,3.75,3.75,0,0,0-6.48-3.79Z" transform="translate(-4.72 -4.18)"/>
        </g>
        <g id="Warstwa_2_kopia_2" className="neon-line"  data-name="Warstwa 2 kopia 2">
            <path d="M34.88,33.64A14.54,14.54,0,0,1,21.1,26c-2.61-5.2-.64-11.89,4.08-15.2A13.64,13.64,0,0,1,38.25,9.72c.74.31,1.06-.9.33-1.21a14.33,14.33,0,0,0-17.83,5.35,13.07,13.07,0,0,0-1.53,10.85A14.73,14.73,0,0,0,25,32.23a16.14,16.14,0,0,0,9.88,2.66c.8,0,.81-1.29,0-1.25Z" transform="translate(-4.72 -4.18)"/>
            <path d="M35.17,34C31,28,31.51,19,37.86,14.66A13.42,13.42,0,0,1,55.44,17.4a15.47,15.47,0,0,1,3,6c.18.79,1.38.45,1.2-.33C58.47,17.86,54.2,13,48.92,11.75A15.48,15.48,0,0,0,38.24,13a13.83,13.83,0,0,0-6.77,9.51A16,16,0,0,0,34.09,34.6c.46.66,1.54,0,1.08-.63Z" transform="translate(-4.72 -4.18)"/>
            <path d="M35.6,34.56a13.58,13.58,0,0,1,4-6.07,12.65,12.65,0,0,1,12.52-2.18,13.17,13.17,0,0,1,8.63,15.07,16.23,16.23,0,0,1-3.83,7.44c-.55.59.33,1.48.88.89,5-5.34,6.13-13.79,1.52-19.7-4.4-5.65-12.8-7.61-19-3.63a14.7,14.7,0,0,0-6,7.85c-.25.77,1,1.1,1.2.33Z" transform="translate(-4.72 -4.18)"/>
            <path d="M34.59,35.32a12.74,12.74,0,0,1,15.35,7A13.57,13.57,0,0,1,43.09,60a17.75,17.75,0,0,1-12.89.25c-.77-.26-1.1,1-.34,1.21,7.68,2.61,17.39.55,21-7.37,3.21-7,.65-16.06-6.63-19.31a15,15,0,0,0-10-.64.63.63,0,0,0,.33,1.21Z" transform="translate(-4.72 -4.18)"/>
            <path d="M34.46,35a12.8,12.8,0,0,1-2.84,18,13.93,13.93,0,0,1-18.73-2.82,16.22,16.22,0,0,1-3-5.62.63.63,0,0,0-1.21.33C10.2,50.16,14.63,55,20.08,56.22,27.62,58,35.94,53.79,37.88,46a14.53,14.53,0,0,0-2.34-11.71c-.46-.66-1.55,0-1.08.63Z" transform="translate(-4.72 -4.18)"/>
            <path d="M34.34,34.66a16,16,0,0,1-13.21,7.39A12.18,12.18,0,0,1,9,30.93a13.64,13.64,0,0,1,5.11-11.4c.61-.52-.27-1.4-.89-.88C8,23.06,6.14,30.46,9.53,36.55,13.37,43.44,22,44.87,28.7,41.46a17.42,17.42,0,0,0,6.72-6.17c.44-.68-.64-1.31-1.08-.63Z" transform="translate(-4.72 -4.18)"/>
        </g>
    </svg>
);
const IGIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" width="100%" height="100%" viewBox="-3 -3 63.01 63.12">
        <g id="Warstwa_2_kopia" className="neon-blur" data-name="Warstwa 2 kopia">
            <path d="M48.21,56H34.55c-4.62,0-9.33.26-13.95,0,.77.05-.6-.13-.84-.19s-1.54-.52-.84-.22a10.06,10.06,0,0,1-1.45-.77c-.08,0-1-.67-.31-.17-.26-.2-.5-.42-.74-.64a10.44,10.44,0,0,1-1.1-1.2c.42.55.07.08,0,0-.16-.29-.35-.56-.51-.84s-.2-.4-.3-.59c-.47-.92.13.42-.07-.18A17.91,17.91,0,0,1,14,49.36c-.22-1,0,.68,0-.37,0-.23,0-.47,0-.7v-.07c0-.21,0-.42,0-.63V26.46c0-1.57,0-3.14,0-4.7,0-.3,0-.6,0-.9,0-.65-.2.86,0-.19,0-.22.08-.44.14-.66s.19-.64.28-1c0-.13.25-.68,0,0a17.14,17.14,0,0,1,.95-1.73c.33-.58.1-.17,0,0,.2-.26.42-.5.64-.74a10.44,10.44,0,0,1,1.2-1.1c-.6.46.54-.31.73-.42s.49-.26.73-.38c.86-.44-.6.12.34-.12.54-.15,1.07-.31,1.62-.42,1.05-.22-.46,0,.2,0l.87,0H32.7c5.11,0,10.22,0,15.34,0l.86,0c1.06,0-.65-.19.37,0,.22,0,.44.08.66.14s.54.15.81.23l.47.16c-.38-.18-.37-.17,0,0s1,.53,1.43.81c.11.06.58.41,0,0a6.2,6.2,0,0,1,.62.53,11.33,11.33,0,0,1,1.12,1.18c.38.47-.41-.72.1.16.16.29.35.56.5.84a7.58,7.58,0,0,1,.9,3.69V48.27c0,.24,0,.48,0,.72,0,1.08.1-.43,0,.2a9.22,9.22,0,0,1-.25,1.16c-.06.21-.13.42-.2.64-.28,1,.35-.59-.12.33-.22.44-.47.86-.72,1.29-.09.16-.52.75-.08.17-.13.17-.27.34-.42.5a10,10,0,0,1-1.42,1.34c.58-.44,0,0-.17.08s-.46.29-.7.42l-.59.3c-.9.46.65-.14-.33.12-.55.15-1.08.31-1.63.42-.16,0-.71,0,0,0-.35,0-.69,0-1,0a3.75,3.75,0,0,0,0,7.5,15.32,15.32,0,0,0,13.6-8.41,19.51,19.51,0,0,0,1.62-8.68v-19c0-1.88,0-3.77,0-5.66a15.54,15.54,0,0,0-7-12.87c-5-3.34-11.84-2.43-17.58-2.43H22a15.43,15.43,0,0,0-11.62,5.06,16.06,16.06,0,0,0-3.9,10.87V47.55a16.2,16.2,0,0,0,3.79,10.79A15.37,15.37,0,0,0,22,63.51c2.17,0,4.34,0,6.51,0H48.21a3.75,3.75,0,0,0,0-7.5Z" transform="translate(-6.43 -6.4)"/>
            <path d="M18.6,35A16.62,16.62,0,0,0,29.42,50.36a16.31,16.31,0,0,0,17.92-4.79A16.3,16.3,0,0,0,31.69,19c-7.6,1.37-13,8.44-13.09,16a3.75,3.75,0,0,0,7.5,0c0-.35,0-.7,0-1,0-.74,0-.19,0,0a13.47,13.47,0,0,1,.39-1.64c.1-.32.21-.64.33-1-.06.16-.31.59,0,0s.64-1.14,1-1.69c.58-.86-.29.31.12-.15.18-.2.36-.41.55-.6s1.31-1.17.72-.71a12.43,12.43,0,0,1,1.37-.9c.2-.11.4-.2.59-.31.39-.18.4-.19,0,0a3.8,3.8,0,0,1,.47-.18,11.45,11.45,0,0,1,1.62-.45c.19,0,.93-.14.18-.06q.44,0,.87-.06a12.84,12.84,0,0,1,1.75,0c.65.05-.86-.21.19,0l1,.24c.32.09.63.2,1,.31.14,0,.64.29,0,0a13.43,13.43,0,0,1,1.44.79c.24.15.46.3.68.46.5.36-.58-.59.14.13.47.47.93.91,1.37,1.41-.44-.51-.07-.11,0,0s.37.54.54.82.79,1.58.5.88a13,13,0,0,1,.52,1.6c.05.22.09.44.14.66.08.44.08.45,0,0,0,.17,0,.34,0,.51a13.9,13.9,0,0,1,0,1.58c0,.12-.17,1.22,0,.38,0,.22-.08.44-.13.66a15.71,15.71,0,0,1-.47,1.62c-.32,1,.36-.57-.15.32-.16.29-.3.58-.47.87s-.3.46-.45.69-.57.69-.1.15a14.16,14.16,0,0,1-1.13,1.19s-.79.68-.37.34-.43.3-.41.29a14.57,14.57,0,0,1-1.72,1c.14-.07.65-.22,0,0-.32.11-.63.22-1,.31l-.66.17s-1.07.19-.51.11-.56,0-.53,0a8.62,8.62,0,0,1-.88,0c-.29,0-.58,0-.87,0-.88,0,.41.14-.37-.05s-1.3-.33-1.94-.55c-1-.34.39.21-.17-.07-.35-.17-.69-.35-1-.55l-.56-.35-.53-.38c.33.25.32.24,0,0l-1.15-1.16c-.72-.72.34.58-.23-.27-.18-.27-.37-.54-.54-.82s-.31-.58-.47-.87c-.38-.68.12.48-.15-.32s-.38-1.29-.54-2c0-.14-.1-.73,0,0-.05-.46-.07-.92-.08-1.39a3.75,3.75,0,0,0-7.5,0Z" transform="translate(-6.43 -6.4)"/>
            <g>
            <circle cx="43.63" cy="13.57" r="2.03"/>
            <path d="M48.34,20a2.64,2.64,0,0,1,0,.28l.13-1a2,2,0,0,1-.14.53l.38-.9a3.14,3.14,0,0,1-.28.46l.59-.76a2.13,2.13,0,0,1-.34.33l.76-.58a3.35,3.35,0,0,1-.45.27l.89-.38a1.82,1.82,0,0,1-.52.14l1-.13a2.62,2.62,0,0,1-.56,0l1,.13a1.88,1.88,0,0,1-.53-.14l.9.38a4.25,4.25,0,0,1-.46-.27l.76.58a2.57,2.57,0,0,1-.33-.33l.58.76a3.07,3.07,0,0,1-.27-.46l.38.9a2.46,2.46,0,0,1-.15-.53l.14,1a2.62,2.62,0,0,1,0-.56l-.14,1a2.23,2.23,0,0,1,.15-.52l-.38.89a2.56,2.56,0,0,1,.27-.45l-.58.75a2.57,2.57,0,0,1,.33-.33l-.76.59a3.14,3.14,0,0,1,.46-.28l-.9.38a1.88,1.88,0,0,1,.53-.14l-1,.13a2.62,2.62,0,0,1,.56,0l-1-.13a1.82,1.82,0,0,1,.52.14L49,21.34a2.6,2.6,0,0,1,.45.28L48.66,21a2.13,2.13,0,0,1,.34.33l-.59-.75a2.6,2.6,0,0,1,.28.45l-.38-.89a1.82,1.82,0,0,1,.14.52l-.13-1a2.64,2.64,0,0,1,0,.28,2.88,2.88,0,0,0,.32,1.45,3.45,3.45,0,0,0,2,2,2.88,2.88,0,0,0,1.45.32l1-.13a3.75,3.75,0,0,0,1.65-1A3.87,3.87,0,0,0,55.84,20a10.9,10.9,0,0,0-.15-1.28c0-.11,0-.23-.08-.34a9.3,9.3,0,0,0-.49-1.17c0-.1-.12-.2-.18-.3a11.42,11.42,0,0,0-.76-1,7.36,7.36,0,0,0-1-.78,5.37,5.37,0,0,0-1.43-.68,1.91,1.91,0,0,0-.34-.1,9.24,9.24,0,0,0-1.3-.17,1.83,1.83,0,0,0-.33,0,7.15,7.15,0,0,0-1.3.19,8.16,8.16,0,0,0-1.15.47l-.3.16a5.71,5.71,0,0,0-1.23,1,7.87,7.87,0,0,0-.74,1,6.94,6.94,0,0,0-.51,1.15,5.79,5.79,0,0,0-.29,1.6,2.28,2.28,0,0,0,0,.37,8.29,8.29,0,0,0,.18,1.3,1.76,1.76,0,0,0,.1.3,7,7,0,0,0,.51,1.16,8.9,8.9,0,0,0,.73,1,2.83,2.83,0,0,0,.24.25,7.49,7.49,0,0,0,1,.77,2.11,2.11,0,0,0,.3.16,6.77,6.77,0,0,0,1.15.47,6.93,6.93,0,0,0,1.29.2l.34,0a8.27,8.27,0,0,0,1.3-.17,1.9,1.9,0,0,0,.39-.11A7.7,7.7,0,0,0,53,25a7.58,7.58,0,0,0,1-.77,3.19,3.19,0,0,0,.26-.26,8.52,8.52,0,0,0,.77-1,7.55,7.55,0,0,0,.53-1.2,2.54,2.54,0,0,0,.1-.37A8.87,8.87,0,0,0,55.84,20a2.82,2.82,0,0,0-.32-1.44,2.84,2.84,0,0,0-.78-1.21,2.75,2.75,0,0,0-1.21-.78,2.85,2.85,0,0,0-1.44-.32l-1,.13a3.7,3.7,0,0,0-1.65,1A3.92,3.92,0,0,0,48.34,20Z" transform="translate(-6.43 -6.4)"/>
            </g>
        </g>
        <g id="Warstwa_2_kopia_2" className="neon-line" data-name="Warstwa 2 kopia 2">
            <path d="M48.21,59.14H25.43c-1.6,0-3.23.1-4.83,0A11,11,0,0,1,11,50.19a31.48,31.48,0,0,1-.16-5.32V26.46c0-1.57,0-3.14,0-4.7a11,11,0,0,1,7.32-10.29,18.62,18.62,0,0,1,6.13-.58H32.7c5.11,0,10.22,0,15.34,0a11,11,0,0,1,9.69,5.66c1.23,2.24,1.32,4.6,1.32,7.06V41.48c0,2.12,0,4.24,0,6.35A10.85,10.85,0,0,1,48.21,59.14a.63.63,0,0,0,0,1.25,12.23,12.23,0,0,0,10.9-6.86,15.93,15.93,0,0,0,1.19-7.11v-19c0-1.88,0-3.77,0-5.66a12.27,12.27,0,0,0-5.43-10.17,13.78,13.78,0,0,0-7.92-2H38.86c-5.64,0-11.28,0-16.91,0a12.31,12.31,0,0,0-9.41,4.14,12.76,12.76,0,0,0-3,8.66V40.12c0,5.42-.88,11.55,2.88,16A12.34,12.34,0,0,0,22,60.39H48.21A.63.63,0,0,0,48.21,59.14Z" transform="translate(-6.43 -6.4)"/>
            <path d="M21.73,35A13.2,13.2,0,1,0,32.52,22,13.35,13.35,0,0,0,21.73,35,.63.63,0,0,0,23,35a11.95,11.95,0,1,1,9.7,11.74A12.07,12.07,0,0,1,23,35,.63.63,0,0,0,21.73,35Z" transform="translate(-6.43 -6.4)"/>
            <circle cx="43.63" cy="13.57" r="2.03"/>
        </g>
    </svg>
);

const SingleLink = (props) => {
    const [on, setOn] = useState(false);

    return(
        <a className="list-link" href={props.link} onMouseEnter={() => setOn(true)} onMouseLeave={() => setOn(false)}>
            <div className="list-ic"><props.icon /></div>
            <span className={on ? "text-neon-on" : "text-neon"}>{props.name}</span>
        </a>
    )
}

const ContactList = () => (
    <div className="list">
        <SingleLink link="https://github.com/Gulewskr" icon={GHIcon} name="Github" />
        <SingleLink link="https://www.facebook.com/profile.php?id=100004371061552" icon={FBIcon} name="Facebook" />
        <SingleLink link="https://www.linkedin.com/in/rafał-gulewski-29141b230" icon={LIIcon} name="Linkedin" />
        <div className="list-split" />
        <SingleLink link="https://www.upwork.com/freelancers/~01a337f0c1bb6f8fa5" icon={UWIcon} name="Upwork" />
        <SingleLink link="404" icon={IGIcon} name="Instagram" />
        <SingleLink link="https://www.codewars.com/users/Gulewskr" icon={CWIcon} name="Codewars" />
    </div>
)

export default ContactList