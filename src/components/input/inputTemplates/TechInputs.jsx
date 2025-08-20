import GeneralInput from '../inputBlocks/GeneralInput';
import EducationInput from '../inputBlocks/EducationInput';
import useDataContext from '../../../hooks/useDataContext';
import { useEffect } from 'react';

const TechInputs = () => {
    const {  updateGeneralData, insertEducationData } =
        useDataContext();

    useEffect(() => {
        updateGeneralData('name', 'Daniel');
        updateGeneralData('email', 'dandcalvo@gmail.com');
        updateGeneralData('phone', '510-846-4484');
        insertEducationData({
            school: 'Texas A&M University - Commerce',
            degree: "Bachelor's Degree in Computer Science",
            gradMonth: 'December',
            gradYear: '2019',
            actualGPA: '3.5',
            totalGPA: '4.0',
            city: 'Commerce',
            state: 'TX',
            courseWork:
                'Data Structures and Algorithms, Operating Systems, Digital Logic & Circuitry, Data Analytics, Math Statistics, Project Development',
        });
        return () => {};
    }, []);

    return (
        <>
            <GeneralInput />
            <EducationInput />
            {/* Experience */}
            {/* Projects */}
            {/* Technical Skills */}
        </>
    );
};

export default TechInputs;
