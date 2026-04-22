import { api } from "@/lib/api";
import type { Post } from "@/types";

export async function fetchPosts(): Promise<Post[]> {
  const response = await api.get<Post[]>("/popular?limit=10");
  return response.data;
}
