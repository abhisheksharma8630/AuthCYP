import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/options";
export async function getSession(){
    const session = await getServerSession(authOptions);
    console.log(session);
}