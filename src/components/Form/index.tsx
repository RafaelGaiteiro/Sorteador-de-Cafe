// Importamos as dependências e componentes necessários.
import React, { useState } from "react";
import { PhoneIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Stack,
} from "@chakra-ui/react";
// Importamos a interface IStudent.
import { IStudent } from "../../types";

// Definimos a interface para as props deste componente.
// Aqui, estamos dizendo que este componente deve receber uma função chamada setStudents.
// Essa função deve ser capaz de receber um array de objetos IStudent e não deve retornar nada.
interface FormProps {
  setStudents: React.Dispatch<React.SetStateAction<IStudent[]>>;
}

// Aqui, definimos o componente Form.
// Ele é um componente funcional do React e recebe props do tipo FormProps.
const Form: React.FC<FormProps> = ({ setStudents }) => {
  // Aqui, definimos o estado para cada campo de entrada do formulário.
  // Cada um começa como uma string vazia.
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");

  // Definimos a função handleForm para ser chamada quando o formulário for submetido.
  // Esta função recebe um objeto de evento como parâmetro.
  function handleForm(e: React.FormEvent) {
    // Chamamos preventDefault no objeto de evento para evitar o comportamento padrão de recarregar a página.
    e.preventDefault();

    // Usamos a função setStudents para adicionar um novo aluno à lista.
    // Essa função recebe a lista antiga de alunos e retorna uma nova lista.
    // A nova lista contém todos os alunos antigos, além de um novo aluno com os valores atuais dos campos de entrada.
    setStudents((oldStudents) => [
      ...oldStudents,
      {
        name,
        phone,
        course,
      },
    ]);

    // Finalmente, limpa os campos de entrada do formulário.
    setName("");
    setPhone("");
    setCourse("");
  }

  // Aqui está a parte de renderização do componente.
  // O form tem três campos de entrada (um para o nome, telefone e curso) e dois botões.
  // Cada campo de entrada tem um manipulador para o evento onChange, que é chamado sempre que o valor do campo de entrada muda.
  // Quando isso acontece, atualizamos o estado correspondente com o novo valor.
  // O botão de envio tem um manipulador para o evento onClick, que é a função handleForm que definimos anteriormente.
  // Finalmente, retornamos o JSX que define a aparência do componente na página.
  // Este JSX inclui todos os campos de entrada e botões que mencionamos.
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
      <form>
        <Stack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Nome</FormLabel>
            <Input
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>

          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <PhoneIcon color="gray.300" />
            </InputLeftElement>
            <Input
              type="tel"
              placeholder="Telefone"
              isRequired
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </InputGroup>

          <FormControl isRequired>
            <FormLabel>Curso</FormLabel>
            <Select
              placeholder="Selecione o curso"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            >
              <option>HTML, CSS e JavaScript</option>
              <option>React</option>
              <option>Python e C#</option>
            </Select>
          </FormControl>

          <Button colorScheme="green" type="submit" onClick={handleForm}>
            Enviar
          </Button>
          <Button colorScheme="red">Cancelar</Button>
        </Stack>
      </form>
    </Box>
  );
};

export default Form;
