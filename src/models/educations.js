import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
const eduList = [
    {
        id: 0,
        date: "09/2018 - present",
        role: "Undergraduate",
        organization: "University of Toronto(St. George)",
        description: "Studying in computer science specialist and statistics minor program, focusing on web development and AI",
        grade: "Sessional CGPA: 3.7",
        icon:<FontAwesomeIcon icon={faUniversity} />
    },
    {
        id: 1,
        date: "09/2017 - 05/2018",
        role: "Undergraduate",
        organization: "University of Toronto Scarborough",
        description: "Studied in computer, mathematical, and statistical science",
        grade: "Sessional CGPA: 3.8",
        icon:<FontAwesomeIcon icon={faUniversity} />
    },
    {
        id: 2,
        date: "06/2015 - 06/2017",
        role: "High School Student",
        organization: "Thornlea S.S.",
        description: "Graduated from high schools",
        grade: "Average 98% on the grade 12 course",
        icon:<FontAwesomeIcon icon={faGraduationCap} />
    }
]

export default eduList;
