import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({showProfileData = true}: ProfileProps) {
    return (
        <Flex align="center">
            {showProfileData && (
                <Box mr="4" textAlign="right">
                <Text>Willians Ferreira</Text>
                <Text color="gray.300" fontSize="small">
                    wdesenvolvimento@outlook.com
                </Text>
            </Box>
            )}

             <Avatar size="md" name="Willians Ferreira" src="https://xesque.rocketseat.dev/users/avatar/profile-1f9e130b-25e1-4a04-af2d-00a2149d1c8f-1648121342178.jpg" />
         </Flex>            
    )
}