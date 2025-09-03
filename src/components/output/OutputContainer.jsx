import GeneralOutput from './GeneralOutput';
import EducationOutput from './EducationOutput';

const OutputContainer = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Resume Container */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    {/* Resume Header */}
                    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-6">
                        <h1 className="text-3xl font-bold text-center mb-2">Resume</h1>
                        <p className="text-blue-100 text-center text-lg">Professional CV</p>
                    </div>
                    
                    {/* Resume Content */}
                    <div className="px-8 py-6 space-y-8">
                        <GeneralOutput />
                        <EducationOutput />
                        
                        {/* Placeholder sections for future components */}
                        <div className="border-t-2 border-gray-200 pt-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Experience</h2>
                            <div className="bg-gray-50 rounded-lg p-4 text-gray-600 text-center">
                                <p>Experience section coming soon...</p>
                            </div>
                        </div>
                        
                        <div className="border-t-2 border-gray-200 pt-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Skills</h2>
                            <div className="bg-gray-50 rounded-lg p-4 text-gray-600 text-center">
                                <p>Skills section coming soon...</p>
                            </div>
                        </div>
                        
                        <div className="border-t-2 border-gray-200 pt-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Projects</h2>
                            <div className="bg-gray-50 rounded-lg p-4 text-gray-600 text-center">
                                <p>Projects section coming soon...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OutputContainer;
