import Head from "next/head";
import Image from "next/image";
import GradientLayout from "../components/gradientLayout";
import prisma from "../lib/prisma";
import { Box, Flex, Text } from "@chakra-ui/layout";
import styles from "../styles/Home.module.css";

const Home = ({ artists }) => {
    return (
        <GradientLayout
            color={"green"}
            title="Onifade"
            subtitle={"profile"}
            description="15 public playlist"
            image={
                "https://tinted-gym-f99.notion.site/image/https%3A%2F%2Fdl.dropboxusercontent.com%2Fs%2Fbgiv0ssz3xpotz9%2Fpeep.png%3Fdl%3D0?table=block&id=33f9771b-0e6f-4a72-832c-69ed2d41f290&spaceId=511cd811-5561-4a61-b550-c4086b4afafb&width=2000&userId=&cache=v2"
            }
            roundImage
        >
            <Box color="white">
                <Box>
                    <Text>top artists this month</Text>
                    <Text>only visible to u</Text>
                </Box>
                <Flex>
                    {artists.map((artist) => (
                        <Text>{artist.name}</Text>
                    ))}
                </Flex>
            </Box>
        </GradientLayout>
    );
};

export const getServerSideProps = async () => {
    const artists = await prisma.artist.findMany({});
    return {
        props: { artists },
    };
};

export default Home;
