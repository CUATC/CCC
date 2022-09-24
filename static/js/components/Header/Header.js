import {
    Container,
    Grid,
    makeStyles,
    Hidden,
    useMediaQuery,
} from "@material-ui/core";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {
    useState
} from "react";
import MenuIcon from "@material-ui/icons/Menu";
import DarkModeToggle from "react-dark-mode-toggle";
import {
    Link
} from "react-router-dom";

// Logo Images

import logoDay from "./jdoge1.svg";
import logoNight from "./jdoge2.svg";

// classes/ cs styles section
const useStyles = makeStyles((theme) => ({
    mian: {
        flexGrow: 1,
        backgroundColor: "white",
        height: "80px",
        background: theme.palette.primary.dark,
    },
    logo: {
        maxWidth: 136,
        paddingTop: "1.5%",
        fontSize: "19px",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "22px",
        letterSpacing: "0em",
    },
    linkCont: {
        alignContent: "space-betwen",
        justifyContent: "space-between",
        marginTop: 9,
    },
    myLinks: {
        "& a": {
            color: theme.palette.primary.main,
            // color: "#7F7F7F",
            textDecoration: "none",
            paddingBottom: 10,
        },
        "& a:hover": {
            transition: 1,
            borderBottom: "1px solid white",
        },
        padding: "10px 0px",
        color: "#fff",
        fontSize: 16,
        fontWeight: 600,
        transition: "0.3s",
        letteSpacing: "0.4px",
        textTransform: "uppercase",
    },
    bg: {
        background: theme.palette.primary.dark,
    },
    list: {
        width: 250,
    },
    fullList: {
        width: "auto",
    },
    lunchTest: {
        background: "#EEEEEE",
        padding: "13px 30px",
        borderRadius: "30px",
    },
    img: {
        width: "186px",
        height: "80px",
        marginTop: "-20px",
    },
    colortoggle: {
        color: theme.palette.secondary.whitepink,
    },
    bgcmenu: {
        background: theme.palette.secondary.bgcmenu,
    },
}));

const Header = ({
    isDarkMode,
    setIsDarkMode,
    setfromgallery,
    setupdateGallery,
    userWalletAddress,
}) => {
    // New links

    const linksto = [{
            pagename: "Home",
            link: "/",
        },
        {
            pagename: "MY-TBlocks",
            link: "/TBlocks",
        },
        {
            pagename: "Gallery",
            link: "/gallery",
        },
        {
            pagename: "Stake",
            link: "/stake",
        },
        /*{
      pagename: "ETH-Bridge",
      link: "/bridge",
  },*/
        {
            pagename: "Exchange",
            link: "/exchange",
        },
    ];

    const classes = useStyles();
    const matches = useMediaQuery("(max-width:1030px)");
    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state,
            [anchor]: open
        });
    };

    const list = (anchor) => ( <
        div style = {
            {
                width: "100%"
            }
        }
        className = {
            classes.bgcmenu +
            " " +
            clsx(classes.list, {
                [classes.fullList]: anchor === "top" || anchor === "bottom",
            })
        }
        role = "presentation"
        onClick = {
            toggleDrawer(anchor, false)
        }
        onKeyDown = {
            toggleDrawer(anchor, false)
        } >
        <
        List > {
            linksto.map((obj, index) => ( <
                ListItem button key = {
                    obj
                } >
                <
                Link style = {
                    {
                        textDecoration: "none"
                    }
                }
                to = {
                    obj.link
                } >
                <
                ListItemText onClick = {
                    () => {
                        // setupdateGallery(true)
                    }
                }
                className = {
                    classes.colortoggle
                }
                primary = {
                    obj.pagename
                }
                /> <
                /Link> <
                /ListItem>
            ))
        } <
        ListItem >
        <
        a href = "https://tronscan.org/#/contract/TFShTqX5YqtarQavrFLv5NZ57no1tCLDmZ/code"
        target = "_blank"
        className = {
            classes.colortoggle
        }
        style = {
            {
                textDecoration: "none"
            }
        } >
        <
        ListItemText > Contract < /ListItemText> <
        /a> <
        /ListItem> <
        ListItem >
        <
        DarkModeToggle onChange = {
            setIsDarkMode
        }
        checked = {
            isDarkMode
        }
        size = {
            80
        }
        /> <
        /ListItem> <
        /List> <
        Divider / >
        <
        /div>
    );

    // mai retuen / Main return
    return ( <
        >
        <
        div className = {
            classes.bg
        }
        style = {
            {
                height: "80px",
                paddingTop: "10px",
                width: "100%",
                top: 0,
                position: "fixed",
                margin: "auto",
                zIndex: "999",
                borderBottom: "3px solid #FF0000",
            }
        } >
        <
        Container className = {
            classes.main
        } >
        <
        Grid container justifyContent = "space-between" > { /* logo  */ } <
        Grid item xs = {
            6
        }
        sm = {
            4
        }
        md = {
            8
        }
        lg = {
            8
        }
        className = {
            classes.logo
        } >
        <
        Link to = "/" >
        <
        img src = {
            isDarkMode ? logoNight : logoDay
        }
        className = {
            classes.img
        }
        /> <
        /Link> <
        /Grid>

        { /* my links  */ } <
        Hidden smDown >
        <
        Grid item xs = {
            10
        }
        sm = {
            8
        }
        md = {
            9
        }
        lg = {
            8
        }
        className = {
            classes.linkCont
        } >
        <
        Grid container className = {
            classes.linkCont
        }
        alignItems = "center" >
        {
            linksto.map((obj, index) => {
                return ( <
                    Grid item className = {
                        classes.myLinks
                    }
                    key = {
                        index
                    } >
                    <
                    Link onClick = {
                        () => {
                            setupdateGallery(true);
                            if (obj.pagename == "Forsale") {
                                setfromgallery(false);
                            }
                        }
                    }
                    to = {
                        obj.link
                    } >
                    {
                        " "
                    } {
                        obj.pagename
                    } <
                    /Link> <
                    /Grid>
                );
            })
        } <
        Grid item className = {
            classes.myLinks
        } >
        <
        a href = "https://tronscan.org/#/contract/TFShTqX5YqtarQavrFLv5NZ57no1tCLDmZ/transactions"
        target = "_blank" >
        CONTRACT <
        /a> <
        /Grid> <
        DarkModeToggle onChange = {
            setIsDarkMode
        }
        checked = {
            isDarkMode
        }
        size = {
            80
        }
        /> <
        /Grid> <
        /Grid> <
        /Hidden> <
        Hidden mdUp >
        <
        Button onClick = {
            toggleDrawer("left", true)
        } >
        <
        MenuIcon style = {
            {
                color: "#7F7F7F",
                marginTop: "0px",
                fontSize: "45px",
            }
        }
        /> <
        /Button>

        <
        Drawer anchor = {
            "top"
        }
        open = {
            state["left"]
        }
        onClose = {
            toggleDrawer("left", false)
        } >
        <
        span onClick = {
            toggleDrawer("left", false)
        } > {
            list("right")
        } <
        /span> <
        /Drawer> <
        /Hidden> <
        /Grid> <
        /Container> <
        /div> <
        />
    );
};
export default Header;