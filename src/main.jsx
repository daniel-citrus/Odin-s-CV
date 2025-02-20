import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import General from './components/input/General';
import Educational from './components/input/Educational';
import Practical from './components/input/Practical';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <General />
        <Educational />
        <Practical />
    </StrictMode>
);
