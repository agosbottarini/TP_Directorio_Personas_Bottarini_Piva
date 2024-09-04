import fs from 'file-system';
import path from 'path';

export async function POST(req) {
  const filePath = path.join(process.cwd(), 'src', 'app', 'components',  'ObjPersonas', 'personas.json');

  const jsonData = fs.readFileSync(filePath, 'utf8');
  const personas = JSON.parse(jsonData);

  const body = await req.json();

  const nuevaPersona = {
    id: personas.length + 1,  
    nombre: body.nombre,
    apellido: body.apellido,
    email: body.email,
    edad: Number(body.edad),
  };

  personas.push(nuevaPersona);

  fs.writeFileSync(filePath, JSON.stringify(personas, null, 2));

  return new Response(JSON.stringify({ message: 'Persona agregada exitosamente' }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
