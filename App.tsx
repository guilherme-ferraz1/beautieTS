import React, { Suspense } from 'react';
import Home from './src/screens/Home';
import './src/services/i18n'

export default function App() {
  return (
    <Suspense fallback="Loading...">
      <Home/>
    </Suspense>
  );
};
