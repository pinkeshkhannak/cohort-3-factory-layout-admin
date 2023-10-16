
function ColoredLine({ color }) {
return (
    <hr data-testid={"line"}
        style={{
            color: color,
            backgroundColor: color,
            height: "1px",
            width: '90%',
            margin:0,
            
            
        }}
    />
)
}
export default ColoredLine;