// import mui icons
import ApartmentIcon from "@mui/icons-material/Apartment";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AddCommentOutlinedIcon from "@mui/icons-material/AddCommentOutlined";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

export const sidebarMenu = [
  {
    title: {
      az: "Nəzarət paneli",
      en: "Control Panel",
      rus: "Панель управления",
    },
    icon: HomeOutlinedIcon,
    path: "/",
    sublist: [],
  },
  {
    title: {
      az: "Yeni task yarat",
      en: "Create new task",
      rus: "Создать новую задачу",
    },
    icon: AddCommentOutlinedIcon,
    path: "/newtask",
    sublist: [],
  },
  {
    title: {
      az: "Yeni layihə yarat",
      en: "Create new project",
      rus: "Создать новый проект",
    },
    icon: AddCircleOutlineIcon,
    path: "/newproject",
    sublist: [],
  },
  {
    title: { az: "Layihələr", en: "Projects", rus: "Проекты" },
    icon: FmdGoodOutlinedIcon,
    path: "",
    sublist: [
      {
        title: "Port Baku Residence",
        icon: ApartmentIcon,
        path: "/",
        projects_sublist: [
          {
            title: { az: "Tasklar", en: "Tasks", rus: "Задачи" },
            path: "/tasks",
          },
          {
            title: { az: "Təqvim", en: "Calendar", rus: "Календарь" },
            path: "/calendar",
          },
          {
            title: {
              az: "Yeni task yarat",
              en: "Create new task",
              rus: "Создать новую задачу",
            },
            path: "/newtask",
          },
        ],
      },
      {
        title: "Port Baku Residence",
        icon: ApartmentIcon,
        path: "/",
        projects_sublist: [
          {
            title: { az: "Tasklar", en: "Tasks", rus: "Задачи" },
            path: "/tasks",
          },
          {
            title: { az: "Təqvim", en: "Calendar", rus: "Календарь" },
            path: "/calendar",
          },
          {
            title: {
              az: "Yeni task yarat",
              en: "Create new task",
              rus: "Создать новую задачу",
            },
            path: "/newtask",
          },
        ],
      },
      {
        title: "Port Baku Residence",
        icon: ApartmentIcon,
        path: "/",
        projects_sublist: [
          {
            title: { az: "Tasklar", en: "Tasks", rus: "Задачи" },
            path: "/tasks",
          },
          {
            title: { az: "Təqvim", en: "Calendar", rus: "Календарь" },
            path: "/calendar",
          },
          {
            title: {
              az: "Yeni task yarat",
              en: "Create new task",
              rus: "Создать новую задачу",
            },
            path: "/newtask",
          },
        ],
      },
      {
        title: "Port Baku Residence",
        icon: ApartmentIcon,
        path: "/",
        projects_sublist: [
          {
            title: { az: "Tasklar", en: "Tasks", rus: "Задачи" },
            path: "/tasks",
          },
          {
            title: { az: "Təqvim", en: "Calendar", rus: "Календарь" },
            path: "/calendar",
          },
          {
            title: {
              az: "Yeni task yarat",
              en: "Create new task",
              rus: "Создать новую задачу",
            },
            path: "/newtask",
          },
        ],
      },
      {
        title: "Absheron Apartments",
        icon: ApartmentIcon,
        path: "/",
        projects_sublist: [
          {
            title: { az: "Tasklar", en: "Tasks", rus: "Задачи" },
            path: "/tasks",
          },
          {
            title: { az: "Təqvim", en: "Calendar", rus: "Календарь" },
            path: "/calendar",
          },
          {
            title: {
              az: "Yeni task yarat",
              en: "Create new task",
              rus: "Создать новую задачу",
            },
            path: "/newtask",
          },
        ],
      },
      {
        title: "Expo Center",
        icon: ApartmentIcon,
        projects_sublist: [
          {
            title: { az: "Tasklar", en: "Tasks" },
            path: "/tasks",
          },
          {
            title: { az: "Təqvim", en: "Calendar" },
            path: "/calendar",
          },
          {
            title: { az: "Yeni task yarat", en: "Create new task" },
            path: "/newtask",
          },
        ],
      },
    ],
  },
  {
    title: {
      az: "Qruplar / Istifadəçilər",
      en: "Groups / Users",
      rus: "Группы / Пользователи",
    },
    icon: PeopleAltOutlinedIcon,
    path: "/groups-users",
    sublist: [],
  },
  {
    title: { az: "Arxiv", en: "Archive", rus: "Архив" },
    icon: ArchiveOutlinedIcon,
    path: "/archive",
    sublist: [],
  },
  {
    title: { az: "Təqvim", en: "Calendar", rus: "Архив" },
    icon: CalendarMonthOutlinedIcon,
    path: "/actions",
    sublist: [],
  },
  {
    title: { az: "Bildirişlər", en: "Notifications", rus: "Архив" },
    icon: NotificationsOutlinedIcon,
    path: "/notifications",
    sublist: [],
  },
];
