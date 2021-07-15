import { useColor } from "../component/neonColor";


export const Styles = () => {
    const {c} = useColor();
    const v = {
        fill: {
            fill: c,
            filter: 'blur(2px)'
        },
        stroke: {
            stroke: c,
            filter: 'blur(4px)'
        }
    }
    return v
}