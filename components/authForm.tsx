import { Box, Flex, Input, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import NextImage from "next/image";
import { useSWRConfig } from "swr";
import { auth } from "../lib/mutations";

const AuthForm: FC<{ mode: "signin"|"signup" }> = ({ mode }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading((v) => !v);

        await auth(mode, { email, password });
        setLoading(false);
        router.push("/")
    };

    return (
        <Box width="100vw" height="100vh" bg="black" color="white">
            <Flex
                justify="center"
                align="center"
                height="100px"
                borderBottom="white 1px solid"
            >
                <NextImage src={"/traxLogo.svg"} height={60} width={120} />
            </Flex>
            <Flex justify="center" align="center" height="calc(100vh - 100px)">
                <Box padding="50px" bg="gray.900" borderRight="6px">
                    <form onSubmit={handleSubmit}>
                        <Input
                            placeholder="email"
                            type="email"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Input
                            placeholder="passowrd"
                            type="password"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button
                            type="submit"
                            bg="green.500"
                            isLoading={isLoading}
                            sx={{ "&:hover": { bg: "green.300" } }}
                        >
                            {mode}
                        </Button>
                    </form>
                </Box>
            </Flex>
        </Box>
    );
};

export default AuthForm;
