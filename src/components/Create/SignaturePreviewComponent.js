import NextImage from 'next/image';

function SignaturePreviewComponent({ formData, isCreating }) {
	return (
		isCreating && (
			<div className="max-w-md mx-auto mt-8 p-4 border border-gray-300 rounded-lg shadow-md">
				<h3 className="text-center mb-4 text-lg font-semibold">
					Prévisualisation de la signature:
				</h3>

				{/* Photo de l'utilisateur */}
				{formData.personPhoto && (
					<div className="flex justify-center items-center mb-4">
						<div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-gray-400">
							<NextImage
								src={URL.createObjectURL(formData.personPhoto)}
								alt="Photo utilisateur"
								width={80}
								height={80}
							/>
						</div>
					</div>
				)}

				{/* Logo de l'entreprise */}
				{formData.companyLogo && (
					<div className="flex justify-center mb-4">
						<div className="relative w-16 h-16 overflow-hidden">
							<NextImage
								src={URL.createObjectURL(formData.companyLogo)}
								alt="Logo entreprise"
								width={40}
								height={40}
							/>
						</div>
					</div>
				)}

				{/* Détails de la signature */}
				<div className="text-center">
					<p>
						<strong>Intitulé du poste:</strong> {formData.jobTitle}
					</p>
					<p>
						<strong>Téléphone:</strong> {formData.phoneNumber}
					</p>
					<p>
						<strong>Champ Personnalisé:</strong> {formData.customField}
					</p>
				</div>
			</div>
		)
	);
}
export default SignaturePreviewComponent;
