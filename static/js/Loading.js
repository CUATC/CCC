import * as React from "react";
import {
    Backdrop
} from "@material-ui/core";
import {
    CircularProgress
} from "@material-ui/core";

export default function Loader({
    loading
}) {


    return ( <
        div >
        <
        Backdrop style = {
            {
                zIndex: 1
            }
        }
        sx = {
            {
                color: "#fff",
                zIndex: (theme) => theme.zIndex.drawer + 1
            }
        }
        open = {
            loading
        } >
        <
        CircularProgress color = "inherit"
        style = {
            {
                color: "#D40000"
            }
        }
        /> <
        /Backdrop> <
        /div>
    );
}