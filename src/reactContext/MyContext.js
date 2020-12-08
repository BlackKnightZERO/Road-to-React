import React from 'react';

const MyContext = React.createContext();
const RootProvider = MyContext.Provider;
const GrandGrandChildConsumer = MyContext.Consumer;

export {RootProvider, GrandGrandChildConsumer}