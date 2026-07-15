import {
  Lock,
  Shield,
  Moon,
  Bell,
  FileText,
  Info,
  ChevronRight,
} from "lucide-react";

export const settingsSections = [

  {
    title: "Account",

    items: [

      {
        id: "password",
        icon: Lock,
        title: "Change Password",
        subtitle: "Update your account password",
        arrow: true,
      },

    ],

  },

 {
    title: "Preferences",

    items: [

        {

            id: "notifications",

            icon: Bell,

            title: "Notifications",

            subtitle: "Manage reminder alerts",

            toggle: true,

        },

        {

            id: "darkmode",

            icon: Moon,

            title: "Dark Mode",

            subtitle: "Coming Soon",

            toggle: true,

        },

    ]

},
  {
    title: "More",

    items: [

      {
        id: "privacy",
        icon: Shield,
        title: "Privacy Policy",
        subtitle: "Read our privacy policy",
        arrow: true,
      },

      {
        id: "terms",
        icon: FileText,
        title: "Terms & Conditions",
        subtitle: "Terms of using Echoes",
        arrow: true,
      },

      {
        id: "about",
        icon: Info,
        title: "About Echoes",
        subtitle: "Version 1.0.0",
        arrow: true,
      },

    ],

  },

];