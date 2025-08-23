
import './global.css'
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as ReduxProvider } from "react-redux";
import { reduxStore } from "./src/config/reduxStore";
import { Routes } from './src/Routes';


export default function App() {



  return (
    <ReduxProvider store={reduxStore}>

      <PaperProvider>
        return (
              <Routes/>
          );
            </PaperProvider>
     </ReduxProvider>
        );
}
