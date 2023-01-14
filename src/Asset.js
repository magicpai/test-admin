import {
  TextField,
  List,
  Datagrid,
} from "react-admin";

export const Asset1 = () => (
  <List resource="assetsList" filter={{ id: 1 }} storeKey="assetsList1">
    <Datagrid>
      <TextField source="idOrganizationProfiles" />
      <TextField source="name" />
      <TextField source="quantity" />
      <TextField source="price" />
      <TextField source="unitCategory" />
      <TextField source="idOrganizationProfiles" />
    </Datagrid>
  </List>
);

export const Asset2 = () => (
  <List resource="assetsList" filter={{ id: 2 }} storeKey="assetsList2">
    <Datagrid>
      <TextField source="idOrganizationProfiles" />
      <TextField source="name" />
      <TextField source="quantity" />
      <TextField source="price" />
      <TextField source="unitCategory" />
    </Datagrid>
  </List>
);

// export default Asset1;
