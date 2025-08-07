import { DataContext } from '../../contexts/DataContext';
import useDataContext from '../../hooks/useDataContext';

const OutputContainer = () => {
    const { generalInfo } = useDataContext(DataContext);
    return <>{generalInfo.name}</>;
};

export default OutputContainer;
