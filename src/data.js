import { STATUS } from "./constant";

const data = [
  {
    id: "root1",
    label: "Work Projects",
    status: STATUS.INDETERMINATE,
    children: [
      {
        id: "projectx",
        label: "Project X",
        status: STATUS.INDETERMINATE,
        children: [
          {
            id: "ux",
            label: "UX Design",
            status: STATUS.INDETERMINATE,
            children: [
              {
                id: "wireframe",
                label: "Wireframes.sketch",
                status: STATUS.CHECKED,
                children: [],
              },
              {
                id: "prototype",
                label: "Prototype.fig",
                status: STATUS.UNCHECKED,
                children: [],
              },
            ],
          },
          {
            id: "dev",
            label: "Development",
            status: STATUS.INDETERMINATE,
            children: [
              {
                id: "frontend",
                label: "Frontend",
                status: STATUS.CHECKED,
                children: [],
              },
              {
                id: "backend",
                label: "Backend",
                status: STATUS.UNCHECKED,
                children: [],
              },
            ],
          },
        ],
      },
      {
        id: "project",
        label: "Project Y",
        status: STATUS.UNCHECKED,
        children: [
          {
            id: "research",
            label: "Research",
            status: STATUS.UNCHECKED,
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: "personal",
    label: "Personal",
    status: STATUS.UNCHECKED,
    children: [
      {
        id: "finance",
        label: "Finance",
        status: STATUS.UNCHECKED,
        children: [
          {
            id: "tax",
            label: "Tax 2023",
            status: STATUS.UNCHECKED,
            children: [],
          },
          {
            id: "investment",
            label: "Investments",
            status: STATUS.UNCHECKED,
            children: [],
          },
        ],
      },
      {
        id: "travel",
        label: "Travel Plans",
        status: STATUS.UNCHECKED,
        children: [
          {
            id: "europw",
            label: "Europe Trip",
            status: STATUS.UNCHECKED,
            children: [
              {
                id: "flight",
                label: "Flight Bookings",
                status: STATUS.UNCHECKED,
                children: [],
              },
              {
                id: "hotel",
                label: "Hotel Reservations",
                status: STATUS.UNCHECKED,
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "archived",
    label: "Archived",
    status: STATUS.UNCHECKED,
    children: [],
  },
];

export default data;
