import { useContext, useEffect } from "react";
import { Theme, ThemeProvider, AmountProvider, AccPageProvider } from "./context";
import { HeaderContent, MainContent, PaginationContent } from "./components";

const App = () => {
  return (
    <ThemeProvider>
      <AmountProvider>
        <AccPageProvider>
          <HeaderContent />
          <MainContent />
          <PaginationContent />
        </AccPageProvider>
      </AmountProvider>
    </ThemeProvider>
  );
};
export default App;
