import React from "react";

function Internship() {
  return (
    <section className="mb-6">
      <h2 className="text-2xl font-bold border-b-2 border-gray-300 mb-2">
        INTERNSHIP
      </h2>
      <div className="mb-2">
        <div className="flex justify-between">
          <span className="font-semibold">
            J.P Morgan{" "}
            <a href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_3dCnfNrK2m6M8ozu2_1726161770910_completion_certificate.pdf"
            className='text-blue-600'>
              (link)
            </a>
          </span>
          <span>Sep 2024</span>
        </div>
        <p className="italic">Software Engineering Virtual Experience</p>
        <ul className="list-disc list-inside mt-2">
          <li>
            Set up a local dev environment by downloading the necessary files,
            tools and dependencies.
          </li>
          <li>
            Fixed broken files in the repository to make web application output
            correctly.
          </li>
          <li>
            Utilized JPMorgan Chase's open-source library, Perspective, to
            create a visually appealing live graph for monitoring data feeds.
          </li>
          <li>
            <span className="font-semibold">Tech Stack</span> - Python, Git, Technical Communication, Financial
            Analysis
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Internship;
