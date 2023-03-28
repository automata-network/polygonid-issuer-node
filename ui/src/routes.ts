export type RouteID =
  | "credentialLink"
  | "credentials"
  | "importSchema"
  | "issueCredential"
  | "notFound"
  | "schemaDetails"
  | "schemas";

export type Layout = "fullWidth" | "fullWidthGrey" | "sider";

type Routes = Record<
  RouteID,
  {
    layout: Layout;
    path: string;
  }
>;

export const ROUTES: Routes = {
  credentialLink: {
    layout: "fullWidthGrey",
    path: "/credential-link/:credentialID",
  },
  credentials: {
    layout: "sider",
    path: "/credentials/:tabID",
  },
  importSchema: {
    layout: "sider",
    path: "/schemas/import-schema",
  },
  issueCredential: {
    layout: "sider",
    path: "/credentials/issue/:schemaID?",
  },
  notFound: {
    layout: "fullWidth",
    path: "/*",
  },
  schemaDetails: {
    layout: "sider",
    path: "/schemas/:schemaID",
  },
  schemas: {
    layout: "sider",
    path: "/schemas",
  },
};
