import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 100vh;
  width: 100%;
  gap: 100px;

  font-family: Poppins, sans-serif;
  font-weight: 600;
  color: white;
  background-color: #eae4dc;
`;

export const Box = styled.div`
  width: 300px;
  padding: 35px;
  border-radius: 15px;
  background-color: #d2a172;
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 10px;
`;

export const BoxTitle = styled.div`
  display: flex;
  margin-bottom: 5px;
  margin-top: -20px;
  margin-left: -80px;
  width: 250px;
  border-radius: 15px;
  padding: 10px 10px;
  background-color: #432d26;
`;

export const TitleTable = styled.h1`
  font-size: 40px;
  font-weight: 700;
  line-height: 1.2;
`;

export const ButtonRandom = styled.button`
  font-weight: 600;
  width: 100%;
  background-color: #432d26;
  padding: 10px;
  border-radius: 50px;
`;

export const PersonRandom = styled.div``;

export const LoadingAnimation = styled.img`
  border: 5px solid #eae4dc;
  border-radius: 5px;
  width: 100%;
`;

export const ImgRandom = styled.img`
  border: 5px solid #eae4dc;
  border-radius: 5px;
`;

export const NameRandom = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  margin-top: 10px;
  margin-bottom: 10px;

  background-color: #eae4dc;
  padding: 10px;
  color: black;
`;

export const CompanyRandom = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  height: 28px;
  background-color: #800020;
`;
