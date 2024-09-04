import fs from 'file-system';
import path from 'path';

export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), 'src', 'app', 'components',  'ObjPersonas', 'personas.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const personas = JSON.parse(jsonData);

  return personas.map(persona => ({
    id: persona.id.toString(),  
  }));
}

export default async function Personas({ params }) {
  const { id } = params;

  const filePath = path.join(process.cwd(), 'src', 'app', 'components',  'ObjPersonas', 'personas.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const personas = JSON.parse(jsonData);

  const personaSeleccionada = personas.find(persona => persona.id.toString() === id);

  if (!personaSeleccionada) {
    return <div>Persona no encontrada</div>;
  }

  return (
    <div>
      <h1>Datos de {personaSeleccionada.nombre}</h1>
      <p>Apellido: {personaSeleccionada.apellido}</p>
      <p>Edad: {personaSeleccionada.edad}</p>
      <p>Email: {personaSeleccionada.email}</p>
    </div>
  );
}
