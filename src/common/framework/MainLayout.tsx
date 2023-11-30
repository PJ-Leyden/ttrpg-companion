import { ReactElement, useState } from "react";
import styles from "./MainLayout.module.css";
import { Outlet, useNavigate } from "react-router-dom";
import { Button, Grid } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Cookies from "js-cookie";

interface IMainLayoutProps {
	coreWebsiteComponent?: ReactElement;
}

const MainLayout: React.FC<IMainLayoutProps> = (props) => {
	const [leftNavOpen, setLeftNavOpen] = useState<boolean>(false);
	const navigate = useNavigate();

	return (
		<div id="main-container" className={styles.top}>
			<div id="application-bar" className={styles.appBar}>
				<Grid
					container
					justifyContent="center"
					alignContent="center"
					sx={{ height: "100%" }}
				>
					<Grid item sx={{ marginLeft: "10px", marginBottom: "2px" }}>
						<button
							id="test-menu-button"
							onClick={() => setLeftNavOpen(!leftNavOpen)}
						>
							<MenuIcon />
						</button>
					</Grid>
					<Grid item />
					<Grid item alignSelf={"right"} justifySelf={"right"}>
						<Button
							variant="contained"
							onClick={() => {
								Cookies.remove("jwt");
								navigate("/login");
							}}
						>
							Logout
						</Button>
					</Grid>
				</Grid>
			</div>
			<div id="content-container" className={styles.flexBoi}>
				<div
					id="left-nav-container"
					className={`${styles.test} ${
						leftNavOpen ? styles.testEnd : styles.testStart
					}`}
				/>
				<div id="page-container" className={styles.pageContainer}>
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default MainLayout;
