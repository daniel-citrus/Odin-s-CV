import InputContainer from './input/InputContainer';
import OutputContainer from './output/OutputContainer';
import DataContextWrapper from '../contexts/DataContext';

const ResumeBuilder = () => {
    return (
        <DataContextWrapper>
            <div className="min-h-screen bg-gray-50 p-4 lg:p-8">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8">
                        Resume Builder
                    </h1>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                        <div className="lg:col-span-1">
                            <InputContainer />
                        </div>
                        <div className="lg:col-span-2">
                            <OutputContainer />
                        </div>
                    </div>
                </div>
            </div>
        </DataContextWrapper>
    );
};

export default ResumeBuilder;
