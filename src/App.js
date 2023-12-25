import "react-native-gesture-handler";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MMKV } from "react-native-mmkv";
import { PaperProvider } from "react-native-paper";
import { ThemeProvider } from "@/theme";
import ApplicationNavigator from "./navigators/Application";
import "./translations";
import { LogBox } from "react-native";
LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const queryClient = new QueryClient();
export const storage = new MMKV();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>
        <ThemeProvider storage={storage}>
          <ApplicationNavigator />
        </ThemeProvider>
      </PaperProvider>
    </QueryClientProvider>
  );
}
export default App;
