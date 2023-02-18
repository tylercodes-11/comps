import Button from '../components/Button';
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';

function ButtonPage() {
   

    return (
    
    <div>
        <div>
            <Button secondary rounded className= 'mb-5' >
                <GoBell />
                Click Here!

            </Button>
            
            
        </div>
        <div>
            <Button success rounded outline>Buy Now</Button>
        </div>
        <div>
            <Button warning>
                <GoDatabase />
                Click Me</Button>
        </div>
        <div>
            <Button danger outline>
                <GoCloudDownload />
                See Here</Button>
        </div>
        <div>
            <Button primary rounded>Check out</Button>
        </div>
    </div>
    )
}

export default ButtonPage;