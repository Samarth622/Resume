import React from 'react'

function Projects() {
    return (
        <section className="mb-6">
            <h2 className="text-2xl font-bold border-b-2 border-gray-300 mb-2">PROJECTS</h2>
            <div className="mb-4">
                <div className="flex justify-between">
                    <span className="font-semibold">ERP <a href="https://github.com/Samarth622/School-ERP" className='text-blue-600'>(link)</a></span>
                    <span className="italic"><span className='font-semibold'>Teck Stack</span> - ReactJs, ExpressJs, NodeJS, Mongodb</span>
                </div>
                <ul className="list-disc list-inside mt-2">
                    <li>Designed intuitive UI, cutting training time by 30%.</li>
                    <li>Implemented Robust APIs for handling critical operations</li>
                    <li>Achieved 95% user adoption in school operations.</li>
                </ul>
            </div>
            <div>
                <div className="flex justify-between">
                    <span className="font-semibold">Ecommerce Website <a href="https://github.com/Samarth622/E-Comm" className='text-blue-600'>(link)</a></span>
                    <span className="italic"><span className='font-semibold'>Teck Stack</span> - Angular, Typescript, HTML, CSS</span>
                </div>
                <ul className="list-disc list-inside mt-2">
                    <li>Developed a full-featured e-commerce website with separate sections for sellers and buyers.</li>
                    <li>Implemented responsive, intuitive, and user-friendly interfaces, enhancing overall user experience.</li>
                    <li>Utilized Angular for dynamic data binding and efficient single-page application performance.</li>
                </ul>
            </div>
        </section>
    )
}

export default Projects