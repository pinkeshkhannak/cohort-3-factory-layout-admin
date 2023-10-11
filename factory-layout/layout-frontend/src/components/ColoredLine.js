
function ColoredLine({ color }) {
return (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: "1px",
            width: '90%',
            
            
        }}
    />
)
}
export default ColoredLine;