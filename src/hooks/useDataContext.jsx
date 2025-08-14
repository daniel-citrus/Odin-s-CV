import { useContext } from 'react';
import { DataContext } from '../contexts/DataContext';

/* Custom hook to access context data and methods */
const useDataContext = () => {
    const context = useContext(DataContext);

    if (!context) {
        throw new Error(
            'useDataContext must be used within a DataContextProvider'
        );
    }

    return context;
};

export default useDataContext;
