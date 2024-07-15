import React, { useState } from "react";
import ActionButton from "../../../../../../components/UI/common/form-controls/buttons/ActionButton";
import CustomDropdown from "../../../../../../components/UI/common/form-controls/inputs/CustomDropdown";
import TextInput from "../../../../../../components/UI/common/form-controls/inputs/TextInput";

const AddressForm = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    company: "",
    vatNumber: "",
    country: "",
    city: "",
    address1: "",
    address2: "",
    state: "",
    zip: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleDropdownChange = (name: string, value: string) => {
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <form>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <TextInput
          name="firstName"
          label="First Name"
          placeholder="First Name"
          value={formValues.firstName}
          onChange={handleInputChange}
        />
        <TextInput
          name="lastName"
          label="Last Name"
          placeholder="Last Name"
          value={formValues.lastName}
          onChange={handleInputChange}
        />
        <TextInput
          name="company"
          label="Company"
          placeholder="Company"
          value={formValues.company}
          onChange={handleInputChange}
        />
        <TextInput
          name="vatNumber"
          label="VAT Number / Company ID"
          placeholder="VAT Number / Company ID"
          value={formValues.vatNumber}
          onChange={handleInputChange}
        />
        <CustomDropdown
          label="Country"
          options={["Select a Country", "USA", "Canada", "UK"]}
          value={formValues.country}
          onChange={(value: string) => handleDropdownChange("country", value)}
        />
        <TextInput
          name="city"
          label="City"
          placeholder="City"
          value={formValues.city}
          onChange={handleInputChange}
        />
        <TextInput
          name="address1"
          label="Address Line 1"
          placeholder="Address Line 1"
          value={formValues.address1}
          onChange={handleInputChange}
        />
        <TextInput
          name="address2"
          label="Address Line 2"
          placeholder="Address Line 2"
          value={formValues.address2}
          onChange={handleInputChange}
        />
        <TextInput
          name="state"
          label="State / Province"
          placeholder="State / Province"
          value={formValues.state}
          onChange={handleInputChange}
        />
        <TextInput
          name="zip"
          label="Zip Code"
          placeholder="Zip Code"
          value={formValues.zip}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex justify-start gap-3 mt-[54px]">
        <ActionButton
          type="submit"
          label={"Submit"}
          className="bg-[#FF532E] text-white w-full max-w-[200px]"
        />
        <ActionButton
          type="button"
          label={"Discard"}
          className="bg-transparent text-white w-full max-w-[136px]"
        />
      </div>
    </form>
  );
};

export default AddressForm;
