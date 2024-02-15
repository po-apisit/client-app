import { Button, Divider, InputAdornment, TextField, SvgIcon  } from '@mui/material';
import React from 'react'
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import PasswordIcon from '@mui/icons-material/Password';
import PersonIcon from '@mui/icons-material/Person';

type Props = {}

interface IAccount {
    username:string,
    password:string
}

export default function FormDialogLoginProfileAsidebarComponent({}: Props) {
  const { control  } = useForm<IAccount>();

  return (
    <React.Fragment>
<form className='flex flex-col gap-5' >
        <Controller 
            name="username"
            control={control}
            render={(({ field }) => 
            <TextField  
            {...field}
            size="small"
            type="text"
            InputProps={{
                startAdornment:(
                    <InputAdornment position="start">
                        <PersonIcon />
                    </InputAdornment>
                )
            }}
            fullWidth
            label='username'
            />
            )}
        />

<Controller 
            name="password"
            control={control}
            render={(({ field }) => 
            <TextField  
            {...field}
            type="password"
            size="small"
            InputProps={{
                startAdornment:(
                    <InputAdornment position="start">
                        <PasswordIcon />
                    </InputAdornment>
                )
            }}
            fullWidth
            label='username'
            />
            )}
        />

        <Button variant="outlined" type="submit" >
            Login
        </Button>
        
    </form>

    <Divider>OR</Divider>

    <Button
      variant="outlined"
      color="primary"
      className=' items-center '
      startIcon={<img src="/icons8-google.svg" alt="Google Icon" />} // ใช้ MUI Icon และกำหนด viewBox สำหรับ SVG
    >
            เข้าสู่ระบบด้วย Gmail
     </Button>
    </React.Fragment>
    
  )
}