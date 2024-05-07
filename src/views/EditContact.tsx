import ContactDetails from '../components/contacts/ContactDetails';
import ContactForm from '../components/contacts/ContactForm';
import { ContactData } from '../components/contacts/types';
import usersData from '../utils/users.json';


export default function EditContact() {
    const contactData: ContactData = usersData[0] as unknown as ContactData;

    function handleSubmit(contactData: ContactData): void {
        console.log("Form updated.", contactData);
    }
    
    return (
        <div className="row">
            <div className="col-md-8">
            <h2>Edit a contact</h2>
                <ContactForm onSubmit={handleSubmit} initialData={contactData}  />
            </div>
            <div className="col-md-4">
                <ContactDetails contactData={contactData} />
            </div>
          
        </div>
    
    )
}