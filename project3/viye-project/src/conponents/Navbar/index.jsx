import React from 'react'
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Style from "./index.module.css";
const Navbar = () => {
    return (
        <>
            <div className={Style.nav}>
                <div className={Style.container}>
                    <div className={Style.logo}>
                        <h1><b>EATWELL
                        </b></h1>
                    </div>
                    <div className={Style.button}>
                        <Button color="inherit">
                            <Link className={Style.link} to={"/"}>
                                Home
                            </Link>
                        </Button>
                        <Button color="inherit">
                            <Link className={Style.link} to={"/add"}>
                                Add
                            </Link>
                        </Button>
                        <Button color="inherit">
                            <Link className={Style.link} to={"/basket"}>
                                basket
                            </Link>
                        </Button>
                        <Button color="inherit">
                            <Link className={Style.link} to={"/detail"}>
                                Detail
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Navbar
