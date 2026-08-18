// App.tsx

import "./App.css";
import { InputFirstName } from "./components/Content/InputForm/InputFirstName";
import { InputLastName } from "./components/Content/InputForm/InputLastName";
import { SelectTime } from "./components/Content/InputForm/SelectTime";
import { ShowButton } from "./components/Content/InputForm/ShowButton";
import { OutputForm } from "./components/Content/OutputForm/OutputForm";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { handleGreeting } from "./stores/greetingStore";

function App() {
  return (
    <main class="bg-slate-950 min-h-screen flex flex-col items-center justify-center p-4">
      <div class="bg-purple-900 border-2 border-cyan-400 rounded-2xl p-6 w-full max-w-md text-center">
        <Header />
        <form onSubmit={handleGreeting} class="space-y-4">
          <InputFirstName />
          <InputLastName />
          <SelectTime />
          <ShowButton />
        </form>
        <hr class="border-cyan-500 my-6" />
        <OutputForm />
        <Footer />
      </div>
    </main>
  );
}

export default App;
