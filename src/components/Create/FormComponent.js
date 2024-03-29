'use client';
import { useRef, useState } from 'react';
import { useSignatureContext } from '@/contexts/SignatureContext';
import { v4 as uuidv4 } from 'uuid';
import SignaturePreviewComponent from '@/components/Create/SignaturePreviewComponent';

const initFormData = {
	personPhoto: null,
	companyLogo: null,
	jobTitle: '',
	phoneNumber: '',
	customField: '',
};

function FormComponent() {
	const formRef = useRef(null);
	const { addSignature } = useSignatureContext();
	const [isCreating, setIsCreating] = useState(false); // affiche la card quand on commence a "remplir" le signature
	const [formData, setFormData] = useState(initFormData);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData({
			...formData,
			[name]: value,
		});
		if (!isCreating) setIsCreating(true);
	};

	const handleFileChange = async (event) => {
		const file = event.target.files[0];
		const resizedImage = await resizeImage(file);

		setFormData({
			...formData,
			[event.target.name]: resizedImage,
		});
		if (!isCreating) setIsCreating(true);
	};

	// Fonction pour redimensionner l'image
	const resizeImage = async (file) => {
		return new Promise((resolve) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = (event) => {
				const img = new Image();
				img.src = event.target.result;
				img.onload = () => {
					const canvas = document.createElement('canvas');
					const ctx = canvas.getContext('2d');
					canvas.width = 100;
					canvas.height = 100;
					ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
					ctx.canvas.toBlob(
						(blob) => {
							resolve(new File([blob], file.name, { type: 'image/jpeg' }));
						},
						'image/jpeg',
						1
					);
				};
			};
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		const uniqueID = uuidv4();

		const newSignature = {
			id: uniqueID,
			personPhoto: formData.personPhoto,
			companyLogo: formData.companyLogo,
			jobTitle: formData.jobTitle,
			phoneNumber: formData.phoneNumber,
			customField: formData.customField,
		};

		addSignature(newSignature);

		/**reset formData values, isCreating & form */
		setFormData(initFormData);
		setIsCreating(false);
		formRef.current.reset();
	};

	return (
		<div>
			{/** formulaire pour generer une signature */}
			<form
				onSubmit={handleSubmit}
				ref={formRef}
				className="max-w-md mx-auto p-4 bg-gray-100 rounded-md shadow-md"
			>
				<div className="mb-4">
					<label htmlFor="personPhoto" className="block mb-1">
						Photo de l&apos;utilisateur
					</label>
					<input
						type="file"
						id="personPhoto"
						name="personPhoto"
						onChange={handleFileChange}
						accept="image/*"
						className="border border-gray-300 p-2 rounded-md w-full"
					/>
				</div>

				<div className="mb-4">
					<label htmlFor="companyLogo" className="block mb-1">
						Logo de l&apos;entreprise (obligatoire)
						<span className="text-red-500">*</span>
					</label>
					<input
						type="file"
						id="companyLogo"
						name="companyLogo"
						onChange={handleFileChange}
						accept="image/*"
						className="border border-gray-300 p-2 rounded-md w-full"
						required
					/>
				</div>

				<div className="mb-4">
					<label htmlFor="jobTitle" className="block mb-1">
						Intitulé du poste
					</label>
					<input
						type="text"
						id="jobTitle"
						name="jobTitle"
						value={formData.jobTitle}
						onChange={handleInputChange}
						className="border border-gray-300 p-2 rounded-md w-full"
					/>
				</div>

				<div className="mb-4">
					<label htmlFor="phoneNumber" className="block mb-1">
						Téléphone
					</label>
					<input
						type="tel"
						id="phoneNumber"
						name="phoneNumber"
						value={formData.phoneNumber}
						onChange={handleInputChange}
						className="border border-gray-300 p-2 rounded-md w-full"
					/>
				</div>

				<div className="mb-4">
					<label htmlFor="customField" className="block mb-1">
						Champ personnalisé
					</label>
					<input
						type="text"
						id="customField"
						name="customField"
						value={formData.customField}
						onChange={handleInputChange}
						className="border border-gray-300 p-2 rounded-md w-full"
					/>
				</div>

				<button
					type="submit"
					className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
				>
					Enregistrer
				</button>
			</form>
			<SignaturePreviewComponent formData={formData} isCreating={isCreating} />
		</div>
	);
}

export default FormComponent;
