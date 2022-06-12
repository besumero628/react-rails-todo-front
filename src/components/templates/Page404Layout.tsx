import { Container, Stack, Box, Heading, Text } from "@chakra-ui/react";
import { FC, memo } from "react";
import { Header } from "../organisms/layout/Header";

export const Page404Layout: FC = memo(() => {
    return(
        <>
            <Header />
                <Container maxW={'3xl'}>
                    <Stack
                        as={Box}
                        textAlign={'center'}
                        spacing={{ base: 8, md: 14 }}
                        py={{ base: 20, md: 36 }}
                    >
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                        lineHeight={'110%'}>
                        <Text as={'span'} color={'green.400'}>
                        404<br />
                        </Text>
                        Not Found...
                    </Heading>
                    </Stack>
                    
                </Container>
        </>
    )
})