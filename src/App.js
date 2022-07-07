import './App.css';
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";
import { TodoFnComponent, TodoClsComponent } from './components/todos';
import { PostFnComponent, PostClsComponent } from './components/post';

import { Button } from './components/button';
export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");
  const [activeTab, setActiveTab] = useState("fn")
  const [active, setActive] = useState("post-fn")

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <div className="switch">
          <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
        <div className='container'>
     <div className="btn-group tabs" role="group" ariaLabel="Basic example">
       <Button onClick={() => setActiveTab("cls")} className={activeTab}>Todos Class Component</Button>
       <Button onClick={() => setActiveTab("fn")} className={activeTab}>Todos Fn Component</Button>
       <Button onClick={() => setActive("post-cls")} className={active}>Post Class Component</Button>
       <Button onClick={() => setActive("post-fn")} className={active}>Post Fn Component</Button>
     </div>
     <br />
     
     { activeTab === "fn" ? <TodoFnComponent /> : <TodoClsComponent />}
     { active === "post-fn" ? <PostFnComponent /> : <PostClsComponent />}
    
   </div>
  </div>
      
    </ThemeContext.Provider>
  
  );
}

export default App;
