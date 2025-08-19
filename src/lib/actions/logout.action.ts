'use server'
import { cookies } from 'next/headers';
async function logout(){
    (await cookies()).delete("token");
}

export default logout