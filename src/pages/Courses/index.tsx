// Primeiro, importamos os módulos e componentes necessários.
// useState é uma função do React que nos permite usar o estado do componente.
// Form e List são componentes que você criou.
// IStudent é uma interface de TypeScript que define a estrutura dos dados de um aluno.
import React, { useState } from 'react';
import Form from '../../components/Form';
import List from '../../components/List';
import { IStudent } from '../../types';

// Aqui, definimos o componente Home.
// React.FC é um tipo que significa "Functional Component". Ele não aceita nenhuma prop.
const Courses: React.FC = () => {
  // Usamos a função useState para criar um estado para a lista de alunos.
  // O estado inicial é um array vazio, e TypeScript sabe que este é um array de objetos IStudent.
  // A função useState retorna duas coisas: a variável de estado atual (students) e uma função para atualizar essa variável (setStudents).
  const [students, setStudents] = useState<IStudent[]>([]);

  // No retorno do componente, temos a estrutura JSX.
  // Estamos renderizando os componentes Form e List.
  // Passamos a função setStudents para o componente Form como uma prop.
  // Isso permitirá que Form chame setStudents para adicionar novos alunos à lista.
  // Passamos a lista de alunos para o componente List como uma prop.
  // Isso permitirá que List mostre todos os alunos.
  return (
    <>
      <Form setStudents={setStudents} />
      <List students={students} />
    </>
  );
};

// Finalmente, exportamos Home para que possamos importá-lo em outros arquivos.
export default Courses;