import React from 'react'
import { Github, Linkedin, Mail, Phone } from "lucide-react"

function Header() {
    return (
        <header className="text-center mb-6">
            <h1 className="text-4xl font-bold mb-2">SAMARTH GUPTA</h1>
            <p className="mb-2">
                <Phone className="inline mr-2" size={16} />
                +91 8736934451 • Shahjahanpur, Uttar Pradesh
            </p>
            <div className="flex justify-center space-x-4">
                <a href="guptasamarth622@gmail.com" className="flex items-center">
                    <Mail className="mr-1" size={16} />
                    <span className='text-blue-600'>guptasamarth622@gmail.com</span>
                </a>
                <a href="https://linkedin.com/in/samarthgupta622" className="flex items-center">
                    <Linkedin className="mr-1" size={16} />
                    <span className='text-blue-600'>LinkedIn</span>
                </a>
                <a href="https://github.com/Samarth622" className="flex items-center">
                    <Github className="mr-1" size={16} />
                    <span className="text-blue-600">Github</span>
                </a>
            </div>
        </header>
    )
}

export default Header