import * as React from 'react'

import {
  Admin,
  Resource,
  CustomRoutes,
  useRecordContext,
  EditGuesser,
  ShowGuesser,
  TextField,
  Create,
  TextInput,
  SimpleForm,
  List,
  Datagrid,
  WithRecord,
} from "react-admin";
import jsonServerProvider from "ra-data-json-server";
// import { UserList } from './users';
import { Route } from "react-router-dom";
import Button from "@mui/material/Button";
import { MyLayout } from "./MyLayout";
import MUIButton from './MUIButton';

const dataProvider = jsonServerProvider("https://umkm.onrender.com");

const UserProfileCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="userName" />
      <TextInput source="name" />
      <TextInput source="address" />
      <TextInput source="email" />
      <TextInput source="phone" />
      <TextInput source="pictureProfile" />
      <TextInput source="registeredSince" />
      <TextInput source="updatedAt" />
    </SimpleForm>
  </Create>
);

const UserProfileList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="userName" />
      <TextField source="name" />
      <TextField source="address" />
      <TextField source="email" />
      <TextField source="phone" />
      <TextField source="pictureProfile" />
      <TextField source="registeredSince" />
      <TextField source="updatedAt" />
      <WithRecord label="HasID" render={(record) => <span>{record.id}</span>} />
      <BuyButton/>
    </Datagrid>
  </List>
);


const BuyButton = () => {
  const record = useRecordContext();

  const handleClick = () => {
    alert(`Do you want to buy id: ${record.id} ?`);
  };

  if (!record) return null;
  const buttonText = `Buy id:${record.id}`
  console.log(buttonText)
  return (
    <Button variant="contained" onClick={handleClick}>
      {buttonText}
    </Button>
  );
};


function App() {
  return (
    <Admin dataProvider={dataProvider} layout={MyLayout}>
      <Resource
        name="userProfile"
        list={UserProfileList}
        edit={EditGuesser}
        show={ShowGuesser}
        create={UserProfileCreate}
      />
      <CustomRoutes>
        <Route path="/button" element={<MUIButton />} />
      </CustomRoutes>
    </Admin>
  );
}

export default App;
