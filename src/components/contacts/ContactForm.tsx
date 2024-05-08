import { IoCheckmark } from "react-icons/io5";
import { ContactData } from "./types";
import { useState } from "react";

export type ContactFormComponentProps = {
  initialData?: ContactData,
  onSubmit: (contactData: ContactData) => void
}

export default function ContactForm({ initialData, onSubmit } : ContactFormComponentProps) {


  function getInitialValues(): ContactData {
    return initialData || {
      name: "",
      email: "",
      phone: "",
      address: "",
      company: "",
      website: ""
    }
  }

  const [formValues, setFormValues] = useState<ContactData>(getInitialValues());

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setFormValues({
      ...formValues, [e.target.name]: e.target.value
    })
  }

  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    onSubmit(formValues);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="form-row my-2 row">
        <div className="form-group col-md-6">
          <label htmlFor="name">Name</label>
          <input type="name" name="name" className="form-control" id="email" placeholder="John Doe"
            onChange={handleInputChange}
            value={formValues.name}
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" name="email" id="email" placeholder="john.doe@example.com" 
          onChange={handleInputChange}
          value={formValues.email}
          />
        </div>
      </div>
      <div className="form-group my-4">
        <label htmlFor="address">Address</label>
        <input type="text" className="form-control" id="address" name="address" 
                    value={formValues.address}
        placeholder="1234 Main St" onChange={handleInputChange} />
      </div>

      <div className="form-row row my-4">
        <div className="form-group col-md-6">
          <label htmlFor="phone">Phone</label>
          <input type="text" className="form-control" id="phone" name="phone"placeholder="+1 510 00 00 00" 
            onChange={handleInputChange} 
            value={formValues.phone}
          />
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="company">Company</label>
          <input 
            type="text" 
            className="form-control" 
            id="Google Inc." 
            name="company"
            value={formValues.company}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group col-md-6 my-2">
          <label htmlFor="website">Website</label>
          <input 
            type="text" 
            className="form-control" 
            value={formValues.website}
            id="https://www.john-doe.com" name="website"
            onChange={handleInputChange}
          />
        </div>
      </div>
      <button type="submit" className="btn btn-primary">Validate <IoCheckmark /></button>
    </form>
  )
}