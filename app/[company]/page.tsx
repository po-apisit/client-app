import { Metadata, ResolvingMetadata } from 'next';
import React from 'react'
import httpClient from '../_asset/httpClient';
import { API } from '../_asset/instants';

type Props = {
    params:{ company:string }
}

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
  ): Promise<Metadata> {
    // read route params
    const data = {TAG_URL:params.company}
    let TITLE = "ตั้งแคมป์ปิ้งประเทศไทย | Thai-camps.com";
    let META_DESCRIPTION = "เว็บไซต์ที่รวบร่วมจุดตั้งแคมป์ แคมป์ปิ้ง ท่องเที่ยว พักผ่อน หนึ่งเดียวในประเทศไทย";
    let META_KEYWORDS = "thaicamp,thaicamps,thai-camp,thai-camps,ตั้งแคมป์,แคมป์ปิ่ง,พักผ่อน,ท่องเที่ยว,เที่ยวประเทศไทย";
    let OPENGRAPH_TITLE = "";
    let OPENGRAPH_DESCRIPTION = "";
    let TWITTER_TITLE = "";
    let TWITTER_DESCRIPTION = "";
    // fetch data
    try {
        const company = await httpClient.post(API.Company_FindTagUrl, data)
        if(company.status === 200)
        {
           if(company.data.length > 0)
           {
            TITLE = company.data[0].TITLE + " | "+TITLE
            META_DESCRIPTION = company.data[0].META_DESCRIPTION + " | " + META_DESCRIPTION
            META_KEYWORDS = company.data[0].META_KEYWORDS + ","+META_KEYWORDS,
            OPENGRAPH_TITLE = company.data[0].OPENGRAPH_TITLE + " | "+TITLE
            OPENGRAPH_DESCRIPTION = company.data[0].OPENGRAPH_DESCRIPTION + " | " + META_DESCRIPTION
            TWITTER_TITLE = company.data[0].TWITTER_TITLE + " | "+TITLE
            TWITTER_DESCRIPTION = company.data[0].TWITTER_DESCRIPTION + " | " + META_DESCRIPTION 
           }
        }
    } catch (error) {
        
    }

    return {
        title: TITLE,
        description:META_DESCRIPTION,
        keywords:META_KEYWORDS,
        openGraph: {
            title:OPENGRAPH_TITLE,
            description:OPENGRAPH_DESCRIPTION
        },
        twitter:{
            title:TWITTER_TITLE,
            description:TWITTER_DESCRIPTION
        }
      }

  }

export default function page({}: Props) {
  return (
    <div> company not found </div>
  )
}