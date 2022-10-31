import {Admin, Resource, CustomRoutes} from 'react-admin'
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './users';
import { Route } from "react-router-dom";
import MUIButton from './MUIButton';
import { MyLayout } from './MyLayout';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');


function App() {
  return (
    <Admin dataProvider={dataProvider} layout={MyLayout}>
        <Resource name="users" list={UserList} />
        <CustomRoutes>
            <Route path="/button" element={<MUIButton />} />
        </CustomRoutes>
    </Admin>
  );
}

export default App;
