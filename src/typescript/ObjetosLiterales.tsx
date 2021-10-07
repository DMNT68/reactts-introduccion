interface Persona {
  nombreCompleto: string;
  edad: number;
  direccion: Direccion;
}

interface Direccion {
  pais: string;
  casaNo: number;
}

export const ObjetosLiterales = () => {
  const persona: Persona = {
    nombreCompleto: 'Andrés',
    edad: 28,
    direccion: {
      pais: 'Ecuador',
      casaNo: 416,
    },
  };

  return (
    <>
      <h3>Objetos literales</h3>

      <code>
        <pre>{JSON.stringify(persona, null, 2)}</pre>
      </code>
    </>
  );
};
