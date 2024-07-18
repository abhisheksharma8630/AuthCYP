
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getSession } from 'next-auth/react';
import { GetSessionParams } from 'next-auth/react';
import { url } from 'inspector';

// This function can be marked `async` if using `await` inside
const pages = [
  '/',
  '/imloginpage',
  '/impublic'
]


export async function middleware(request: NextRequest) {

  const path = request.nextUrl.pathname;
  
  if(pages.includes(path)){
    return NextResponse.next();
  }

  if(!request.cookies.get('next-auth.session-token')?.value){
    return NextResponse.redirect(new URL("/imloginpage",request.url));
  }


}

export const config = { matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"] }
