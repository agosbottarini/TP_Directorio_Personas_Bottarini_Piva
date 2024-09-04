import fs from 'file-system';
import path from 'path';
import styles from './persona.module.css';

export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), 'src', 'app', 'components', 'ObjPersonas', 'personas.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const personas = JSON.parse(jsonData);

  return personas.map(persona => ({
    id: persona.id.toString(),
  }));
}

export default async function Personas({ params }) {
  const { id } = params;

  const filePath = path.join(process.cwd(), 'src', 'app', 'components', 'ObjPersonas', 'personas.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const personas = JSON.parse(jsonData);

  const personaSeleccionada = personas.find(persona => persona.id.toString() === id);

  if (!personaSeleccionada) {
    return <div className={styles.container}>Persona no encontrada</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Datos de {personaSeleccionada.nombre}</h1>
      <div className={styles.grid}>
        <div className={styles.gridItem}>Apellido: {personaSeleccionada.apellido}</div>
        <div className={styles.gridItem}>Edad: {personaSeleccionada.edad}</div>
        <div className={styles.gridItem}>Email: {personaSeleccionada.email}</div>
      </div>
    </div>
  );
}
