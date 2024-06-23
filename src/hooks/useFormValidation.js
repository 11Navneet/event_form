const useFormValidation = (formData) => {
  const errors = {};

  if (!formData.name) {
    errors.name = "Name is required";
  }

  if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!formData.age || formData.age <= 0 || isNaN(formData.age)) {
    errors.age = "Age must be a number greater than 0";
  }

  if (formData.guest && !formData.guest_name) {
    errors.guest_name = "Guest name is required if attending with a guest";
  }

  return errors;
}

export default useFormValidation;
