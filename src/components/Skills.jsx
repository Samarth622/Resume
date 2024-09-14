import React from 'react'

function Skills() {
    return (
        <section className="mb-6">
            <h2 className="text-2xl font-bold border-b-2 border-gray-300 mb-2">SKILLS</h2>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <span className="font-semibold">Languages:</span> C, C++, JavaScript, Typescript
                </div>
                <div>
                    <span className="font-semibold">Frameworks:</span> HTML & CSS, Reactjs, Tailwindcss, BootStrap, Expressjs
                </div>
                <div>
                    <span className="font-semibold">Tools/Platforms:</span> MYSQL, Mongodb, Docker, Kubernetes, Github, Git, Redux toolkit
                </div>
                <div>
                    <span className="font-semibold">Operating Systems:</span> Windows, Linux
                </div>
                <div>
                    <span className="font-semibold">Libraries:</span> JQuery, Nodejs, Axios, Nodemailer, RESTful APIs
                </div>
                <div>
                    <span className="font-semibold">Soft Skills:</span> Problem-solving skills, Team Player, Project Management, Adaptability
                </div>
            </div>
        </section>
    )
}

export default Skills