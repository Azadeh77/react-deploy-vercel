import { db } from "@vercel/postgres";  

export default async function handler(request, response) {
    const client=await db.connect();
  try {
    await client.sql`INSERT INTO login_info (username,password,email) values ('test1', 'test1pass', 'test1@gmail.com') on conflict (username) do nothing;`;
  } catch (error) {
    return response.status(500).json({ error });

  }
  const loginInformation = await client.sql`select * from login_info;`;
  return response.status(200).json({ loginInformation: loginInformation.rows });
}