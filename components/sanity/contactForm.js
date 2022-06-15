import React, {useState} from 'react'
import emailjs from "emailjs-com"

export default function ContactForm({value:{formType}}) {
    const [alerts, setAlerts] = useState()
    const alertMsg = {
        prayer: 'Thanks. Your prayer request has been sent to the parish.',
        contact: 'Thanks. Your message been sent to the parish.'
    }
    const buttonText = {
        prayer: 'Send prayer request',
        contact: 'Send message'
    }
    const templateId = {
        prayer: 'template_rgoa4u9',
        contact: 'template_sy45g73'
    }
    const textareaPlaceholder = {
        prayer: 'Your Request',
        contact: 'Your Message'
    }
    const onSubmit = (e) => {
        e.preventDefault();
        document.getElementById('form-submit').disabled = true;
        setAlerts('')

        const formData = new FormData(e.currentTarget)

        if(formData.get('last')) {
            setAlerts(<div className="alert alert-danger" role="alert">An error has occured, please try again.</div>)
            document.getElementById('alerts').scrollIntoView()
            document.getElementById('form-submit').disabled = false;
        }
        emailjs.sendForm(
            "service_5whtahn",
            templateId[formType],
            e.target,
            "L-FMkfqdXNkYXmmmr"
        )
            .then(
                result => {
                    e.target.reset()
                    setAlerts(<div className="alert alert-success" role="alert">{alertMsg[formType]}</div>)
                    document.getElementById('alerts').scrollIntoView()
                },
                error => {
                    document.getElementById('form-submit').disabled = false;
                    setAlerts(<div className="alert alert-danger" role="alert">An error has occured.</div>)
                    document.getElementById('alerts').scrollIntoView()
                }
            )
    }

    return <>
        <div id="alerts">{alerts}</div>
        <div className="contact_form">
            <div className="contact_form_container">
                <form onSubmit={onSubmit}>
                    <div className="row">
                        <div className="col-lg-6">
                            <input type="text" name="from_name" className="form_input" placeholder="Your Name" required="required" />
                        </div>
                        <div className="col-lg-6">
                            <input type="email" name="reply_to" className="form_input email_input" placeholder="Your Email"
                                   required="required" />
                        </div>
                        <div className="col-12">
                            <textarea className="form_text" placeholder={textareaPlaceholder[formType]} required="required" name="message"></textarea>
                            <button type="submit" id="form-submit" className="form_submit_button">{buttonText[formType]}</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>
}