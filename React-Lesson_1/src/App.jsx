// import Greet from "./components/Greet";

import ComponentA from "./components/propDrilling/ComponentA";
// import UseEffectDemo from "./components/switch/useEffectDemo";
import Greeting from "./jsx/Greeting";
import ProductInfo from "./jsx/ProductInfo";
// import WelcomeMessage from "./jsx/WelcomeMessage";

// import Header from "./components/Header";
// import MainContent from "./components/MainContent";
// import Footer from "./components/Footer";

const App = () => {
  const statement = "React Learner: Prop drilling";
  return (
    <section>
      <Greeting />
      <ProductInfo />
      <ComponentA statement={statement} />
      {/* <Greet /> */}
      {/* <Header />
      <MainContent />
      <Footer /> */}
      {/* <UseEffectDemo /> */}
    </section>
  );
};

export default App;
