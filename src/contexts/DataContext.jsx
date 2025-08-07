import { createContext, useState } from 'react';

const DataContext = createContext();

const DataContextWrapper = ({ children }) => {
    const [generalInfo, setGeneralInfo] = useState({
        name: '',
        email: '',
        phone: '',
    });

    const updateGeneralInfo = (id, val) => {
        setGeneralInfo({
            ...generalInfo,
            [id]: val,
        });
    };

    const data = { generalInfo, updateGeneralInfo };

    return <DataContext value={data}>{children}</DataContext>;
};

export { DataContextWrapper as default, DataContext };
