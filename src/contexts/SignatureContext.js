'use client';
import React, { createContext, useContext, useState } from 'react';

const SignatureContext = createContext();

export const useSignatureContext = () => useContext(SignatureContext);

export const AppProvider = ({ children }) => {
	const [signatures, setSignatures] = useState([]);

	const addSignature = (newSignature) => {
		setSignatures((prevSignatures) => [...prevSignatures, newSignature]);
	};

	const removeSignatureById = (id) => {
		setSignatures((prevSignatures) =>
			prevSignatures.filter((signature) => signature.id !== id)
		);
	};

	const contextValue = {
		signatures,
		addSignature,
		removeSignatureById,
	};

	return (
		<SignatureContext.Provider value={contextValue}>
			{children}
		</SignatureContext.Provider>
	);
};
