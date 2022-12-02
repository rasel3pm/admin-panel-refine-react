import React from "react";

import { Refine } from "@pankod/refine-core";
import {
  notificationProvider,
  Layout,
  ReadyPage,
  ErrorComponent,
} from "@pankod/refine-antd";

import dataProvider from "@pankod/refine-simple-rest";
import "@pankod/refine-antd/dist/styles.min.css";
import routerProvider from "@pankod/refine-react-router-v6";
import { CategoryCreate, CategoryEdit, CategoryList, CategoryShow } from "pages";
import { PostCreate, PostEdit, PostList, PostShow } from "pages";
import { UserCreate,UserShow,UserEdit,UserList} from "pages";


function App() {
  return (
    <Refine
    dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
    notificationProvider={notificationProvider}
    Layout={Layout}
    ReadyPage={ReadyPage}
    catchAll={<ErrorComponent />}
    routerProvider={routerProvider}
    resources={[
          {name:"categories",
        list:CategoryList,
        edit:CategoryEdit,
        create:CategoryCreate,
        show:CategoryShow},

        {
          name:"posts",
          list:PostList,
          edit:PostEdit,
          create:PostCreate,
          show:PostShow
        },
        {
          name:"users",
          create:UserCreate,
          show:UserShow,
          edit:UserEdit,
          list:UserList
        },
      ]}
  />
    
  );
}

export default App;
