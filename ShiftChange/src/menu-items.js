export default {
  items: [
    {
      id: "navigation",
      title: "Navigation",
      type: "group",
      icon: "icon-navigation",
      children: [
        {
          id: "dashboard",
          title: "Dashboard",
          type: "item",
          url: "/dashboard/default",
          icon: "feather icon-home"
        }
      ]
    },
    {
      id: "ui-element-reports",
      title: "Reports",
      type: "group",
      icon: "icon-ui",
      children: [
        {
          id: "newreport",
          title: "New Report",
          type: "item",
          icon: "icon-ui",
          url: "/newreport"
        },
        {
          id: "allreports",
          title: "All Reports",
          type: "item",
          icon: "icon-ui",
          url: "/allreports"
        },
        {
          id: "myreports",
          title: "My Reports",
          type: "item",
          icon: "icon-ui",
          url: "/myreports"
        }
      ]
    },
    {
      id: "ui-element-shift-report",
      title: "Shift Report",
      type: "group",
      icon: "icon-ui",
      children: [
        {
          id: "Areaa",
          title: "Area 1",
          type: "collapse",
          icon: "feather icon-file",
          children: [
            {
              id: "productionsupervisorreport",
              title: "Production Supervisor Report",
              type: "item",
              url: "/productionsupervisor"
            },
            {
              id: "areasupervisorreport",
              title: "Area Supervisor Report",
              type: "item",
              url: "/areasupervisor"
            },
            {
              id: "areaareport",
              title: "Area A Report",
              type: "item",
              url: "/areaa"
            },
            {
              id: "consolereport",
              title: "Console Report",
              type: "item",
              url: "/consolereport"
            },
            {
              id: "fieldreport",
              title: "Field Report",
              type: "item",
              url: "/field"
            }
            /*{
              id: "breadcrumb-pagination",
              title: "Process Operator",
              type: "item",
              url: "/shiftreport"
            }*/
          ]
        },
        {
          id: "Area2",
          title: "Area 2",
          type: "collapse",
          icon: "feather icon-file",
          children: [
            {
              id: "productionsupervisorreport",
              title: "Production Supervisor Report",
              type: "item",
              url: "/productionsupervisor"
            },
            {
              id: "areasupervisorreport",
              title: "Area Supervisor Report",
              type: "item",
              url: "/areasupervisor"
            },
            {
              id: "areaareport",
              title: "Area A Report",
              type: "item",
              url: "/areaa"
            },
            {
              id: "consolereport",
              title: "Console Report",
              type: "item",
              url: "/consolereport"
            },
            {
              id: "fieldreport",
              title: "Field Report",
              type: "item",
              url: "/field"
            }
            /*{
              id: "breadcrumb-pagination",
              title: "Process Operator",
              type: "item",
              url: "/shiftreport"
            }*/
          ]
        },
        {
          id: "Area3",
          title: "Area 3",
          type: "collapse",
          icon: "feather icon-file",
          children: [
            {
              id: "productionsupervisorreport",
              title: "Production Supervisor Report",
              type: "item",
              url: "/productionsupervisor"
            },
            {
              id: "areasupervisorreport",
              title: "Area Supervisor Report",
              type: "item",
              url: "/areasupervisor"
            },
            {
              id: "areaareport",
              title: "Area A Report",
              type: "item",
              url: "/areaa"
            },
            {
              id: "consolereport",
              title: "Console Report",
              type: "item",
              url: "/consolereport"
            },
            {
              id: "fieldreport",
              title: "Field Report",
              type: "item",
              url: "/field"
            }
            /*{
              id: "breadcrumb-pagination",
              title: "Process Operator",
              type: "item",
              url: "/shiftreport"
            }*/
          ]
        },
        {
          id: "Area4",
          title: "Area 4",
          type: "collapse",
          icon: "feather icon-file",
          children: [
            {
              id: "productionsupervisorreport",
              title: "Production Supervisor Report",
              type: "item",
              url: "/productionsupervisor"
            },
            {
              id: "areasupervisorreport",
              title: "Area Supervisor Report",
              type: "item",
              url: "/areasupervisor"
            },
            {
              id: "area4report",
              title: "Area 4 Report",
              type: "item",
              url: "/areaa"
            },
            {
              id: "consolereport",
              title: "Console Report",
              type: "item",
              url: "/consolereport"
            },
            {
              id: "fieldreport",
              title: "Field Report",
              type: "item",
              url: "/field"
            }
            /*{
              id: "breadcrumb-pagination",
              title: "Process Operator",
              type: "item",
              url: "/shiftreport"
            }*/
          ]
        }
      ]
    },
    {
      id: "ui-element-administration",
      title: "Administration",
      type: "group",
      icon: "icon-ui",
      children: [
        {
          id: "Administration",
          title: "Administration",
          type: "collapse",
          icon: "feather icon-server",
          children: [
            {
              id: "productionsupervisor",
              title: "Production Supervisor",
              type: "item",
              url: "/productionsupervisor"
            },
            {
              id: "area-supervisor",
              title: "Area Supervisor",
              type: "item",
              url: "/basic/badges"
            },
            {
              id: "area-a",
              title: "Area A",
              type: "item",
              url: "/basic/badges"
            },
            {
              id: "console-report",
              title: "Console Report",
              type: "item",
              url: "/basic/badges"
            },
            {
              id: "field-report",
              title: "Field Report",
              type: "item",
              url: "/basic/badges"
            },
            {
              id: "process-operator",
              title: "Process Operator",
              type: "item",
              url: "/shiftreport"
            }
          ]
        }
      ]
    }
  ]
};
