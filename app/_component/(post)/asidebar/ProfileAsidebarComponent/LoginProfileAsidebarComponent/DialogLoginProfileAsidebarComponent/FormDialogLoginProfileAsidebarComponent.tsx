'use client'
import { Button, Divider, InputAdornment, TextField } from "@mui/material";
import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import PasswordIcon from "@mui/icons-material/Password";
import PersonIcon from "@mui/icons-material/Person";
import { IUser } from "@/app/(interface)/IUser";
import httpClient from "@/app/_asset/httpClient";
import axios from "axios";

type Props = {};

export default function FormDialogLoginProfileAsidebarComponent({}: Props) {
  const { control, handleSubmit  } = useForm<IUser>();
  const onSubmit : SubmitHandler<IUser> = async (_data) => {
    try {
       const data = {  username:_data.USERNAME, password:_data.PASSWORD}
        const response = await axios.post("http://localhost:4000/api/authen/loginsystem",  data)

        console.log(response);
        


    } catch (error) {
        
    }
    
  }

  return (
    <React.Fragment>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)} >
        <Controller
          name="USERNAME"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              size="small"
              type="text"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
              fullWidth
              label="username"
            />
          )}
        />

        <Controller
          name="PASSWORD"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              type="password"
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PasswordIcon />
                  </InputAdornment>
                ),
              }}
              fullWidth
              label="username"
            />
          )}
        />

        <Button variant="outlined" type="submit">
          Login
        </Button>
      </form>

      <Divider>OR</Divider>

    </React.Fragment>
  );
}
