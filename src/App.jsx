import { useState, useEffect } from 'react';
import * as petService from './services/petService'; 
import PetList from './components/PetList/PetList';


const App = () => {
  const [pets, setPets] = useState([]);

  // Create a new useEffect
  useEffect(() => {
    // Create a new async function
    const fetchPets = async () => {
      try {
      // Call on the pet service's index function
      const fetchedPets = await petService.index();
      // Don't forget to pass the error object to the new Error
      if (fetchedPets.err) {
        throw new Error(fetchedPets.err);
      }
      // Set pets state to the returned pets data
      setPets(fetchedPets);
    } catch (err) {
      // Log the error object
      console.log(err);
    }
  };
    // Invoke the function
    fetchPets();
    // Add an empty dependency array to the `useEffect()` hook.
  }, []);

    // Return the new PetList component inside a React fragment
  return (
    <>
      <PetList pets={pets} />
    </>
  );
};





export default App;