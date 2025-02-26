import { jsPDF } from 'jspdf';

export default function PDFWindow() {
    const resume = new jsPDF();
    resume.text('Hello world!', 10, 10);

    return (
        <div className='pdfWindow'>
            <iframe
                className='w-full'
                src={resume.output('datauristring')}
            ></iframe>
        </div>
    );
}
