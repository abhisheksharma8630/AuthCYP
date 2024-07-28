
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


// This function can be marked `async` if using `await` inside
const pages = [
  '/',
  '/imloginpage',
  '/impublic',
  '/mui'
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
