import React , { useState }from 'react'
import './Form.css'

function Form() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [contact, setContact] = useState('')
  const [topic, setTopic] = useState('')
  const [message, setMessage] = useState('')

  const [nameError, setNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [contactError, setContactError] = useState('')
  const [topicError, setTopicError] = useState('')
  

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleContactChange = (e) => {
    setContact(e.target.value)
  }

  const handleTopicChange = (e) => {
    setTopic(e.target.value)
  }
  const handleMessage = (e) => {
    setMessage(e.target.value)
  }


  const validate = () => {
    let nameError = ''
    let emailError = ''
    let contactError = ''
    let topicError = ''

    if (!name) {
      nameError = 'Name is required'
    }

    if (!email.includes('@')) {
      emailError = 'Invalid email'
    }

    if (!contact) {
      contactError = 'Contact number is required'
    }

    if (!topic) {
      topicError = 'Topic is required'
    }


    if (nameError || emailError || contactError || topicError ) {
      setNameError(nameError)
      setEmailError(emailError)
      setContactError(contactError)
      setTopicError(topicError)
      return false
    }

    return true
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const isValid = validate()
    if (isValid) {
      setName('')
      setEmail('')
      setContact('')
      setTopic('')
      setMessage('')
      setNameError('')
      setEmailError('')
      setContactError('')
      setTopicError('')
    }
  }

  return (
    <div className="contacto" id='contacto'>
      <h1 className='text-center mt-5 titulos-color'>CONTACT US</h1>
      <form onSubmit={handleSubmit} action="https://formsubmit.co/snowpanda@gmail.com" method="POST">
      <div className="contenedor-form">
        <div className="input-container">
          <div className="fila-name">
            <input className="input-mitad" placeholder="NAME" name='name' value={name} onChange={handleNameChange}/>
            <div className="error">{nameError}</div>
          </div>
          <div className="fila-email">
            <input className="input-mitad" placeholder="EMAIL" name='email'value={email} onChange={handleEmailChange}/>
            <div className="error">{emailError}</div>
          </div>
        </div>        
        <div className="input-container">
          <div className="fila-contact">
            <input className="input-mitad" placeholder="CONTACT Nº" name='contact' value={contact} onChange={handleContactChange}/>
            <div className="error">{contactError}</div>
          </div>
          <div className="fila-topic">
          <input className="input-mitad" placeholder="TOPIC" name='tema' value={topic} onChange={handleTopicChange}/>
        <div className="error">{topicError}</div>
        </div>
        </div>
        <div className="fila-message">
          <input className="input-full" placeholder="MESSAGE" name='message' value={message} onChange={handleMessage}/>
        </div>
        <button className="btn-form" tpye='submit'>SEND</button>      
      </div>
      <input type='hidden' name='_next' value='https://pf-10a-bhm9.vercel.app/'/>
      </form>
    </div>
  )
};

export default Form
