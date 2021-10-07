import { useState, useRef, useEffect } from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqResListado, Usuario } from '../interface/reqRes';

export const useUsuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const paginaRef = useRef(1);

  useEffect(() => {
    cargarUsuarios();
  }, []);

  const cargarUsuarios = async () => {
    const resp = await reqResApi.get<ReqResListado>('/users', {
      params: {
        page: paginaRef.current,
      },
    });

    if (resp.data.data.length > 0) {
      setUsuarios(resp.data.data);
    } else {
      alert('No hay mas registros');
      paginaRef.current--;
    }
  };

  const paginaSiguiente = () => {
    cargarUsuarios();
    paginaRef.current++;
  };

  const paginaAnterior = () => {
      if (paginaRef.current > 1 ){
          paginaRef.current--;
          cargarUsuarios();
      }
  };

  return { usuarios, paginaSiguiente, paginaAnterior };
};
