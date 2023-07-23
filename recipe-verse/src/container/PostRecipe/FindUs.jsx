//post a recipe page

import React from 'react';

import { Stepper, Step, StepLabel } from "@material-ui/core";
import "@material-ui/core/styles";

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import Modal from '@material-ui/core/Modal';




import './FindUs.css';



const FindUs = () => {



  const [activeStep, setActiveStep] = React.useState(0);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  //step1
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [usernameError, setUsernameError] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);


  //step2
  const [mealName, setMealName] = React.useState("");
  const [mealTypeValue, setMealTypeValue] = React.useState("");
  const [cuisineTypeValue, setCuisineTypeValue] = React.useState("");
  const [mealNameError, setMealNameError] = React.useState(false);
  const [mealTypeError, setMealTypeError] = React.useState(false);
  const [cuisineTypeError, setCuisineTypeError] = React.useState(false);


  //step3
  const [allergens, setAllergens] = React.useState([]);
  const [newAllergen, setNewAllergen] = React.useState("");
  const [newAllergenError, setNewAllergenError] = React.useState(false);


  const [submitted, setSubmitted] = React.useState(false);


  const steps = [
    "Personal Information",
    "Meal Information",
    "Allergens",
    "Ingredients",
    "Instructions"
  ];

  const mealType = [
    { value: 'Breakfast', label: 'Breakfast' },
    { value: 'Lunch', label: 'Lunch' },
    { value: 'Dinner', label: 'Dinner' },
    { value: 'Dessert', label: 'Dessert' },
    { value: 'Snack', label: 'Snack' },
  ];

  const cuisineType = [
    { value: 'French', label: 'French' },
    { value: 'Italian', label: 'Italian' },
    { value: 'Asian', label: 'Asian' },
    { value: 'Other', label: 'Other' },
  ];
  const handleNext = () => {
    if (activeStep === 0) {
      if (!username.trim()) {
        setUsernameError(true);
      } else {
        setUsernameError(false);
      }

      if (!email.trim()) {
        setEmailError(true);
      } else {
        setEmailError(false);
      }

      if (!username.trim() || !email.trim()) {
        return;
      }
    }

    if (activeStep === 1) {
      if (!mealName.trim()) {
        setMealNameError(true);
      } else {
        setMealNameError(false);
      }

      if (!mealTypeValue) {
        setMealTypeError(true);
      } else {
        setMealTypeError(false);
      }

      if (!cuisineTypeValue) {
        setCuisineTypeError(true);
      } else {
        setCuisineTypeError(false);
      }

      if (!mealName.trim() || !mealTypeValue || !cuisineTypeValue) {
        return;
      }

    }

    else if (activeStep === 3) {
      console.log("hello4");

      // Check for empty fields in Step 4 (Ingredients)
      if (ingredients.length === 0) {
        setNewIngredientError(true);
        return;
      }
    } else if (activeStep === 4) {
      // Check for empty fields in Step 5 (Instructions)
      if (instructions.length === 0) {
        setNewInstructionError(true);
        return;
      }

      setNewInstructionError(false);
      setOpen(true);
    }


    if (activeStep < 4) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else {
      console.log("hello1");

    }

  };

  const handleBack = () => {
    if (activeStep > 0)
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  //step3 allergens
  const handleAddAllergen = () => {
    if (newAllergen.trim()) {
      setAllergens([...allergens, newAllergen.trim()]);
      setNewAllergen(""); // Reset the input field
      setNewAllergenError(false); // Reset the error state
    } else {
      setNewAllergenError(true); // Set the error state if the field is empty
    }
  };

  const handleRemoveAllergen = (index) => {
    const updatedAllergens = [...allergens];
    updatedAllergens.splice(index, 1);
    setAllergens(updatedAllergens);
  };


  // Step 4: Ingredients
  const [ingredients, setIngredients] = React.useState([]);
  const [newIngredient, setNewIngredient] = React.useState("");
  const [newIngredientError, setNewIngredientError] = React.useState(false);

  const handleAddIngredient = () => {
    if (newIngredient.trim()) {
      setIngredients([...ingredients, newIngredient.trim()]);
      setNewIngredient(""); // Reset the input field
      setNewIngredientError(false); // Reset the error state
    } else {
      setNewIngredientError(true); // Set the error state if the field is empty
    }
  };

  const handleRemoveIngredient = (index) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients.splice(index, 1);
    setIngredients(updatedIngredients);
  };

  // Step 5: Instructions
  const [instructions, setInstructions] = React.useState([]);
  const [newInstruction, setNewInstruction] = React.useState("");
  const [newInstructionError, setNewInstructionError] = React.useState(false);

  const handleAddInstruction = () => {
    if (newInstruction.trim()) {
      setInstructions([...instructions, newInstruction.trim()]);
      setNewInstruction(""); // Reset the input field
      setNewInstructionError(false); // Reset the error state
    } else {
      setNewInstructionError(true); // Set the error state if the field is empty
    }
  };

  const handleRemoveInstruction = (index) => {
    const updatedInstructions = [...instructions];
    updatedInstructions.splice(index, 1);
    setInstructions(updatedInstructions);
  };


  return (
    <div className="app_post_page">
      <div className="app__post">
        <div style={{ margin: 30 }}>
          <Stepper alternativeLabel activeStep={activeStep} className="post-stepper">
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {activeStep === 0 && (
            <div className="post-form-container1">
              <form noValidate autoComplete="off">
                {/* Step 1: Personal Information */}
                <div>
                  <TextField
                    className="field"
                    label="UserName"
                    variant="outlined"
                    required
                    error={usernameError}
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                      setUsernameError(false);
                    }}
                  />
                </div>
                <div>
                  <TextField
                    className="field"
                    label="Email"
                    variant="outlined"
                    required
                    error={emailError}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setEmailError(false);
                    }}
                  />
                </div>
              </form>
            </div>
          )}

          {activeStep === 1 && (
            <div className="post-form-container2">
              <form noValidate autoComplete="off">

                {/* Step 2: Meal Information */}
                <div>
                  <TextField
                    className="field"
                    label="Meal Name"
                    variant="outlined"
                    required
                    error={mealNameError}
                    helperText={mealNameError ? "Meal Name is required" : ""}
                    value={mealName}
                    onChange={(e) => {
                      setMealName(e.target.value);
                      setMealNameError(false);
                    }}
                  />
                </div>
                <div>
                  <TextField
                    variant="outlined"
                    className="field"
                    select
                    required

                    label="Meal Type"
                    value={mealTypeValue}
                    onChange={(e) => {
                      setMealTypeValue(e.target.value);
                      setMealTypeError(false);
                    }}
                    error={mealTypeError}
                    helperText={
                      mealTypeError ? "Meal Type is required" : "Please select the meal type"
                    }

                  >
                    {mealType.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
                <div>
                  <TextField
                    variant="outlined"
                    className="field"
                    select
                    required

                    label="Cuisine Type"
                    value={cuisineTypeValue}
                    onChange={(e) => {
                      setCuisineTypeValue(e.target.value);
                      setCuisineTypeError(false);
                    }}
                    error={cuisineTypeError}
                    helperText={
                      cuisineTypeError ? "Cuisine Type is required" : "Please select the cuisine type"
                    }
                  >
                    {cuisineType.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
              </form>
            </div>
          )}


          {/* Step 3: Allergens */}
          {activeStep === 2 && (
            <div className="post-form-container1">
              <form noValidate autoComplete="off">
                {allergens.map((allergen, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
                    <TextField
                      className="field"
                      label={`Allergen ${index + 1}`}
                      variant="outlined"
                      value={allergen}
                      disabled // Disable input for existing allergens
                    />
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => handleRemoveAllergen(index)}
                    >
                      Remove
                    </Button>
                  </div>
                ))}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <TextField
                    className="field"
                    label="New Allergen"
                    variant="outlined"
                    value={newAllergen}
                    onChange={(e) => setNewAllergen(e.target.value)}
                    error={newAllergenError} // Show error style if the field is empty
                    helperText={newAllergenError ? "Please add the allergen" : ""}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleAddAllergen}
                    style={{ marginLeft: 10 }}
                  >
                    Add Allergen
                  </Button>
                </div>
              </form>
            </div>
          )}

          {/* Step 4: Ingredients */}
          {activeStep === 3 && (
            <div className="post-form-container1">
              <form noValidate autoComplete="off">
                {ingredients.map((ingredient, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
                    <TextField
                      className="field"
                      label={`Ingredient ${index + 1}`}
                      variant="outlined"
                      value={ingredient}
                      disabled // Disable input for existing ingredients
                    />
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => handleRemoveIngredient(index)}
                    >
                      Remove
                    </Button>
                  </div>
                ))}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <TextField
                    className="field"
                    label="New Ingredient"
                    variant="outlined"
                    value={newIngredient}
                    onChange={(e) => setNewIngredient(e.target.value)}
                    error={newIngredientError} // Show error style if the field is empty
                    helperText={newIngredientError ? "Ingredient cannot be empty" : ""}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleAddIngredient}
                    style={{ marginLeft: 10 }}
                  >
                    Add Ingredient
                  </Button>
                </div>
              </form>
            </div>
          )}

          {/* Step 5: Instructions */}
          {activeStep === 4 && (
            <div className="post-form-container1">
              <form noValidate autoComplete="off">
                {instructions.map((instruction, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
                    <TextField
                      className="field"
                      label={`Instruction ${index + 1}`}
                      variant="outlined"
                      value={instruction}
                      disabled // Disable input for existing instructions
                    />
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => handleRemoveInstruction(index)}
                    >
                      Remove
                    </Button>
                  </div>
                ))}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <TextField
                    className="field"
                    label="New Instruction"
                    variant="outlined"
                    value={newInstruction}
                    onChange={(e) => setNewInstruction(e.target.value)}
                    error={newInstructionError} // Show error style if the field is empty
                    helperText={newInstructionError ? "Instruction cannot be empty" : ""}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleAddInstruction}
                    style={{ marginLeft: 10 }}
                  >
                    Add Instruction
                  </Button>
                </div>
              </form>
            </div>
          )}


          <div className="post-btn-container">
            <Button variant="contained" color="primary" id="post_step_button" onClick={handleBack}>
              Back
            </Button>

            {activeStep !== steps.length - 1 ? (
              <div>
                <Button variant="contained" color="primary" id="post_step_button" onClick={handleNext}>
                  Next
                </Button>
              </div>

            ) : (

              <Button variant="contained" color="primary" id="post_step_button" onClick={handleNext}>
                Finish
              </Button>
            )}
          </div>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className='popover-box'>
          <Typography variant="h6" component="h2" style={{ color: '#4caf50', marginBottom: '3rem' }}>
            Success! Your recipe has been successfully submitted!
          </Typography>
          
          <Typography variant="h6" paragraph id='modal-modal-description'>
            Thank you for sharing your delicious recipe with us.
          </Typography>
          <Typography variant="h6" paragraph id='modal-modal-description'>
            We appreciate your contribution to our recipe community.
          </Typography>
          <Typography paragraph id='modal-modal-description'>
            If you wish to make any changes or have any questions, please feel free to contact us at recipeVerse@gmail.com.

          </Typography>
          
        </Box>

      </Modal>

    </div>
  );
};

export default FindUs;
