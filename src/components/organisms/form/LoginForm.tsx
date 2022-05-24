import { Box, chakra, FormControl, Stack } from "@chakra-ui/react";
import { FC, memo, useState } from "react";
import { FaLock, FaUserAlt } from "react-icons/fa";
import { ViewIconButton } from "../../atom/button/ViewIconButton";
import { BoxWithIcon } from "../../molecules/box/BoxWithIcon";

const CFaUserAlt = chakra(FaUserAlt)
const CFaLock = chakra(FaLock)

export const LoginForm: FC = memo(() => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowClick = () => setShowPassword(!showPassword)
  return (
    <>
      <Box minW={{ base: "90%", md: "468px" }}>
        <form>
          <Stack
            spacing={4}
            p="1rem"
            backgroundColor="whiteAlpha.900"
            boxShadow="md"
          >
            <FormControl isRequired>
              <BoxWithIcon
                id = "username" 
                placeholder="username" 
                lefticon={<CFaUserAlt color="gray.300" />} 
              />
            </FormControl>
            <FormControl isRequired>
              <BoxWithIcon
                id = "password" 
                placeholder="password"
                show={showPassword}
                lefticon={<CFaLock color="gray.300" />} 
                righticon={<ViewIconButton showPassword={showPassword} onClick={ handleShowClick }/>} 
              />
            </FormControl>
          </Stack>
        </form>
      </Box>
    </>
  )
})