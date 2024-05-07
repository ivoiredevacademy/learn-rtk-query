import { ContactData } from "./types"

type ComponentProps = {
  contactData: ContactData
}

export default function ContactDetails({contactData}: ComponentProps) {
  return (
    <div>
      <div className="card">
        <div className="card-header">
          Contact details
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><strong>Name</strong> {contactData.name} </li>
          <li className="list-group-item"><strong>Email</strong> {contactData.email} </li>
          <li className="list-group-item"><strong>Phone</strong> {contactData.phone} </li>
          <li className="list-group-item"><strong>Address</strong> {contactData.address} </li>
          <li className="list-group-item"><strong>Company</strong> {contactData.company} </li>
          <li className="list-group-item"><strong>Website</strong> {contactData.website} </li>
        </ul>
      </div>
    </div>
  )
}