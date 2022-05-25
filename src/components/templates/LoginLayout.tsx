import { Avatar, Flex, Heading, Stack } from "@chakra-ui/react";
import { FC, memo } from "react";
import { LoginForm } from "../organisms/form/LoginForm";

export const LoginLayout :FC = memo(()=> {
    return(
        <>
            <Flex
                flexDirection="column"
                width="100wh"
                height="100vh"
                backgroundColor="gray.200"
                justifyContent="center"
                alignItems="center"
            >
                <Stack
                    flexDir="column"
                    mb="2"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Avatar bg="teal.500" />
                    <Heading color="teal.400">Login</Heading>
                    <LoginForm />
                </Stack>
            </Flex>
        </>
    )
})