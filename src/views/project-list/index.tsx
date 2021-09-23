import { List } from "./list";
import { SearchPanel } from "./search-panel";
import { useState, useEffect } from "react";
import { cleanObject, useDebounce } from "../../utils";
import qs from "qs";
import { useMount } from "../../utils";
import { useHttp } from "../../http";
export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);
  const debouncedParam = useDebounce(param, 2000);
  const apiUrl = process.env.REACT_APP_API_URL;
  const client = useHttp();
  useEffect(() => {
    client("/projects", { data: cleanObject(debouncedParam) }).then(setList)
  }, [debouncedParam]);

  useMount(() => {
    client('users').then(setUsers)
    // fetch(`${apiUrl}/users`).then(async (response) => {
    //   if (response.ok) {
    //     setUsers(await response.json());
    //   }
    // });
  });
  return (
    <div>
      <SearchPanel
        param={param}
        setParam={setParam}
        users={users}
      ></SearchPanel>
      <List list={list} users={users}></List>
    </div>
  );
};
