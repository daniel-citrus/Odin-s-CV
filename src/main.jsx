import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import InputForm from './components/input/inputForm';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <InputForm />
    </StrictMode>
);
