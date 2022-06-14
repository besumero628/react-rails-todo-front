import { Box, Stack } from "@chakra-ui/react";
import { FC, memo } from "react";
import { Header } from "../organisms/layout/Header";

export const HomeLayout: FC = memo(()=> {
    return (
        <>
            <Header />
            <Stack
                as={Box}
                textAlign={'center'}
                spacing={{ base: 8, md: 14 }}
                py={{ base: 20, md: 8 }}
            >
                <Box>
                    todo input
                </Box>
                <Box>
                    todo list
                </Box>
            </Stack>
        </>
    )
})