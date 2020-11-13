import React from 'react';
import Module from '../components/Module';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ModuleViewPage = () => {
    return (
        <div className="container">
            <Header />
            <Module />
            <Footer />
        </div>
    );
};

export default ModuleViewPage;