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
        new EducationEntry('TAMUC'),
        new EducationEntry('Encinal High'),
    ]);

    const insertNewEducationData = () => {
        const data = new EducationEntry();

        setEducationData([...educationData, data]);
    };

    const updateEducationData = (id, dataName, newValue) => {
        setEducationData(
            educationData.map((entry) =>
                entry.id === id ? (entry[dataName] = newValue) : entry
            )
        );
    };

    const deleteEducationData = (id) => {
        setEducationData(educationData.filter((entry) => entry.id !== id));
    };

    return {
        educationData,
        insertNewEducationData,
        updateEducationData,
        deleteEducationData,
    };
};

export default useEducationData;
