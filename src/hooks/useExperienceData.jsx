import { useState } from 'react';

class ExperienceData {
    constructor(
        organization = '',
        role = '',
        startMonth = '',
        endMonth = '',
        startYear = '',
        endYear = '',
        city = '',
        state = '',
        description = []
    ) {
        this.id = crypto.randomUUID();
        this.organization = organization;
        this.role = role;
        this.startMonth = startMonth;
        this.endMonth = endMonth;
        this.startYear = startYear;
        this.endYear = endYear;
        this.city = city;
        this.state = state;
        this.description = description;
    }
}

const useExperienceData = () => {
    const [experienceData, setExperienceData] = useState([
        
    ]);

    const useInsertExperience = (input) => {
        const newData = ExperienceData(
            input?.organization || '',
            input?.role || '',
            input?.startMonth || '',
            input?.endMonth || '',
            input?.startYear || '',
            input?.endYear || '',
            input?.city || '',
            input?.state || '',
            input?.description || ''
        );

        setExperienceData((prev) => {
            [...prev, newData];
        });
    };

    // delete experience
    const useDeleteExperience = (id) => {
        setExperienceData(experienceData.filter((entry) => entry.id !== id));
    };

    // update experience
    const useUpdateExperience = (id, newEntry) => {
        setExperienceData(
            experienceData.map((entry) => (entry.id === id ? newEntry : entry))
        );
    };

    return {
        experienceData,
        useInsertExperience,
        useDeleteExperience,
        useUpdateExperience,
    };
};

export default useExperienceData;
