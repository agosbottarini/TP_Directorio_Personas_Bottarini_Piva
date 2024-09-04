import fs from 'file-system';
import path from 'path';
import Link from 'next/link';
import styles from './page.module.css';

export default async function Home() {
  const filePath = path.join(process.cwd(), 'src', 'app', 'components', 'ObjPersonas', 'personas.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const personas = JSON.parse(jsonData);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lista de Personas</h1>
      <ul className={styles.grid}>
        {personas.map(persona => (
          <li key={persona.id} className={styles.gridItem}>
            <Link href={`/persona/${persona.id}`}>
              {persona.nombre}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
