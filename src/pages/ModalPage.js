import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";


function ModalPage() {
const [showModal, setShowModal] = useState(false);

const handleClick = () => {
    setShowModal(true)
};

const handleClose = () => {
    setShowModal(false);
};

const actionBar = <Button primary onClick={handleClose} >I Accept!</Button>

const modal = <Modal onClose={handleClose} actionBar={actionBar}>
<p>
Here is an important agreement for you to accept
</p>
</Modal>

    return (
         <div>
        <Button onClick={handleClick} primary>
            Open Modal
        </Button>
    <p>
    Eiusmod nostrud nisi excepteur id eu est culpa voluptate. Elit in non minim cillum sint ipsum in velit voluptate enim. Ad ut Lorem commodo quis velit in tempor magna eiusmod. Excepteur veniam irure et excepteur enim ad sunt adipisicing mollit Lorem esse magna labore.
    </p>
    
    {showModal && modal}
       
    </div>
    );
}

export default ModalPage;