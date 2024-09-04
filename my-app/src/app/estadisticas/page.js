import fs from 'file-system';
import path from 'path';
import styles from './estadisticas.module.css';

export default async function Estadisticas() {
  const filePath = path.join(process.cwd(), 'src', 'app', 'components', 'ObjPersonas', 'personas.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const personas = JSON.parse(jsonData);

  const edades = personas
    .map(persona => Number(persona.edad))
    .filter(edad => !isNaN(edad)); 

  const mayoresDe35 = personas.filter(persona => Number(persona.edad) > 35);

  const maxEdad = Math.max(...edades);
  const minEdad = Math.min(...edades);

  const personasMayorEdad = personas.filter(persona => Number(persona.edad) === maxEdad);
  const personasMenorEdad = personas.filter(persona => Number(persona.edad) === minEdad);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Estadísticas Generales</h1>

      <h2 className={styles.subtitle}>Número de personas mayores de 35 años:</h2>
      <p>{mayoresDe35.length}</p>

      <h2 className={styles.subtitle}>Persona(s) de mayor edad ({maxEdad} años):</h2>
      <ul className={styles.statsList}>
        {personasMayorEdad.map(persona => (
          <li key={persona.id}>{persona.nombre} {persona.apellido}</li>
        ))}
      </ul>

      <h2 className={styles.subtitle}>Persona(s) de menor edad ({minEdad} años):</h2>
      <ul className={styles.statsList}>
        {personasMenorEdad.map(persona => (
          <li key={persona.id}>{persona.nombre} {persona.apellido}</li>
        ))}
      </ul>
    </div>
  );
}
