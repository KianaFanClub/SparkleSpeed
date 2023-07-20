import {defineConfig} from "umi";
import routes from "./routes";
import antd from "./antd";
import plugins from "./plugins";
import layout from "./layout";

export default defineConfig({
    npmClient: 'pnpm',
    plugins,
    routes,
    antd,
    layout
})
