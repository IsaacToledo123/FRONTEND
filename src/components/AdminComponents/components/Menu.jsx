import React from 'react';
import Graficas from '../../../img/graficas.png';
import Egresos from '../../../img/egresos.png';
import Ingresos from '../../../img/ingresos.png';
import Metas from '../../../img/metas.png';
const ColoredSections = () => {
  return (
    <div className="flex flex-col w-screen h-screen bg-gray-700">
      <div className="h-1/4 bg-red-400 mb-3 mt-3 rounded-lg flex items-center">
        <div className="w-1/3 p-4">
          <img src={Graficas} alt="Imagen" className="w-2/4 h-auto mx-auto rounded-lg" />
        </div>
        <div className="w-2/3 h-full bg-red-600 p-4 rounded-xl">
          <div className='flex flex-col items-center justify-center'>
            <h1 className="text-5xl p-2">Gráficas</h1>
            <p className='text-2xl pb-5'>Lleva el control de todas tus finanzas</p>
            <button className='bg-gray-200 p-2 px-5 rounded-lg'><a href="/admin/Graficas">IR</a> </button>
          </div>
        </div>
      </div>

      <div className="h-1/4 bg-blue-400 mb-3 mt-3 rounded-lg flex items-center">
        <div className="w-1/3 p-4">
          <img src={Ingresos} alt="Imagen Azul" className="w-2/4 h-auto mx-auto rounded-lg" />
        </div>
        <div className="w-2/3 h-full bg-blue-600 p-4 rounded-xl">
          <div className='flex flex-col items-center justify-center'>
            <h1 className="text-5xl p-2">Ingresos</h1>
            <p className='text-2xl pb-5'>Controla todos los ingresos de la empresa</p>
            <button className='bg-gray-200 p-2 px-5 rounded-lg'><a href="/admin/paginaIngresos">IR</a> </button>
          </div>
        </div>
      </div>

      <div className="h-1/4 bg-green-400 mb-3 mt-3 rounded-lg flex items-center">
        <div className="w-1/3 p-4">
          <img src={Egresos} alt="Imagen Verde" className="w-2/4 h-auto mx-auto rounded-lg" />
        </div>
        <div className="w-2/3 h-full bg-green-600 p-4 rounded-xl">
          <div className='flex flex-col items-center justify-center'>
            <h1 className="text-5xl p-2">Egreso</h1>
            <p className='text-2xl pb-5'>Evita perdidas de dinero</p>
            <button className='bg-gray-200 p-2 px-5 rounded-lg'><a href="/admin/paginaEgresos">IR</a> </button>
          </div>
        </div>
      </div>

      <div className="h-1/4 bg-yellow-400 mb-3 mt-3 rounded-lg flex items-center">
        <div className="w-1/3 p-4">
          <img src={Metas} alt="Imagen Amarilla" className="w-2/5 h-auto mx-auto rounded-lg" />
        </div>
        <div className="w-2/3 h-full bg-yellow-600 p-4 rounded-xl">
          <div className='flex flex-col items-center justify-center'>
            <h1 className="text-5xl p-2">Metas</h1>
            <p className='text-2xl pb-5'>Define el futuro de tu empresa</p>
            <button className='bg-gray-200 p-2 px-5 rounded-lg'><a href="/ruta-amarilla">IR</a> </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColoredSections;
