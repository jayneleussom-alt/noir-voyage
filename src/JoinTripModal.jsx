import { useState } from 'react'

function JoinTripModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    university: '',
    destination: 'Ghana Heritage Tour'
  })

  const [submitted, setSubmitted] = useState(false)

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // For now, log data to console (Backend integration will go here later!)
    console.log('Student Trip Request:', formData)
    setSubmitted(true)
  }

  const handleClose = () => {
    setSubmitted(false)
    onClose()
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {!submitted ? (
          <>
            <h2>Join a Group Trip ✈️</h2>
            <p>Connect with other students exploring cultural heritage.</p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="e.g. Jayne Leussom"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Student Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="student@university.edu"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="university">University / College</label>
                <input
                  type="text"
                  id="university"
                  name="university"
                  required
                  placeholder="e.g. Howard University"
                  value={formData.university}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="destination">Select Destination</label>
                <select
                  id="destination"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                >
                  <option value="Ghana Heritage Tour">Accra, Ghana (Heritage Tour)</option>
                  <option value="Bahia Afro-Brazilian Circuit">Salvador da Bahia, Brazil</option>
                  <option value="Goree Island Exploration">Dakar, Senegal</option>
                  <option value="New Orleans Cultural Odyssey">New Orleans, USA</option>
                </select>
              </div>

              <div className="form-actions">
                <button type="button" className="btn-secondary" onClick={handleClose}>
                  Cancel
                </button>
                <button type="submit" className="btn-primary">
                  Submit Request
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="success-message">
            <h3>🎉 Request Received!</h3>
            <p>Thanks for registering, {formData.name}. We’ve sent the group trip itinerary details to <strong>{formData.email}</strong>.</p>
            <button className="btn-primary" style={{ marginTop: '1.5rem' }} onClick={handleClose}>
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default JoinTripModal