import { getUser } from '../api/getUser.api';
import { verifySession } from './auth.service';

export async function getCurrentUser() {
  const session = await verifySession();
  if (!session) return null;
  const { isAdmin, id } = session;
  try {
    const data = await getUser(id);
    const { password, email, ...rest } = data;
    rest.isAdmin = isAdmin;
    return { ...rest };
  } catch (error) {
    console.error(`Failed to fetch User with ID ${id}:`, error);
    return null;
  }
}
