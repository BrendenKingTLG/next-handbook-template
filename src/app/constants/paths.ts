export const paths = [
  {
    name: "Onboarding",
    path: "/onboarding",
    children: [
      {
        name: "Admin Tasks",
        path: "/onboarding/admin-tasks",
      },
      {
        name: "Developer Setup",
        path: "/onboarding/dev-setup",
      },
    ],
  },
    {
      name: "Project Mangament",
      path: "/project-management",
      children: [
        {
          name: "Release/Roadmap",
          path: "/project-management/planning",
        },
        {
          name: "Issues/Epics/Milestones",
          path: "/project-management/issues",
        },
      ],
    },
    {
      name: "Development",
      path: "/development",
      children: [],
    },
    {
      name: "Deployment",
      path: "/deployment",
      children: [
        {
          name: "Gitlab CI/CD",
          path: "/deployment/gitlab",
        },
        {
          name: "AWS",
          path: "/deployment/aws",
        },
      ],
    },
    {
      name: "Observability",
      path: "/observability",
      children: [
        {
          name: "Tools",
          path: "/observability/tools",
        },
      ],
    },
  ];