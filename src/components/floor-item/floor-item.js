const FloorItem = ({floorNumber, handleShow, points, sold}) => {
    let classNames = "st0";
    if(sold){
        classNames += " sold";
    }
    console.log(sold);
    
 return (
    <g id={floorNumber}>
        <polygon
        points={points}
        onClick={() => handleShow(floorNumber-1)}
        className = {classNames}
        />
    </g>
 )
}

export default FloorItem;