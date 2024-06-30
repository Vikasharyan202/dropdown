import { useState } from "react";
import Item from "./Item";

const Dropdown = () => {
    const itemList = ['Basic of Internet','HTML', 'CSS', 'JavaScript', 'React', 'Continuous Learning Attitude'];

    const [showItems, setShowItems] = useState(false);

    function showItem() {
        setShowItems(true);
    }
    function hideItem() {
        setShowItems(false)
    }
    return(
        <div className="dropdown-cont">
            <h3>Skills Required To Become A Frontend Developer</h3>
            <div className="dropdown">
                <span>Select</span>
                <img onMouseOver={showItem} alt="down" src="https://icons.veryicon.com/png/o/miscellaneous/docs/dropdown-2.png" />
            </div>
            <div className="items">
                {showItems && itemList.map((item, index) => <div onClick={hideItem} key={index}><Item item={item} /></div>)}
            </div>
        </div>
    )
}
export default Dropdown;