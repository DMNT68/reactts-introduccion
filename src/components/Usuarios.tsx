import { Usuario } from '../interface/reqRes';
import { useUsuarios } from '../hooks/useUsuarios';

export const Usuarios = () => {
  const { usuarios, paginaAnterior, paginaSiguiente } = useUsuarios();

  const renderItem = ({ id, first_name, last_name, email, avatar }: Usuario) => {
    return (
      <tr key={id.toString()}>
        <th>
          <img src={avatar} alt={first_name} style={{ width: 35, borderRadius: 100 }} />
        </th>
        <th>
          {first_name} {last_name}
        </th>
        <th>{email}</th>
      </tr>
    );
  };

  return (
    <>
      <h3>Usuarios:</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>{usuarios.map(renderItem)}</tbody>
      </table>
      <button className="btn btn-primary" onClick={paginaAnterior}>
        Anterioes
      </button>
      <button className="btn btn-primary" onClick={paginaSiguiente}>
        Siguiente
      </button>
    </>
  );
};
