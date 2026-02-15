import React, { useState } from 'react';

const App = () => {
    const [text, setText] = useState('');

    return (
        <div>
            <h1>💖 Hello World!</h1>
            <p>Welcome to your Electron application.</p>
        </div>
    );
};

export default App;
