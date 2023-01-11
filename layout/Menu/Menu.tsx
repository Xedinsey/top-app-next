import cn from "classnames";
import styles from "./Menu.module.css";
import {useContext, useEffect} from "react";
import {AppContext} from "../../context/app.context";


export const Menu = (): JSX.Element => {
    const {menu, setMenu, firstCategory} = useContext(AppContext);

    // async function fetchData () {
    //     const {data: menu }= await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    //         firstCategory
    //     }, {
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         responseType: "json",
    //         responseEncoding: "utf-8"
    //     });
    //     console.log(menu);
    //     return menu;
    // }
    //
    // useEffect( ()=>{
    //     fetchData();
    // }, []);


    return (
      <>
          <ul>
              {menu.map(el => <li key={el._id.secondCategory}>{el._id.secondCategory}</li>)}
          </ul>
      </>
    );
};