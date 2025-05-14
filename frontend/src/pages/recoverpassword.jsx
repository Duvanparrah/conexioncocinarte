import React, { useState } from 'react';
import RecuperarContraseña from '../components/RecuperarContraseña';
import VerificarCodigo from '../components/VerificarCodigo';
import NuevaContraseña from '../components/NuevaContraseña';

export default function RecoverPassword() {
  const [step, setStep] = useState(1);

  const handleNextStep = () => setStep(prev => prev + 1);

  return (
    <>
      {step === 1 && <RecuperarContraseña onNext={handleNextStep} />}
      {step === 2 && <VerificarCodigo onNext={handleNextStep} />}
      {step === 3 && <NuevaContraseña />}
    </>
  );
}
