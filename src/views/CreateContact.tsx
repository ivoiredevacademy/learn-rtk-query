import ContactForm from "../components/contacts/ContactForm";
import { ContactData } from "../components/contacts/types";

export default function CreateContact() {

  function handleSubmit(contactData: ContactData): void {
    console.log("Form submitted.", contactData);
  }

  return (
    <div>
      <h2>Create a contact</h2>
      <ContactForm onSubmit={handleSubmit}  />
    </div>

  )
}