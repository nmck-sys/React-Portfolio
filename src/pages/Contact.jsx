import { useState } from 'react';

export default function Contact() {
    const [name, setFormName] = useState('');
    const [email, setFormEmail] = useState('');
    const [message, setFormMessage] = useState('');

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState('');

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        if (name === 'name') setFormName(value);
        if (name === 'email') setFormEmail(value);
        if (name === 'message') setFormMessage(value);

    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setIsSubmitting(true);

    if (!name || !email || !message) {
        setSubmissionStatus('Please provide info.');
        setIsSubmitting(false);
        return;
    }
}
    

return (
    <div className="contact-form">
        <h1>Contact Me!</h1>
        <div className="contact-container" onSubmit={handleFormSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" onChange={handleInputChange} />
            <label htmlFor="email">Email</label>
            <input type="text" id="email" onChange={handleInputChange}/>
            <label htmlFor="message">Message</label>
            <textarea id="message" onChange={handleInputChange}></textarea>
            <button className="submit-button">Submit</button>
        </div>
        <div className="form-group">
          <button className="submit-button" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
        {submissionStatus && <p>{submissionStatus}</p>}
    </div>
);
}