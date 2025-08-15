import { useState } from 'react';

class EducationEntry {
    constructor(
        school = '',
        degree = '',
        gradMonth = '',
        gradYear = '',
        actualGPA = '',
        totalGPA = '',
        city = '',
        state = '',
        courseWork = ''
    ) {
        this.id = crypto.randomUUID();
        this.school = school;
        this.degree = degree;
        this.gradMonth = gradMonth;
        this.gradYear = gradYear;
        this.actualGPA = actualGPA;
        this.totalGPA = totalGPA;
        this.city = city;
        this.state = state;
        this.courseWork = courseWork;
    }
}

const useEducationData = () => {
    const [educationData, setEducationData] = useState([
        new EducationEntry(
            'Texas A&M University - Commerce',
            "Bachelor's Degree in Computer Science",
            'December',
            '2019',
            '3.5',
            '4.0',
            'Commerce',
            'TX',
            'Data Structures and Algorithms, Operating Systems, Digital Logic & Circuitry, Data Analytics, Math Statistics, Project Development'
        ),
        new EducationEntry(
            'Encinal High School',
            'High School Diploma',
            'May',
            '2015',
            '3.8',
            '4.0',
            'Encinal',
            'TX',
            'Advanced Mathematics, Physics, Chemistry, English Literature, Computer Programming, Spanish'
        ),
    ]);

    const insertEducationData = (inputData) => {
        const data = new EducationEntry(...inputData);

        setEducationData([...educationData, data]);
    };

    const updateEducationData = (id, newEntry) => {
        setEducationData(
            educationData.map((entry) => (entry.id === id ? newEntry : entry))
        );
    };

    const deleteEducationData = (id) => {
        setEducationData(educationData.filter((entry) => entry.id !== id));
    };

    return {
        educationData,
        insertEducationData,
        updateEducationData,
        deleteEducationData,
    };
};

export default useEducationData;
