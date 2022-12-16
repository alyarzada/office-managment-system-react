import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
// import Pages
import Home from "./layout/Home";
import ControlPanel from "./pages/ControlPanel/ControlPanel";
import CreateNewProject from "./pages/CreateNewProject/CreateNewProject";
import CreateNewTask from "./pages/CreateNewTask/CreateNewTask";
import Projects from "./pages/Projects/Projects";
import Users from "./pages/Users/Users";
import Archive from "./pages/Archive/Archive";
import TaskDetails from "./pages/TaskDetails/TaskDetails";
import CalendarPage from "./pages/FullCalendar/CalendarPage";
import EachTasks from "./pages/EachTasks";
import Profile from "./pages/Profile/Profile";
import Actions from "./pages/Calendar/Actions";
import Notifications from "./pages/Notifications/Notifications";
import LoginPage from "./auth/Login";
import NotFound404 from "./pages/NotFound404";
import CreateUser from "./pages/Users/CreateUser";
import { Tasks } from "./pages/ActiveTasks/ActiveTasks";

import GlobalTheme from "./theme/GlobalTheme";

function App() {
  const { light } = useSelector((state) => state.themes);

  return (
    <Box
      className={
        light
          ? "bg-gradient-to-r from-mainPrimary to-mainSecondaryLight"
          : "bg-gradient-to-r from-mainPrimary to-mainSecondary"
      }
    >
      <GlobalTheme>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index={true} element={<ControlPanel />} />
            <Route path="newproject" element={<CreateNewProject />} />
            <Route path="newtask" element={<CreateNewTask />} />
            <Route path="projects" element={<Projects />} />
            <Route path="groups-users" element={<Users />} />
            <Route path="archive" element={<Archive />} />
            <Route path="archive/:id" element={<EachTasks />} />
            <Route path="tasks/:id" element={<TaskDetails />} />
            <Route path="tasks" element={<Tasks />} />
            <Route path="calendar" element={<CalendarPage />} />
            <Route path="profile" element={<Profile />} />
            <Route path="actions" element={<Actions />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="createuser" element={<CreateUser />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </GlobalTheme>
    </Box>
  );
}

export default App;
