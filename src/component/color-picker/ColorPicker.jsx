import React, { useState } from 'react'

import Github from '@uiw/react-color-github'

import './ColorPicker.css'

//const ColorPicker = React.forwardRef({ visible, onColorChoose, defaultColor=DEFAULT_ICON_COLOUR, ref }) => {
export const ColorPicker = React.forwardRef((props, ref ) => {
    const [chosenColor, setChosenColor] = useState(props.defaultColor)

    const COLOUR_CHOICES = [
        '#B80000',
        '#DB3E00',
        '#FCCB00',
        '#008B02',
        '#325d97',
        '#1273DE',
        '#004DCF',
        '#5300EB',
        '#EB9694',
        '#FAD0C3',
        '#FEF3BD',
        '#C1E1C5',
        '#BEDADC',
        '#C4DEF6',
        '#BED3F3',
        '#D4C4FB',
    ]

    const onChangeColor = (color) => {
        setChosenColor(color.hex)
        props.onColorChoose(color.hex)
    }

    return (
        <div className="ColorPickerWrapper">
            { props.visible && <Github className="ColorPicker" ref={ref}
                colors={COLOUR_CHOICES}
                color={ chosenColor }
                placement="BL"
                style={ {
                    '--github-background-color': '#ffffff',
                } }
                onChange={ onChangeColor }
            /> }
        </div>
    )
})
