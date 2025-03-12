import { useState, useEffect } from 'react';
import * as petService from './services/petService';
import PetList from './components/PetList/PetList';
import PetDetail from './components/PetDetail/PetDetail';
import PetForm from './components/PetForm/PetForm';


const App = () => {
  const [pets, setPets] = useState([]);
  const [selected, setSelected] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);


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

  // this will set the clicked pet to the fetch pet once clicked 
  const handleSelect = (pet) => {
    setSelected(pet)
    // Close the form if it's open when a new pet is selected.
    setIsFormOpen(false);
  };

  const handleFormView = () => {
    setIsFormOpen(!isFormOpen);
  };

  // Return the new PetList component inside a React fragment
  return (
    <>
      <PetList
        pets={pets}
        handleSelect={handleSelect}
        handleFormView={handleFormView}
        isFormOpen={isFormOpen}

      />
      {isFormOpen ? (
        <PetForm />
      ) : (
        <PetDetail selected={selected} />
      )}

    </>
  );
};





export default App;