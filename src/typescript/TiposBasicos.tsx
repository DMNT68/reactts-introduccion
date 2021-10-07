export const TiposBasicos = () => {
  const nombre: string = 'Andrés';
  const edad: number = 28;
  const estaActivo: boolean = true;

  const poderes: string[] = ['Velocidad', 'Volar', 'Respirar en el agua'];

  return (
    <>
      <h3>Tipos básicos</h3>
      {nombre}, {edad}, {estaActivo ? 'activo' : 'no activo'}
      <br />
      {poderes.join(', ')}
    </>
  );
};
