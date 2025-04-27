import AddProgram from './components/AddProgram';
import RegisterClient from './components/RegisterClient';
import EnrollClient from './components/EnrollClient';
import ViewClient from './components/ViewClient';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        🏥 Health Info System
      </h1>

      {/* Search Section */}
      <div className="w-full md:w-2/3 lg:w-1/2 mx-auto mb-10">
        <ViewClient />
      </div>

      {/* Forms Section */}
      <div className="w-full md:w-2/3 lg:w-1/2 mx-auto space-y-12">
        {/* Create Program Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Create Program</h2>
          <AddProgram />
        </div>

        {/* Register Client Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Register Client</h2>
          <RegisterClient />
        </div>

        {/* Enroll Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Enroll Client</h2>
          <EnrollClient />
        </div>
      </div>
    </div>
  );
}

export default App;
