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
        <div className='pdfWindow'>
            <iframe
                className='w-full'
                src={resume.output('datauristring')}
            ></iframe>
        </div>
    );
}
