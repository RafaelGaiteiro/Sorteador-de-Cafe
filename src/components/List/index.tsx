import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { IStudent } from "../../types";

interface ListProps {
  students: IStudent[];
}

const List: React.FC<ListProps> = ({ students }) => {
  return (
    <Box
      maxW="md"
      mx="auto"
      mt="10"
      py="8"
      px="6"
      boxShadow="lg"
      bg="white"
      rounded="lg"
    >
      <Card>
        <CardHeader>
          <Heading size="md">Alunos</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            {students.map((student, index) => (
              <Box key={index}>
                <Heading size="xs" textTransform="uppercase">
                  {student.name}
                </Heading>
                <Text pt="2" fontSize="sm">
                  Inscrito no curso {student.course}.
                  <br />
                  Telefone para contato {student.phone}
                </Text>
              </Box>
            ))}
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
};

export default List;
