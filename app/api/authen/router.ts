import { NextApiRequest, NextApiResponse } from 'next'
import { fetchingLoginFail, fetchingLoginPending, fetchingLoinSuccess } from '@/app/_store/(slice)/authen-slice'
import { useDispatch } from 'react-redux'
import httpClient from '@/app/_asset/httpClient';
import { IUser } from '@/app/(interface)/IUser';
import { API, TOKEN } from '@/app/_asset/instants';
import { cookies } from 'next/headers';
import { v4 as uuidv4 } from 'uuid'


export async function login(req: NextApiRequest, res: NextApiResponse) {
    if(req.method === "GET")
    {
        const { query  } = req;
        console.log(query );
    }
    
}

export async function autoLogin(req: NextApiRequest, res: NextApiResponse) {

    const uuid:string | null = localStorage.getItem(TOKEN)
    const getCookie = cookies();

    if(uuid != null)
    {
        const token = getCookie.get(uuid)

    } else {
        res.status(200);
    }
    

}