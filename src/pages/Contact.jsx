import { useState } from 'react';
import '../assets/Contact.css';

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
            setSubmissionStatus('Please provide all the required information.');
            setIsSubmitting(false);
            return;
        }
        setTimeout(() => {
            setSubmissionStatus('Form submitted successfully!');
            setIsSubmitting(false);
        }, 2000);
    };

    return (
        <form className="contact-container" onSubmit={handleFormSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={name} onChange={handleInputChange} required />
            
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={email} onChange={handleInputChange} required />
            
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" value={message} onChange={handleInputChange} required></textarea>
            
            <button className="submit-button" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
            {submissionStatus && <p>{submissionStatus}</p>}
        </form>
    );
}