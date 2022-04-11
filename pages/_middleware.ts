import {NextRequest, NextResponse} from "next/server";

const signedInPages = ['/', '/playlist', '/library']

export default function middleware(req : NextRequest) {
    if(signedInPages.find(v => v === req.nextUrl.pathname)){
        const token = req.cookies.TRAX_ACCESS_TOKEN;
        if(!token){
            let url = req.nextUrl.clone();
            url.pathname = "/signin";
            return NextResponse.rewrite(url);
        }
    }
}
