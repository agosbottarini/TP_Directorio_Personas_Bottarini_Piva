import fs from 'file-system';
import path from 'path';
import Link from 'next/link';

export default async function Home() {
  const filePath = path.join(process.cwd(), 'src', 'app', 'components',  'ObjPersonas', 'personas.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const personas = JSON.parse(jsonData);

  return (
    <div>
      <h1>Lista de Personas</h1>
      <ul>
        {personas.map(persona => (
          <li key={persona.id}>
            <Link
              href={`/persona/${persona.id}`} 
            >
              {persona.nombre}
              <br/><br/>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
