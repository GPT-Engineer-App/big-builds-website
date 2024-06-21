import { Container, Box, Heading, Text, VStack, HStack, Button, IconButton, Flex, Spacer } from "@chakra-ui/react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaHammer, FaBuilding, FaUsers } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box bg="blue.700" color="white" py={10} textAlign="center">
        <Heading as="h1" size="2xl">Big Builds</Heading>
        <Text fontSize="xl">Building Your Dreams</Text>
      </Box>

      <Box py={10} textAlign="center">
        <Heading as="h2" size="xl" mb={6}>Our Services</Heading>
        <HStack spacing={10} justify="center">
          <VStack>
            <IconButton aria-label="Construction" icon={<FaHammer />} size="lg" isRound />
            <Text>Construction</Text>
          </VStack>
          <VStack>
            <IconButton aria-label="Renovation" icon={<FaBuilding />} size="lg" isRound />
            <Text>Renovation</Text>
          </VStack>
          <VStack>
            <IconButton aria-label="Consultation" icon={<FaUsers />} size="lg" isRound />
            <Text>Consultation</Text>
          </VStack>
        </HStack>
      </Box>

      <Box bg="gray.100" py={10} textAlign="center">
        <Heading as="h2" size="xl" mb={6}>About Us</Heading>
        <Text maxW="600px" mx="auto">
          Big Builds is a leading construction company with over 20 years of experience in building and renovating homes and commercial properties. Our team of experts is dedicated to delivering high-quality workmanship and exceptional customer service.
        </Text>
      </Box>

      <Box py={10} textAlign="center">
        <Heading as="h2" size="xl" mb={6}>Contact Us</Heading>
        <VStack spacing={4}>
          <HStack>
            <FaPhone />
            <Text>(123) 456-7890</Text>
          </HStack>
          <HStack>
            <FaEnvelope />
            <Text>info@bigbuilds.com</Text>
          </HStack>
          <HStack>
            <FaMapMarkerAlt />
            <Text>1234 Builder St, Construction City, BuildState</Text>
          </HStack>
        </VStack>
      </Box>

      <Box bg="blue.700" color="white" py={4} textAlign="center">
        <Text>&copy; {new Date().getFullYear()} Big Builds. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;