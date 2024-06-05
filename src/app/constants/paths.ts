export const paths = [
    {
      name: "Project Mangament",
      path: "/project-management",
      children: [
        {
          name: "Planning",
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
      children: [
        {
          name: "Frontend",
          path: "/development/frontend",
        },
        {
          name: "Backend",
          path: "/development/backend",
        },
      ],
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