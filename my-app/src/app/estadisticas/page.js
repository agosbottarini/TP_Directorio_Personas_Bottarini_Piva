import fs from 'file-system';
import path from 'path';

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
    <div>
      <h1>Estadísticas Generales</h1>

      <h2>Número de personas mayores de 35 años: </h2>
      <p>{mayoresDe35.length}</p>

      <h2>Persona(s) de mayor edad ({maxEdad} años):</h2>
      <ul>
        {personasMayorEdad.map(persona => (
          <li key={persona.id}>{persona.nombre} {persona.apellido}</li>
        ))}
      </ul>

      <h2>Persona(s) de menor edad ({minEdad} años):</h2>
      <ul>
        {personasMenorEdad.map(persona => (
          <li key={persona.id}>{persona.nombre} {persona.apellido}</li>
        ))}
      </ul>
    </div>
  );
}
