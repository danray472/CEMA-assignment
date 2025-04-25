import AddProgram from './components/AddProgram'
import RegisterClient from './components/RegisterClient'
import EnrollClient from './components/EnrollClient';
import ViewClient from './components/ViewClient';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
        🏥 Health Info System
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AddProgram />
        <RegisterClient />
      </div>

      <EnrollClient />
      <ViewClient />
    </div>
  );
}

export default App;

