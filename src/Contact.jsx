
import './styles.scss'
import './_contact.scss'; /* Pour importer les fichiers Sass!! */
import { MdOutlineSmartphone } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";

function Contact() {

return (
    <>
        <div className="container" id='contact'>
            <div className="bloccontact">
                <h1><span>Contact</span>!</h1>
                <p>
                <span><MdOutlineSmartphone /></span> +32486934047
                </p>
                <p><span><MdOutlineMailOutline /></span> leulierjustine@hotmail.com</p>
            </div>
        </div>

    </>
)
}

export default Contact
