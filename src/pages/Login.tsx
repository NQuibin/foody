import React from 'react';
import { Button, Layout } from 'antd';
import { signInWithGoogle } from '../services/login.ts';

const App = (): React.ReactElement => {

  const handleLogin = async () => {
    await signInWithGoogle();
  };

  return (
    <Layout className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-2xl mb-2">Welcome to Foody!</h1>
      <h2 className="text-xl mb-2">
        A place to organize your favourite food spots.
      </h2>
      <Button type="primary" onClick={handleLogin}>
        Login
      </Button>
    </Layout>
  );
};

export default App;
