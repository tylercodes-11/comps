
import { useState } from 'react;'


const handleClick = () => {
    const [isOpen, setIsOpen] = useState(false);

    setIsOpen(!isOpen);
};
function Dropdown({ options }) {

    const renderedOptions = options.map((option) => {
        return <div key={option.value}>{option.label}
        </div>;
    });

    return (

    <div>
        <div onClick={handleClick}>Select...
            </div>
            
        {isOpen && <div>{renderedOptions}</div>}
 </div>
    );
}
export default Dropdown;