function ColorBlock (props) {
   return (
        <div className="colorBlock"
        style={{'backgroundColor': props.color}} >
            <p className="props">{props.color}</p>
        </div>
    )
}

export default ColorBlock