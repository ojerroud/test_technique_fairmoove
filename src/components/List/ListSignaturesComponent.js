'use client';
import { useSignatureContext } from '@/contexts/SignatureContext';
import Image from 'next/image';

function ListSignaturesComponent() {
	const { signatures } = useSignatureContext();

	console.log({ signatures });

	return (
		<div className="flex flex-wrap justify-center">
			{signatures.map((signature, index) => (
				<div
					key={index}
					className="max-w-sm mx-4 my-4 rounded overflow-hidden shadow-lg"
				>
					<div className="p-4">
						{/* Photo de l'utilisateur */}
						{signature.personPhoto && (
							<div className="mb-4">
								<Image
									src={URL.createObjectURL(signature.personPhoto)}
									alt="Photo utilisateur"
									className="w-24 h-24 rounded-full border border-gray-400 mx-auto"
									width={100}
									height={100}
								/>
							</div>
						)}

						{/* Logo de l'entreprise */}
						{signature.companyLogo && (
							<div className="mb-4">
								<Image
									src={URL.createObjectURL(signature.companyLogo)}
									alt="Logo entreprise"
									className="w-24 h-24 mx-auto"
									width={100}
									height={100}
								/>
							</div>
						)}

						{/* Détails de la signature */}
						<div className="text-center">
							<p>
								<strong>Intitulé du poste:</strong> {signature.jobTitle}
							</p>
							<p>
								<strong>Téléphone:</strong> {signature.phoneNumber}
							</p>
							<p>
								<strong>Champ Personnalisé:</strong> {signature.customField}
							</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export default ListSignaturesComponent;
