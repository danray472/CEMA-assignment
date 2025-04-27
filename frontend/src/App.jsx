import { useState } from 'react';
import AddProgram from './components/AddProgram';
import RegisterClient from './components/RegisterClient';
import EnrollClient from './components/EnrollClient';
import ViewClient from './components/ViewClient';

function App() {
  const [activeTab, setActiveTab] = useState('program');

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        🏥 Health Info System
      </h1>

      {/*  Search Section */}
      <div className="w-full md:w-2/3 lg:w-1/2 mx-auto mb-10">
        <ViewClient />
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
  <button
    onClick={() => setActiveTab('program')}
    className={`px-4 py-2 rounded text-sm md:text-base ${activeTab === 'program' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800 border'}`}
  >
    Create Program
  </button>
  <button
    onClick={() => setActiveTab('client')}
    className={`px-4 py-2 rounded text-sm md:text-base ${activeTab === 'client' ? 'bg-green-600 text-white' : 'bg-white text-gray-800 border'}`}
  >
    Register Client
  </button>
</div>


      {/* Form Section */}
      <div className="w-full md:w-2/3 lg:w-1/2 mx-auto">
        {activeTab === 'program' ? <AddProgram /> : <RegisterClient />}
      </div>

      {/*  Enroll Section */}
      <div className="w-full md:w-2/3 lg:w-1/2 mx-auto mt-12">
        <EnrollClient />
      </div>
    </div>
  );
}

export default App;
