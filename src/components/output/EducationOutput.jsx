import useDataContext from '../../hooks/useDataContext';

const EducationOutput = () => {
    const { educationData } = useDataContext();

    if (!educationData || educationData.length === 0) {
        return null;
    }

    return (
        <div>
            <h2>Education</h2>
            <div>
                {educationData.map((data) => (
                    <div key={data.id}>
                        <div>
                            <div>
                                <h3>{data.school}</h3>
                                <p>{data.degree}</p>
                                <div>
                                    <span>{data.gradMonth} {data.gradYear}</span>
                                    {data.city && data.state && (
                                        <span>•</span>
                                    )}
                                    {data.city && data.state && (
                                        <span>{data.city}, {data.state}</span>
                                    )}
                                </div>
                                {data.actualGPA && data.totalGPA && (
                                    <div>
                                        GPA: {data.actualGPA}/{data.totalGPA}
                                    </div>
                                )}
                            </div>
                        </div>
                        {data.courseWork && (
                            <div>
                                <h4>Relevant Coursework:</h4>
                                <p>{data.courseWork}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EducationOutput;
