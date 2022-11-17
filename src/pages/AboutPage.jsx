import React from 'react'
import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'


function AboutPage() {
  return (
    <Card>
        <div className="about">AboutPage</div>
        <h1>About This Project</h1>
        <p>This is a reacct app to leave feedback for a produxt or a service</p>
        <p>
            <Link to={'/'}>
            Version 1.0.0
            </Link>
            </p>
        <p>Version 1.0.0</p>
    </Card>
  )
}

export default AboutPage