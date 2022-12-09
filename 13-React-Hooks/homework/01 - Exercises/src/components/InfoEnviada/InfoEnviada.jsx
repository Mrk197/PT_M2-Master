import React from 'react';
import {useSelector} from 'react-redux';

const InfoEnviada = () => {
   const { formulario } = useSelector((state) => {
      return state;
   });
   const [informacion, setInformacion] = React.useState({
         nombre: '',
         asunto: '',
         emial: '',
         mensaje: ''
   });

   React.useEffect(
      setInformacion({formulario})
   );

   return (
      <div>
         {/*Aquí puedes renderizar la información*/}
      </div>
   );
};

export default InfoEnviada;
