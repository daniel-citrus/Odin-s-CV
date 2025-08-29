import GeneralInput from './GeneralInput';
import EducationInput from './EducationInput';
import ExperienceInput from './ExperienceInput';

const InputContainer = () => {
    /* useEffect(() => {
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
    }, []); */

    return (
        <form>
            <GeneralInput />
            <EducationInput />
            <ExperienceInput />
            {/* Projects */}
            {/* Technical Skills */}
        </form>
    );
};

export default InputContainer;
