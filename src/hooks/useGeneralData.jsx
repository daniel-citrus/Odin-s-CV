import { useState } from 'react';

const useGeneralData = () => {
    const [generalData, setGeneralData] = useState({
        name: '',
        email: '',
        phone: '',
    });

    const updateGeneralData = (id, val) => {
        setGeneralData(prev => ({
            ...prev,
            [id]: val,
        }));
    };

    return { generalData, updateGeneralData };
};

export default useGeneralData;
