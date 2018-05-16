/**
 * Aplicação
 */
import React from 'react';

// Config
import 'configs/reactotron';

// Rotas
import Routes from './routes';

const App = () => <Routes />;

// Preparando o overlay do reactotron
const OverlayApp = console.tron.overlay(App);

export default OverlayApp;
