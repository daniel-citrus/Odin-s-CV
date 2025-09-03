import { useState } from 'react';

class ExperienceData {
    constructor(
        organization = '',
        role = '',
        startMonth = '',
        endMonth = '',
        present = false,
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
        this.present = present;
        this.startYear = startYear;
        this.endYear = endYear;
        this.city = city;
        this.state = state;
        this.description = description;
    }
}

const useExperienceData = () => {
    const [experienceData, setExperienceData] = useState([]);

    const insertExperience = (input) => {
        const newData = new ExperienceData(
            input?.organization || '',
            input?.role || '',
            input?.startMonth || '',
            input?.endMonth || '',
            input?.present,
            input?.startYear || '',
            input?.endYear || '',
            input?.city || '',
            input?.state || '',
            input?.description || []
        );

        setExperienceData((prev) => [...prev, newData]);
    };

    // delete experience
    const deleteExperience = (id) => {
        setExperienceData(experienceData.filter((entry) => entry.id !== id));
    };

    // update experience
    const updateExperience = (id, newEntry) => {
        setExperienceData(
            experienceData.map((entry) => (entry.id === id ? newEntry : entry))
        );
    };

    return {
        experienceData,
        insertExperience,
        deleteExperience,
        updateExperience,
    };
};

export default useExperienceData;
