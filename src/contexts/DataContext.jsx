import { createContext } from 'react';
import useGeneralData from '../hooks/useGeneralData';

const DataContext = createContext();

/**
 * DataContext - Aggregates multiple custom hooks into a single context
 * This approach combines separate custom hooks (useGeneralData, useEducationData, etc.)
 * into one context provider, avoiding the need to nest multiple context providers.
 *
 * Usage:
 * - Wrap your app with DataContextWrapper
 * - Use useDataContext() in child components to access all data
 * - Each hook's functions are available through the context
 */
const DataContextWrapper = ({ children }) => {
    const generalDataHook = useGeneralData();
    const data = { ...generalDataHook };

    return <DataContext value={data}>{children}</DataContext>;
};

export { DataContextWrapper as default, DataContext };
