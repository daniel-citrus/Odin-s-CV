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
    const [educationData, setEducationData] = useState([]);

    const insertEducationData = (inputData) => {
        const data = new EducationEntry(
            inputData?.school || '',
            inputData?.degree || '',
            inputData?.gradMonth || '',
            inputData?.gradYear || '',
            inputData?.actualGPA || '',
            inputData?.totalGPA || '',
            inputData?.city || '',
            inputData?.state || '',
            inputData?.courseWork || ''
        );

        setEducationData((prev) => [...prev, data]);
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
