import React from "react";
import { useState } from "react";
import "./App.css";

interface AppProps {
  title: string;
}

export const App: React.FC<AppProps> = ({ children, title }) => {
  return (
    <>
      <head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Hyperledger AI-FAQ ChatUI LFX project demonstration"
        />
      </head>
      {children}
    </>
  );
};
