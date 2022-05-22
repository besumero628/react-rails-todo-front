import { ViewIcon } from "@chakra-ui/icons";
import { chakra, FormControl, Icon } from "@chakra-ui/react";
import { FC, memo, useState } from "react";
import { BoxWithIcon } from "../atom/box/BoxWithIcon";
import { PrimaryButton } from "../atom/button/PrimaryButton";
import { ViewIconButton } from "../atom/button/ViewIconButton";
import { FaUserAlt, FaLock } from "react-icons/fa"

const CFaUserAlt = chakra(FaUserAlt)
const CFaLock = chakra(FaLock)

export const Test: FC = memo(()=>{

  return (
    <>
      <PrimaryButton>Button!</PrimaryButton>
      {/* <ViewIconButton showPassword={false} /> */}
      <FormControl isRequired>
        <BoxWithIcon
          id = "username" 
          placeholder="username" 
          lefticon={<CFaUserAlt color="gray.300" />} 
        />
        <BoxWithIcon
          id = "password" 
          placeholder="password"
          show={false}
          lefticon={<CFaLock color="gray.300" />} 
          righticon={<ViewIconButton />} 
        />
      </FormControl>
    </>
  )
})