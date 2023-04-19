import React , { useState }from 'react'
import './Form.css'

function Form() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [contact, setContact] = useState('')
  const [tema, setTema] = useState('')
  const [nameError, setNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [contactError, setContactError] = useState('')
  const [temaError, setTemaError] = useState('')

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleContactChange = (e) => {
    setContact(e.target.value)
  }

  const handleTemaChange = (e) => {
    setTema(e.target.value)
  }


  const validate = () => {
    let nameError = ''
    let emailError = ''
    let contactError = ''
    let temaError = ''

    if (!name) {
      nameError = 'Name is required'
    }

    if (!email.includes('@')) {
      emailError = 'Invalid email'
    }

    if (!contact) {
      contactError = 'Contact number is required'
    }

    if (!tema) {
      temaError = 'Topic is required'
    }


    if (nameError || emailError || contactError || temaError ) {
      setNameError(nameError)
      setEmailError(emailError)
      setContactError(contactError)
      setTemaError(temaError)
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
      setTema('')
      setMessage('')
      setNameError('')
      setEmailError('')
      setContactError('')
      setTemaError('')
  
    }
  }

  return (
    <div className="contacto" id='contacto'>
      <h1 className='text-center mt-5 titulos-color'>CONTACT US</h1>
      <form onSubmit={handleSubmit} action="https://formsubmit.co/e413674aa8b810409548ae9d7c693fa6" method="POST">
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
          <input className="input-mitad" placeholder="TOPIC" name='tema' value={tema} onChange={handleTemaChange}/>
        <div className="error">{temaError}</div>
        </div>
        </div>
        <div className="fila-message">
          <input className="input-full" placeholder="MESSAGE" name='message'/>
        </div>
        <button className="btn-form">SEND</button>      
      </div>
      <input type='hidden' name='_next' value='https://pf-10a-bhm9.vercel.app/'/>
      </form>
    </div>
  )
};

export default Form
