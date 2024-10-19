import { ThemeProvider, AccPageProvider } from "./context";
import { HeaderContent, MainContent, PaginationContent } from "./components";

const App = () => {
  return (
    <ThemeProvider>
      <AccPageProvider>
        <HeaderContent />
        <MainContent />
        <PaginationContent />
      </AccPageProvider>
    </ThemeProvider>
  );
};
export default App;
