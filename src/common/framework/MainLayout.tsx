import { ReactElement } from "react";
import styles from "../../App.module.css";
import { IWarhammerCharacteristics } from "../../warhammer/models";
import {
    AppBar,
    Container,
    IconButton,
    Toolbar,
    Typography,
    Menu,
    MenuItem,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import WarhammerCharacterSheet from "../../warhammer/WarhammerCharacterSheet";
import MenuIcon from "@mui/icons-material/Menu";
import { AccountCircle } from "@mui/icons-material";
import { useState } from "react";
import FileOpenIcon from "@mui/icons-material/FileOpen";

interface IMainLayoutProps {
    coreWebsiteComponent: ReactElement;
}

const MainLayout: React.FC<IMainLayoutProps> = (props) => {
    const initSheet: IWarhammerCharacteristics = {
        weaponSkill: 80,
        ballisticSkill: 75,
        strength: 60,
        toughness: 65,
        agility: 45,
        dexterity: 70,
        initiative: 90,
        intelligence: 40,
        willpower: 20,
        fellowship: 70,
    };

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>();
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <AppBar>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => setDrawerOpen(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        TTRPG Companion
                    </Typography>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    <Menu
                        open={Boolean(anchorEl)}
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        keepMounted
                        onClose={handleClose}
                    >
                        <MenuItem>Profile</MenuItem>
                    </Menu>
                    <Drawer
                        anchor="left"
                        open={drawerOpen}
                        onClose={() => setDrawerOpen(false)}
                    >
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <FileOpenIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={"Create New Sheet"}
                                    />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Drawer>
                </Toolbar>
            </AppBar>
            <Container className={styles.CoreContainer}>
                <WarhammerCharacterSheet sheet={initSheet} />
            </Container>
        </>
    );
};

export default MainLayout;
