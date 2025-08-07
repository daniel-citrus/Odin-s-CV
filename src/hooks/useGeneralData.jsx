import { useState } from 'react';

const useGeneralData = () => {
    const [generalData, setGeneralData] = useState({
        name: '',
        email: '',
        phone: '',
    });

    const updateGeneralData = (id, val) => {
        setGeneralData({
            ...generalData,
            [id]: val,
        });
    };

    return { generalData, updateGeneralData };
};

export default useGeneralData;
