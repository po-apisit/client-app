'use client'
import React from 'react'
import NoLoginProfileAsidebarComponent from './LoginProfileAsidebarComponent/NoLoginProfileAsidebarComponent'
import IsLoginProfileAsidebarComponent from './LoginProfileAsidebarComponent/IsLoginProfileAsidebarComponent'
import { useUser } from '@auth0/nextjs-auth0/client'

type Props = {}

export default function LoginProfileAsidebarComponent({}: Props) {
  const { user, error, isLoading }:any = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div>
      { !user && <NoLoginProfileAsidebarComponent /> }
      {user && <IsLoginProfileAsidebarComponent />}
    </div>
  )
}