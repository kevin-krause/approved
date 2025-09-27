import Database from "../../../../../infra/database";


export async function status(request: Request) {
  const database = new Database();
  const status = JSON.parse(await database.query("SELECT 1 + 1 as sum"));
  
  return new Response(JSON.stringify({ status: "ok", data: status }), { status: 200 });
}

export async function GET(request: Request) {
  return status(request);
}