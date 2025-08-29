import useDataContext from '../../hooks/useDataContext';

const ExperienceInput = () => {
    const {
        experienceData,
        useInsertExperience,
        useDeleteExperience,
        useUpdateExperience,
    } = useDataContext();

    return (
        <>
            <div>Experience</div>
            <ul>
                {experienceData.map((entry) => {
                    return (
                        <li key={entry.id}>
                            <div>{entry.organization}</div>
                            <div>{entry.role}</div>
                            <div>{entry.startMonth}</div>
                            <div>{entry.endMonth}</div>
                            <div>{entry.startYear}</div>
                            <div>{entry.endYear}</div>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default ExperienceInput;
