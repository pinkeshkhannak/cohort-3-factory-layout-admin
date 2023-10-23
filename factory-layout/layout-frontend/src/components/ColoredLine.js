
function ColoredLine({ color, width  = '90%' }) {
return (
    <hr data-testid={"line"}
        style={{
            color: color,
            backgroundColor: color,
            height: "1px",
            width: width,
            margin:0,
            
            
        }}
    />
)
}
export default ColoredLine;