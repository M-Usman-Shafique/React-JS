import React from 'react';
import ComponentA from './ComponentA';
import { UserProvider } from './UserContext';

function App() {
  return (
    <UserProvider>
      <ComponentA />
    </UserProvider>
  );
}

export default App;