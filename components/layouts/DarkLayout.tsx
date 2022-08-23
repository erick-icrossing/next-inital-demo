import { FC, ReactElement } from "react"

const style = {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: '10px',
    borderRadius: '5px'
}

type Props = {
    children: ReactElement
}

export const DarkLayout: FC<Props> = ({ children }) => {
    return (
        <div style={style}>
            <h3>Dark - Layout </h3>
            { children }
        </div>
    )
}
