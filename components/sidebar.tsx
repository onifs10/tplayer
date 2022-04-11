import NextImage from "next/image";
import NextLink from "next/link";
import {
    Box,
    List,
    ListIcon,
    ListItem,
    Divider,
    Center,
    LinkBox,
    LinkOverlay,
} from "@chakra-ui/layout";
import {
    MdHome,
    MdSearch,
    MdLibraryMusic,
    MdPlaylistAdd,
    MdFavorite,
} from "react-icons/md";
import {usePlaylist} from "../lib/hooks";

const navMenu = [
    {
        name: "Home",
        icon: MdHome,
        path: "/",
    },
    {
        name: "Search",
        icon: MdSearch,
        path: "/search",
    },
    {
        name: "Your Playlist",
        icon: MdLibraryMusic,
        path: "/playlist",
    },
];

const musicMenu = [
    {
        name: "Creat Playlist",
        icon: MdPlaylistAdd,
        path: "/",
    },
    {
        name: "Favourite",
        icon: MdFavorite,
        path: "/favourite",
    },
];

// const playlists = [];
const SideBar = () => { 
    const {playlists} = usePlaylist();
    return (
        <Box
            width="100%"
            height="calc(100vh - 100px)"
            bg="black"
            paddingX="5px"
            color="gray"
        >
            <Box paddingY="20px" height="100%">
                <Box width="120px" marginBottom="20px" paddingX="20px">
                    <NextImage src="/traxLogo.svg" height={60} width={120} />
                </Box>
                <Box marginBottom="20px">
                    <List spacing={2}>
                        {navMenu.map((item) => (
                            <ListItem
                                paddingX="20px"
                                fontSize="16px"
                                key={item.name}
                            >
                                <LinkBox>
                                    <NextLink href={item.path} passHref>
                                        <LinkOverlay>
                                            <ListIcon
                                                as={item.icon}
                                                color="white"
                                                marginRight="20px"
                                            />
                                            {item.name}
                                        </LinkOverlay>
                                    </NextLink>
                                </LinkBox>
                            </ListItem>
                        ))}
                    </List>
                </Box>
                <Box marginBottom="20px">
                    <List spacing={2}>
                        {musicMenu.map((item) => (
                            <ListItem
                                paddingX="20px"
                                fontSize="16px"
                                key={item.name}
                            >
                                <LinkBox>
                                    <NextLink href={item.path} passHref>
                                        <LinkOverlay>
                                            <ListIcon
                                                as={item.icon}
                                                color="white"
                                                marginRight="20px"
                                            />
                                            {item.name}
                                        </LinkOverlay>
                                    </NextLink>
                                </LinkBox>
                            </ListItem>
                        ))}
                    </List>
                </Box>
                <Divider bg="gray.800" />
                <Box height="66%" overflow="auto" paddingY="20px">
                    <List spacing={2}>
                        { playlists?.map((playlist) => (
                            <ListItem paddingX="20px" key={playlist?.id}>
                                <LinkBox>
                                    <NextLink href="/" passHref>
                                        <LinkOverlay>
                                            {playlist?.name}
                                        </LinkOverlay>
                                    </NextLink>
                                </LinkBox>
                            </ListItem> 
                        )) }
                    </List>
                </Box>
            </Box>
        </Box>
    );
};

export default SideBar;
