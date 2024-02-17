"use client";

import NavBar from "../../components/navMehraj";
import {
  Input,
  Button,
  CheckboxGroup,
  Checkbox,
  RadioGroup,
  Radio,
  Select,
  SelectItem,
  NextUIProvider,
} from "@nextui-org/react";
import { useState } from "react";
import Nice from "../nice";

export default function Home() {
  const [formValues, setFormValues] = useState({} as any);
  const animals = [ 
    { label: "Cat", value: "cat" },
    { label: "Dog", value: "dog" },
    { label: "Elephant", value: "elephant" },
    { label: "Lion", value: "lion" },
    { label: "Tiger", value: "tiger" },
  ];

  function handleSubmit() {
    console.log(formValues);
  }

  return (
    <NextUIProvider>
    <div>
      <NavBar />
      <Nice titleText="Hello" isVisible={false}/>
      <br />
      <br />
      <br />
      <div className="w-full flex justify-center align-center">
        <div className="w-[810px] h-[540px]">
          <div className="w-full h-full bg-slate-100 rounded-2xl shadow-lg">
            <div className="w-full h-20 flex justify-center items-center">
              <h1 className="text-3xl font-semibold text-black">Form Title</h1>
            </div>
            <div
              className="w-full flex justify-center items-center"
              style={{ height: "calc(100% - 80px)" }}
            >
              <form
                className="w-full h-full flex flex-col justify-start items-center pt-4 hide-scrollbar"
                style={{ overflow: "scroll" }}
              >
                <Input
                  type="email"
                  variant={"bordered"}
                  label="Email"
                  isRequired={false}
                  value={formValues.email}
                  onChange={(e) => {
                    setFormValues({ ...formValues, email: e.target.value });
                  }}
                  // isClearable={false}
                  // onClear={() => {
                  //   setFormValues({ ...formValues, email: "" });
                  // }}
                  style={{ border: "0px" }}
                  className="w-5/6 pb-4"
                />
                <Input
                  type="password"
                  variant={"bordered"}
                  label="Password"
                  isRequired={false}
                  value={formValues.password}
                  onChange={(e) => {
                    setFormValues({ ...formValues, password: e.target.value });
                  }}
                  // isClearable={false}
                  // onClear={() => {
                  //   setFormValues({ ...formValues, password: "" });
                  // }}
                  style={{ border: "0px" }}
                  className="w-5/6 pb-4"
                />
                <Select
                  items={animals}
                  className="w-5/6 pb-4"                  
                  label="Favorite Animal"
                  placeholder="Select an animal"
                  value={formValues.animal}
                  onChange={(e) => {
                    setFormValues({ ...formValues, animal: e.target.value });
                  }}
                >
                  {(animal) => (
                    <SelectItem key={animal.value}>{animal.label}</SelectItem>
                  )}
                </Select>
                <CheckboxGroup
                  label="Select cities"
                  orientation="horizontal"
                  className="w-5/6 pb-4"
                  color="primary"
                  value={formValues.cities}
                  onChange={(e) => {
                    setFormValues({ ...formValues, cities: e });
                  }}
                >
                  <Checkbox value="Dhaka">Dhaka</Checkbox>
                  <Checkbox value="Sylhet">Sylhet</Checkbox>
                  <Checkbox value="Chittagong">Chittagong</Checkbox>
                  <Checkbox value="Barisal">Barisal</Checkbox>
                </CheckboxGroup>
                <RadioGroup
                  label="Select your education level"
                  orientation="horizontal"
                  className="w-5/6 pb-4"
                  color="primary"
                  value={formValues.eduLevel}
                  onChange={(e) => {
                    setFormValues({ ...formValues, eduLevel: e.target.value });
                  }}
                >
                  <Radio value="HSC">HSC</Radio>
                  <Radio value="SSC">SSC</Radio>
                  <Radio value="JSC">JSC</Radio>
                  <Radio value="PSC">PSC</Radio>
                </RadioGroup>                
                <Button
                  className="m-5"
                  style={{ backgroundColor: "#CCE2FC", color: "#0070F0" }}
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSubmit();
                  }}
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </NextUIProvider>
  );
}

// varients: bordered flat underlined faded
// size: sm md lg
// color: primary secondary success warning danger success default
