import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import InputForm from './components/InputForm';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <InputForm />
    </StrictMode>
);
