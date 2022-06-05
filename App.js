import { TailwindProvider } from 'tailwind-rn';
import utilities from './tailwind.json';
import MyComponent from './components/MyComponent'

export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <MyComponent />
    </TailwindProvider>
  );
}

