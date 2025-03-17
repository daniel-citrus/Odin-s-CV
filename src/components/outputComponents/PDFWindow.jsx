import { jsPDF } from 'jspdf';
import { useContext, useEffect } from 'react';
import { DataContext } from '../DataContext';

export default function PDFWindow() {
    const resume = new jsPDF();
    const { educationData, generalData, practicalData } =
        useContext(DataContext);

    console.log(educationData);
    resume.text(educationData[0].school, 10, 10);

    return (
        <div className='pdfWindow w-auto h-screen sm:aspect-auto'>
            <iframe
                className='w-full h-full'
                src={resume.output('datauristring') + '#zoom=80'}
                height='100%'
                width='100%'
            ></iframe>
        </div>
    );
}
