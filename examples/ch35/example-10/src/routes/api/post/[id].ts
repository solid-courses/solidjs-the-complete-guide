import type { APIEvent } from "@solidjs/start/server";
import { getServerSidePostById } from "~/database";

export async function GET({ params }: APIEvent) {
  return await getServerSidePostById(params.id);
}